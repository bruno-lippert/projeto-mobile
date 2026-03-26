# Ivoti Cidadã

O **Ivoti Cidadã** é um aplicativo móvel desenvolvido como projeto acadêmico para a disciplina de **Programação para Dispositivos Móveis** (Unisinos). O objetivo do aplicativo é fornecer uma plataforma interativa para o registro e gerenciamento de solicitações e chamados (como problemas de manutenção urbana, iluminação, entre outros), com foco em melhorar a comunicação e agilizar resoluções.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando as principais ferramentas do ecossistema React Native:

- **[React Native](https://reactnative.dev/)**: Framework para desenvolvimento mobile nativo utilizando React.
- **[Expo](https://expo.dev/)**: Plataforma que facilita o desenvolvimento, construção e iteração de projetos React Native.
- **[Expo Router](https://docs.expo.dev/router/introduction/)**: Sistema de roteamento baseado na estrutura de arquivos e pastas.
- **[TypeScript](https://www.typescriptlang.org/)**: Adiciona tipagem estática ao JavaScript, garantindo maior segurança e melhorando a experiência de desenvolvimento.
- **[Zod](https://zod.dev/)**: Biblioteca poderosa para validação de esquemas (schema validation) utilizada nos formulários da aplicação.

## ✨ Funcionalidades

- **Registro de Solicitações**: Interface amigável para envio de novas solicitações, contendo título, descrição, categoria (Manutenção, Iluminação, etc.) e dados de endereço completos.
- **Validação Robusta**: Validação de formulários em tempo real garantindo a consistência dos dados enviados (campos obrigatórios, preenchimento correto) usando o Zod.
- **Busca Automática de Endereço**: Integração com a API ViaCEP para preenchimento automático de logradouro, bairro, cidade e UF ao informar o CEP.
- **Interface Baseada em Componentes**: Componentes customizados e reutilizáveis (Inputs, TextArea, Dropdowns, Botões) focados em usabilidade e design.
- **Navegação Fluida**: Redirecionamentos de tela nativos usando a nova abordagem do Expo Router (ex: Tela de confirmação de envio).

## 📱 Como Usar o Aplicativo

### Tela Inicial — Lista de Solicitações

Ao abrir o app, você verá a lista de solicitações já cadastradas. Cada card mostra:
- **Categoria** (ícone e nome)
- **Título** da solicitação
- **Endereço** resumido
- **Status** atual (Aberto, Em Análise, Aprovado, etc.)

Toque em qualquer card para ver os detalhes completos da solicitação.

### Criar Nova Solicitação

1. Na tela inicial, toque no **botão amarelo (+)** no canto inferior direito.
2. Preencha o formulário:
   - **Categoria** (obrigatório): selecione entre Manutenção, Iluminação, Trânsito, Limpeza Pública ou Outros.
   - **Título** (obrigatório): descreva brevemente o problema.
   - **Descrição** (obrigatório): forneça detalhes sobre a solicitação.
   - **Endereço**:
     - **CEP** (obrigatório): ao digitar os 8 dígitos, logradouro, bairro, cidade e UF são preenchidos automaticamente via ViaCEP.
     - **Número** (obrigatório)
     - **Rua/Logradouro** (obrigatório)
     - **Bairro** (obrigatório)
     - **Complemento** (opcional)
     - **Ponto de Referência** (opcional)
3. Toque em **Enviar**. Se houver campos inválidos, mensagens de erro serão exibidas abaixo de cada campo.
4. Após o envio, você será redirecionado para a **tela de confirmação**.

### Detalhes da Solicitação

Ao tocar em uma solicitação na lista, a tela de detalhes exibe:
- Título e status
- Categoria com ícone
- Endereço completo
- Data de abertura
- Descrição dos fatos

### Categorias Disponíveis

| Categoria        | Descrição                                    |
|------------------|----------------------------------------------|
| Manutenção       | Problemas de infraestrutura e reparos        |
| Iluminação       | Postes queimados, falta de iluminação        |
| Trânsito         | Buracos, sinalização, semáforos              |
| Limpeza Pública  | Coleta de lixo, terrenos baldios             |
| Outros           | Demais solicitações                          |

### Status das Solicitações

| Status        | Significado                                    |
|---------------|------------------------------------------------|
| Aberto        | Solicitação registrada, aguardando análise     |
| Em Análise    | Sendo avaliada pela equipe responsável         |
| Aprovado      | Aprovada para execução                         |
| Reprovado     | Não aprovada                                   |
| Em Andamento  | Trabalho em execução                           |
| Concluído     | Serviço finalizado                             |
| Cancelado     | Solicitação cancelada                          |

## 📦 Como Instalar e Executar

### Pré-requisitos

- **[Node.js](https://nodejs.org/)** versão 18 ou superior
- **npm** (incluído com Node.js) ou **yarn**
- **[Git](https://git-scm.com/)** para clonar o repositório
- **Expo Go** no smartphone (Android/iOS) **ou** um emulador configurado:
  - **Android**: [Android Studio](https://developer.android.com/studio) com emulador configurado
  - **iOS** (somente macOS): Xcode com Simulator

### Passo a passo

1. **Clone o repositório**
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```

2. **Acesse a pasta do projeto**
   ```bash
   cd projeto-mobile-main
   ```

3. **Instale as dependências**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento**
   ```bash
   npx expo start
   ```

5. **Execute o app**

   | Método                    | Como fazer                                                                                  |
   |---------------------------|---------------------------------------------------------------------------------------------|
   | **Dispositivo físico**    | Abra o app **Expo Go** e escaneie o QR Code exibido no terminal                            |
   | **Emulador Android**      | Com o emulador aberto, pressione `a` no terminal                                           |
   | **Simulador iOS (macOS)** | Pressione `i` no terminal                                                                   |
   | **Navegador web**         | Pressione `w` no terminal                                                                   |

### Scripts disponíveis

| Comando           | Descrição                           |
|-------------------|-------------------------------------|
| `npm start`       | Inicia o servidor Expo              |
| `npm run android` | Inicia diretamente no Android       |
| `npm run ios`     | Inicia diretamente no iOS           |
| `npm run web`     | Inicia no navegador                 |

## 📂 Estrutura do Projeto

```
projeto-mobile-main/
├── app/                    # Páginas e rotas (Expo Router)
│   ├── _layout.tsx         # Layout raiz e configuração de rotas
│   ├── index.tsx           # Tela inicial (lista de solicitações)
│   └── solicitacao/
│       ├── [id].tsx        # Detalhes de uma solicitação
│       ├── inserir.tsx     # Formulário de nova solicitação
│       └── solicitacaoEnviada.tsx  # Tela de confirmação
├── components/             # Componentes reutilizáveis
│   ├── button.tsx          # Botão customizado
│   ├── Categoria.tsx       # Card de categoria com ícone
│   ├── CategoriaDetailCard.tsx  # Categoria na tela de detalhes
│   ├── CategoriaDropdown.tsx    # Dropdown de seleção de categoria
│   ├── DataCard.tsx        # Exibe data de abertura
│   ├── DescricaoFatosCard.tsx   # Card de descrição
│   ├── EnderecoCard.tsx    # Card de endereço formatado
│   ├── FormEndereco.tsx    # Formulário de endereço com busca CEP
│   ├── InserirButton.tsx   # Botão flutuante (+)
│   ├── SolicitacaoCard.tsx # Card na lista de solicitações
│   ├── Status.tsx          # Badge de status colorida
│   ├── TextArea.tsx        # Textarea (wrapper de TextInputCustom)
│   └── TextInputCustom.tsx # Input de texto com suporte a erro
├── enums/                  # Enumerações TypeScript
│   ├── categoria.ts        # Categorias de solicitação
│   └── status.ts           # Status de solicitação
├── hooks/
│   └── useFormErrors.ts    # Extração de erros Zod para formulários
├── service/
│   ├── data.ts             # Dados mock de solicitações
│   └── solicitacoes.ts     # Busca de solicitação por ID
├── types/
│   ├── endereco.ts         # Interface Endereco
│   └── solicitacao.ts      # Interfaces Solicitacao e SolicitacaoForm
├── app.json                # Configuração do Expo
├── package.json            # Dependências e scripts
└── tsconfig.json           # Configuração TypeScript (strict)
```

## 🔧 Correções Aplicadas

- **Import corrigido**: removido `uuidv4` do import de `zod` (onde não existia) e substituído por `crypto.randomUUID()`.
- **Typo no nome de arquivo**: `Catrgoria.tsx` renomeado para `Categoria.tsx` e imports atualizados.
- **Código duplicado eliminado**: `TextArea.tsx` refatorado para reutilizar `TextInputCustom` com props `multiline`.
- **Busca de CEP aprimorada**: `FormEndereco` agora salva `cidade` e `uf` retornados pela API ViaCEP.
- **Dados mock limpos**: removidos blocos comentados com categorias inexistentes (`TI`, `FINANCEIRO`, `RH`, `ADMINISTRATIVO`).
- **Tela de erro melhorada**: tela de "solicitação não encontrada" agora exibe layout centralizado com cabeçalho de navegação.

## 📝 Licença

Projeto desenvolvido para fins acadêmicos.
