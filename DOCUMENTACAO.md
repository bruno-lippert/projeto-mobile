# Ivoti Cidadã — Documentação do Código-Fonte

Aplicativo mobile para registro e acompanhamento de solicitações de melhorias urbanas na cidade de Ivoti/RS.  
Desenvolvido com **React Native**, **Expo SDK 54**, **TypeScript** e **Zod**.

---

## 1. Visão Geral da Arquitetura

```
projeto-mobile-main/
├── app/                    # Telas (file-based routing via expo-router)
│   ├── _layout.tsx         # Layout raiz (Stack Navigator)
│   ├── index.tsx           # Tela inicial — Feed de solicitações
│   └── solicitacao/
│       ├── [id].tsx        # Detalhes de uma solicitação (rota dinâmica)
│       ├── inserir.tsx     # Formulário de nova solicitação
│       └── solicitacaoEnviada.tsx  # Tela de confirmação
├── components/             # Componentes reutilizáveis de UI
├── enums/                  # Enums de Categoria e Status
├── hooks/                  # Hook de extração de erros Zod
├── service/                # Dados mock e serviço de busca
└── types/                  # Interfaces TypeScript (Solicitacao, Endereco)
```

O roteamento é baseado em arquivos (expo-router). Cada arquivo dentro de `app/` corresponde a uma rota no app.

---

## 2. Navegação (`app/_layout.tsx`)

O layout raiz configura um **Stack Navigator** com as seguintes rotas:

| Rota | Header | Descrição |
|------|--------|-----------|
| `index` | Oculto | Feed principal |
| `solicitacao/[id]` | Visível | Detalhes da solicitação |
| `solicitacao/inserir` | Visível ("Nova Solicitação") | Formulário de criação |
| `solicitacao/solicitacaoEnviada` | Oculto | Confirmação de envio |

Toda a aplicação é envolvida por `SafeAreaProvider` para respeitar áreas seguras do dispositivo.

---

## 3. Telas Principais

### 3.1. Feed de Solicitações (`app/index.tsx`)

Tela inicial que exibe a lista de solicitações usando `FlatList`. Cada item é renderizado pelo componente `SolicitacaoCard`, que ao ser pressionado navega para a tela de detalhes.

Elementos principais:
- **Header** com título "Feed de Solicitações" e subtítulo
- **FlatList** iterando sobre `mockSolicitacoes`
- **InserirButton** — botão flutuante posicionado no canto inferior direito

### 3.2. Detalhes da Solicitação (`app/solicitacao/[id].tsx`)

Utiliza `useLocalSearchParams()` para capturar o `id` da URL e busca a solicitação via `getSolicitacaoById()`.

Exibe cinco cards de informação:
1. **StatusCard** — badge colorido com o status atual
2. **CategoriaDetailCard** — ícone e nome da categoria
3. **EnderecoCard** — endereço formatado em múltiplas linhas
4. **DataAberturaCard** — data formatada em pt-BR
5. **DescricaoFatosCard** — texto da descrição com destaque visual

Trata o caso de solicitação não encontrada com mensagem de fallback.

### 3.3. Formulário de Nova Solicitação (`app/solicitacao/inserir.tsx`)

Tela mais complexa do app. Gerencia o estado do formulário com `useState` e valida com **Zod** no momento do envio.

**Estado do formulário** (`SolicitacaoForm`):
```ts
{
  categoria: Categoria | null,
  titulo: string,
  descricao: string,
  status: Status.ABERTO,
  endereco: { cep, logradouro, numero, bairro, complemento, pontoReferencia }
}
```

**Validação Zod** (`solicitacaoSchema`):
- `categoria` — enum obrigatório
- `titulo` — string não vazia
- `descricao` — string não vazia
- `endereco.cep` — string não vazia
- `endereco.logradouro` — string não vazia
- `endereco.numero` — mínimo 1 caractere
- `endereco.bairro` — mínimo 1 caractere
- `endereco.complemento` — string (opcional)
- `endereco.pontoReferencia` — string (opcional)

**Fluxo de envio** (`onSubmit`):
1. Valida o formulário com `solicitacaoSchema.safeParse(form)`
2. Se falhar, extrai erros com `extractErrors()` e exibe por campo
3. Se sucesso, gera UUID, adiciona à lista `mockSolicitacoes` e redireciona para tela de confirmação

**Integração ViaCEP**: ao digitar 8 dígitos no campo CEP, o `FormEndereco` busca automaticamente logradouro e bairro via API `viacep.com.br`.

### 3.4. Confirmação de Envio (`app/solicitacao/solicitacaoEnviada.tsx`)

Tela simples com ícone de sucesso (check verde), mensagem de agradecimento e botão "Voltar para o Início" que usa `router.replace("/")`.

---

## 4. Componentes Importantes

### 4.1. `SolicitacaoCard`
Card clicável usado na FlatList do feed. Renderiza categoria (ícone + label), título, endereço resumido e badge de status. Usa `Link` do expo-router para navegar ao detalhe.

### 4.2. `FormEndereco`
Componente de formulário de endereço com 6 campos. Destaque para a **busca automática de CEP**:
- Quando o usuário digita 8 dígitos, chama `buscarCep()` na API ViaCEP
- Preenche automaticamente logradouro e bairro
- Exibe `ActivityIndicator` durante a busca
- Mostra "CEP não encontrado" se falhar

### 4.3. `CategoriaDropdown`
Dropdown implementado com `Modal` e `FlatList`. Exibe as 5 categorias disponíveis com ícone e label. Suporta mensagem de erro de validação.

### 4.4. `TextInputCustom`
Input base reutilizado em todo o app. Suporta exibição de erro com:
- Borda vermelha (`#C0392B`)
- Fundo rosa claro (`#FFF5F5`)
- Mensagem de erro abaixo do campo

### 4.5. `Status`
Badge colorido que mapeia os 7 estados possíveis de uma solicitação com cores distintas para fácil identificação visual.

### 4.6. `Button`
Botão reutilizável com fundo amarelo (`#FABD00`), suporte a ícone filho e feedback visual de pressão (opacidade reduzida).

---

## 5. Tipos e Enums

### 5.1. Enum `Categoria` (`enums/categoria.ts`)
| Valor | Label |
|-------|-------|
| `MANUTENCAO` | Manutenção |
| `ILUMINACAO` | Iluminação Pública |
| `TRANSITO` | Trânsito |
| `LIMPEZA_PUBLICA` | Limpeza de Espaços Públicos |
| `OUTROS` | Outros |

### 5.2. Enum `Status` (`enums/status.ts`)
| Valor | Cor de Fundo | Cor do Texto |
|-------|-------------|-------------|
| `ABERTO` | Azul claro `#E8F0FB` | Azul escuro `#003366` |
| `EM_ANALISE` | Amarelo claro `#FFF8E1` | Marrom `#7A5800` |
| `APROVADO` | Azul escuro `#003366` | Amarelo `#FFC107` |
| `REPROVADO` | Vermelho claro `#F5E6E6` | Vermelho escuro `#8B1A1A` |
| `EM_ANDAMENTO` | Amarelo `#FFC107` | Preto `#1A1A00` |
| `CONCLUIDO` | Cinza escuro `#333333` | Cinza claro `#F8F9FA` |
| `CANCELADO` | Cinza claro `#F8F9FA` | Cinza médio `#888888` |

### 5.3. Interface `Solicitacao` (`types/solicitacao.ts`)
```ts
interface Solicitacao {
  id: string;
  titulo: string;
  descricao: string;
  categoria: Categoria;
  status: Status;
  endereco: Endereco;
  created_At: Date;
  updated_At: Date;
}
```

### 5.4. Interface `Endereco` (`types/endereco.ts`)
```ts
interface Endereco {
  cep: string;
  logradouro: string;
  numero: string;
  bairro: string;
  cidade?: string;    // opcional, preenchido via ViaCEP
  uf?: string;        // opcional, preenchido via ViaCEP
  complemento: string;
  pontoReferencia: string;
}
```

---

## 6. Serviços e Dados

### 6.1. Dados Mock (`service/data.ts`)
Array `mockSolicitacoes` com 3 solicitações de exemplo, usada como fonte de dados em memória. Novas solicitações são adicionadas via `push()` no formulário de inserção.

### 6.2. Busca por ID (`service/solicitacoes.ts`)
Função `getSolicitacaoById(id)` que faz `find()` no array mock.

### 6.3. Busca de CEP (`FormEndereco`)
Chamada à API pública ViaCEP (`https://viacep.com.br/ws/{cep}/json/`) para auto-preenchimento de endereço.

---

## 7. Validação de Formulários

### 7.1. Schema Zod (`app/solicitacao/inserir.tsx`)
A validação é feita com `z.object()` no momento do submit. Campos obrigatórios são marcados com `nonempty()` ou `min(1)`.

### 7.2. Extração de Erros (`hooks/useFormErrors.ts`)
A função `extractErrors(zodError)` converte `ZodError.issues` em um objeto `Record<string, string>` onde a chave é o caminho do campo (ex: `"endereco.cep"`) e o valor é a mensagem de erro. Isso permite exibir erros inline em cada campo do formulário.

---

## 8. Fluxo Completo do Usuário

```
Feed (index) ──[toque no card]──→ Detalhes ([id])
     │
     └──[toque no botão +]──→ Formulário (inserir)
                                    │
                                    ├── Preenche título, descrição
                                    ├── Seleciona categoria (dropdown modal)
                                    ├── Preenche endereço (CEP auto-completa)
                                    ├── Toque em "Enviar"
                                    │     ├── Validação falha → erros inline
                                    │     └── Validação ok → salva + redireciona
                                    │
                                    └──→ Confirmação (solicitacaoEnviada)
                                              │
                                              └──[Voltar para o Início]──→ Feed
```

---

## 9. Paleta de Cores do Design

| Uso | Cor | Hex |
|-----|-----|-----|
| Primária (destaque/botões) | Amarelo | `#FABD00` |
| Secundária (institucional) | Azul escuro | `#003366` |
| Terciária (textos) | Cinza escuro | `#333333` |
| Fundo neutro | Cinza claro | `#F8F9FA` |
| Erro | Vermelho | `#C0392B` |
| Sucesso | Verde | `#27AE60` |
| Botão flutuante | Azul petróleo | `#164E85` |

---

## 10. Dependências Principais

| Pacote | Versão | Finalidade |
|--------|--------|-----------|
| `expo` | ~54.0.0 | Framework mobile |
| `expo-router` | ~6.0.23 | Roteamento file-based |
| `react-native` | 0.81.5 | Runtime mobile |
| `zod` | ^4.3.6 | Validação de schemas |
| `@expo/vector-icons` | ^15.0.2 | Ícones (Material, FontAwesome, etc.) |
| `react-native-safe-area-context` | ~5.6.2 | Áreas seguras do dispositivo |
| `react-native-screens` | ~4.16.0 | Otimização de navegação nativa |
| `@expo/ngrok` | ^4.1.3 | Túnel para desenvolvimento remoto |
