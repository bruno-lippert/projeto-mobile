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
- **npm** (incluído com Node.js)
- **[Git](https://git-scm.com/)** para clonar o repositório
- **Expo Go** no smartphone ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent) / [iOS](https://apps.apple.com/app/expo-go/id982107779)) **ou** um emulador:
  - **Android**: [Android Studio](https://developer.android.com/studio) com emulador configurado
  - **iOS** (somente macOS): Xcode com Simulator

### Instalação

```bash
# 1. Clone o repositório
git clone <URL_DO_REPOSITORIO>

# 2. Acesse a pasta do projeto
cd projeto-mobile-main

# 3. Instale as dependências
npm install
```

### Executando o projeto

#### Opção 1 — Modo Tunnel (recomendado para dispositivo físico)

Usa o ngrok para criar um túnel público. Funciona **mesmo que o celular e o PC estejam em redes diferentes** (Wi-Fi diferentes, dados móveis, etc.).

```bash
npx expo start --tunnel
```

Após iniciar:
1. Aguarde as mensagens `Tunnel connected.` e `Tunnel ready.` no terminal.
2. Um QR Code será exibido no terminal.
3. No celular, abra o app **Expo Go** e escaneie o QR Code.
4. O app será carregado diretamente no celular.

> **Nota:** Na primeira execução com `--tunnel`, o pacote `@expo/ngrok` será instalado automaticamente. Se pedir confirmação, aceite digitando `y`.

#### Opção 2 — Modo LAN (mesma rede Wi-Fi)

Mais rápido que o tunnel, mas exige que **celular e PC estejam na mesma rede Wi-Fi**.

```bash
npx expo start
```

Após iniciar:
1. Um QR Code será exibido no terminal.
2. No celular Android, abra o **Expo Go** e escaneie o QR Code.
3. No iPhone, abra a **Câmera** e aponte para o QR Code — ele abrirá o Expo Go automaticamente.

#### Opção 3 — Navegador Web

```bash
npx expo start --web
```

Ou inicie normalmente com `npx expo start` e pressione `w` no terminal. Acesse http://localhost:8081 no navegador.

#### Opção 4 — Emulador Android

```bash
# 1. Abra o Android Studio e inicie um emulador (AVD Manager)
# 2. Confirme que o emulador está conectado:
adb devices

# 3. Inicie o Expo e pressione 'a' no terminal:
npx expo start
# → pressione a tecla 'a'
```

### Limpando o cache

Se o app apresentar comportamento inesperado ou tela branca, limpe o cache do bundler:

```bash
npx expo start --clear
```

### Comandos úteis durante a execução

Enquanto o servidor Expo estiver rodando, use estas teclas no terminal:

| Tecla     | Ação                                  |
|-----------|---------------------------------------|
| `a`       | Abrir no emulador Android             |
| `w`       | Abrir no navegador web                |
| `i`       | Abrir no simulador iOS (macOS)        |
| `r`       | Recarregar o app                      |
| `m`       | Abrir menu do Expo no dispositivo     |
| `j`       | Abrir debugger                        |
| `Ctrl+C`  | Parar o servidor                      |

### Scripts do package.json

| Comando           | Descrição                                     |
|-------------------|-----------------------------------------------|
| `npm start`       | Inicia o servidor Expo (modo LAN)             |
| `npm run android` | Inicia diretamente no emulador Android        |
| `npm run ios`     | Inicia diretamente no simulador iOS           |
| `npm run web`     | Inicia no navegador web                       |

### Solução de problemas

| Problema                           | Solução                                                                              |
|------------------------------------|--------------------------------------------------------------------------------------|
| Tela branca no navegador/celular   | Execute `npx expo start --clear` para limpar cache do Metro                         |
| Celular não conecta ao servidor    | Use modo tunnel: `npx expo start --tunnel`                                           |
| Erro "out of memory" no bundler    | Feche outros programas pesados e reinicie com `npx expo start --clear`              |
| QR Code não aparece                | Verifique se as dependências foram instaladas com `npm install`                      |
| Expo Go não encontra o servidor    | Confirme que celular e PC estão na mesma rede, ou use `--tunnel`                    |

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

## 🔧 Correções e Melhorias Aplicadas

### Correções Críticas

- **Import inexistente corrigido**: removido `uuidv4` do import de `zod` (não existia nesse pacote) e substituído por função `generateId()` com fallback seguro — usa `crypto.randomUUID()` quando disponível, ou gera UUID v4 manualmente em ambientes que não suportam a API.
- **Typo no nome de arquivo**: `Catrgoria.tsx` renomeado para `Categoria.tsx` e imports atualizados em todos os arquivos dependentes.
- **Incompatibilidade de dependências**: `react-dom` estava na versão 19.2.4, incompatível com `react` 19.1.0 — corrigido para 19.1.0.

### Correções de Layout e Renderização

- **Tela branca resolvida**: adicionado `SafeAreaProvider` no layout raiz (`_layout.tsx`) — necessário para o `SafeAreaView` funcionar corretamente em web e mobile.
- **Configuração web**: adicionado `"web": { "bundler": "metro" }` no `app.json` para garantir o bundling correto na plataforma web.
- **Layout da lista corrigido**: removidos `justifyContent: "center"` e `alignItems: "center"` do container principal e `gap: 16` do FlatList (propriedade não suportada pelo componente).
- **Tela de erro melhorada**: tela de "solicitação não encontrada" agora exibe layout centralizado com cabeçalho de navegação.

### Refatorações e Limpeza

- **Código duplicado eliminado**: `TextArea.tsx` refatorado para reutilizar `TextInputCustom` com props `multiline`, eliminando ~30 linhas duplicadas.
- **Busca de CEP aprimorada**: `FormEndereco` agora salva `cidade` e `uf` retornados pela API ViaCEP no estado do formulário.
- **Dados mock limpos**: removidos ~390 linhas de blocos comentados com categorias inexistentes (`TI`, `FINANCEIRO`, `RH`, `ADMINISTRATIVO`).

## ✅ Verificação Final

Validação completa realizada em 25/03/2026:

| Verificação                        | Resultado                          |
|------------------------------------|------------------------------------|
| TypeScript (`tsc --noEmit`)        | Zero erros                        |
| VS Code Diagnostics                | Zero erros no projeto             |
| Bundle iOS                         | Compilado (1255 modules)          |
| Bundle Android                     | Compilado (1254 modules)          |
| Bundle Web                         | Compilado (905 modules)           |
| Tela Feed (lista de solicitações)  | Renderizando 3 cards corretamente |
| Tela Detalhes da solicitação       | Todas as informações exibidas     |
| Tela Formulário de criação         | Campos e validação funcionando    |
| Conexão Expo Go (tunnel)           | Conectado e funcional             |

## 📝 Licença

Projeto desenvolvido para fins acadêmicos.
