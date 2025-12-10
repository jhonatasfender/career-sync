# Email Sender - Envio de Cover Letter via Gmail API

Script para enviar cover letter por email usando Gmail API com autenticação OAuth2.

## Instalação

```bash
cd tools/email-sender
pnpm install
```

## Configuração OAuth2

### 1. Criar credenciais no Google Cloud Console

1. Acesse [Google Cloud Console](https://console.cloud.google.com/)
2. Crie um novo projeto ou selecione um existente
3. Ative a **Gmail API**:
   - Vá em "APIs & Services" > "Library"
   - Procure por "Gmail API" e ative
4. Crie credenciais OAuth2:

   - Vá em "APIs & Services" > "Credentials"
   - Clique em "Create Credentials" > "OAuth client ID"
   - Se solicitado, configure a tela de consentimento OAuth
   - **⚠️ IMPORTANTE**: Escolha **"Desktop app"** como tipo de aplicativo (NÃO escolha "Web application")
   - Dê um nome ao cliente (ex: "Email Sender")
   - Clique em **"Create"**
   - Baixe o arquivo JSON com as credenciais

5. **Configurar Redirect URIs (apenas se necessário)**:
   - Para aplicações Desktop, os redirect URIs já vêm configurados no JSON
   - Se precisar editar manualmente, após criar as credenciais, clique no nome do OAuth 2.0 Client ID criado
   - Em **"Authorized redirect URIs"** (se aplicável), adicione:
     - `urn:ietf:wg:oauth:2.0:oob`
     - `http://localhost`
   - Clique em **"Save"**

> ⚠️ **Erro comum**: Se você criou como "Web application" e vê o erro "Invalid Redirect: must contain a domain" ao adicionar `urn:ietf:wg:oauth:2.0:oob`, isso significa que você criou o tipo errado. **Delete e recrie como "Desktop app"**.

### Permissões (Scopes) OAuth2

O aplicativo solicita as seguintes permissões OAuth2:

1. **`gmail.send`** (`https://www.googleapis.com/auth/gmail.send`)

   - Permite enviar emails em nome do usuário
   - Essencial para a funcionalidade principal do script

2. **`gmail.metadata`** (`https://www.googleapis.com/auth/gmail.metadata`)
   - Permite ler metadata dos emails (headers, labels, histórico)
   - **NÃO** permite ler o conteúdo ou anexos dos emails
   - Necessário para obter o endereço de email do usuário via `users.getProfile`
   - Escopo menos invasivo comparado a `gmail.readonly`

> 📝 **Nota**: Se preferir não conceder a permissão `gmail.metadata`, você pode fornecer seu email manualmente usando o argumento `--from seu-email@gmail.com`. Nesse caso, será necessário remover temporariamente o scope `gmail.metadata` do código em `src/gmail-auth.ts`.

### 2. Configurar credenciais no projeto

O código lê automaticamente as credenciais de um arquivo JSON. Você tem duas opções:

#### Opção 1: Renomear o arquivo baixado

Renomeie o arquivo JSON baixado para `client_secret.json` e coloque na raiz do projeto `tools/email-sender/`:

```text
tools/email-sender/
└── client_secret.json
```

#### Opção 2: Usar nome personalizado

Você também pode usar qualquer nome que comece com `client_secret_` e termine com `.json`, por exemplo:

- `client_secret_desktop.json`
- `client_secret_production.json`

O script procurará automaticamente por arquivos que correspondam ao padrão `client_secret*.json` na raiz do projeto.

> ⚠️ **Importante**: O arquivo `client_secret*.json` está no `.gitignore` e não será commitado. Mantenha suas credenciais seguras! Se você perder o arquivo, pode baixá-lo novamente nas mesmas credenciais OAuth2 no Google Cloud Console.

### 3. Primeira autenticação

Na primeira execução, o script irá:

1. Gerar uma URL de autorização
2. Solicitar que você acesse e autorize o aplicativo
3. Após autorizar, você pode:
   - Copiar apenas o código de autorização que aparece na página
   - **OU** copiar a URL completa do navegador (o script extrairá o código automaticamente)
4. Cole o código ou URL no terminal quando solicitado
5. Salvar o token em `token.json` (não commitado)

Após isso, o token será reutilizado automaticamente.

> 💡 **Dica**: Você pode colar tanto o código quanto a URL completa. O script detecta automaticamente e extrai o código da URL se necessário.
>
> ⚠️ **Atenção**: Os códigos de autorização expiram rapidamente (alguns minutos). Se você receber erro "Malformed auth code", gere uma nova URL de autorização e tente novamente com um código fresco.

### Resolvendo problemas comuns

#### Erro "Invalid Redirect: must contain a domain"

Se você vê este erro ao tentar adicionar `urn:ietf:wg:oauth:2.0:oob`, significa que você criou o OAuth client como **"Web application"** em vez de **"Desktop app"**.

**Solução**: Delete o OAuth client e recrie escolhendo **"Desktop app"** como tipo de aplicativo.

#### Erro "invalid_grant: Malformed auth code"

Se você receber o erro **"invalid_grant: Malformed auth code"**:

- O código de autorização pode ter espaços em branco extras
- O código pode ter expirado (códigos OAuth expiram em poucos minutos)
- O código pode ter sido usado anteriormente

**Solução**:

1. Execute o script novamente para gerar uma nova URL de autorização
2. Acesse a URL e autorize novamente
3. Copie o código recém-gerado (certifique-se de não incluir espaços extras)
4. Cole o código no terminal quando solicitado

#### Erro "redirect_uri_mismatch"

Se você encontrar o erro **"Erro 400: redirect_uri_mismatch"** ao tentar fazer login:

1. Acesse [Google Cloud Console](https://console.cloud.google.com/)
2. Vá em **"APIs & Services"** > **"Credentials"**
3. Clique no nome do seu OAuth 2.0 Client ID
4. Verifique se o tipo de aplicativo é **"Desktop app"**
5. Se necessário, verifique os redirect URIs na seção **"Authorized redirect URIs"**:
   - `urn:ietf:wg:oauth:2.0:oob`
   - `http://localhost`
6. Se não estiverem, adicione-os e clique em **"Save"**
7. Aguarde alguns minutos para as mudanças serem propagadas
8. Baixe o arquivo JSON novamente e substitua o anterior
9. Tente fazer login novamente

> ⚠️ **Importante**: Os redirect URIs devem ser **exatamente** como mostrado acima (sem espaços extras, com a mesma pontuação).

## Uso

### Formato do Markdown

O formato recomendado é com título de seção e metadados:

```markdown
## Cover Letter

Assunto: Candidatura - Desenvolvedor Full Stack

Para: recrutador@empresa.com

Prezado(a) Recrutador(a),

Conteúdo da carta de apresentação aqui...
```

> 💡 **Nota**: O script também suporta outros formatos (bloco de código, apenas metadados), mas o formato acima é o mais comum. Veja `example-cover-letter.md` ou `cover-letters/blincast.md` para exemplos completos.

### Executar o script

```bash
# Modo desenvolvimento (com tsx)
pnpm dev <caminho-do-markdown> [opções]

# Modo produção (compilado)
pnpm build
pnpm start <caminho-do-markdown> [opções]
```

### Opções

- `--to <email>`: Email do destinatário (sobrescreve o do markdown)
- `--subject "<assunto>"`: Assunto do email (sobrescreve o do markdown)
- `--body "<texto>"`: Corpo do email (opcional)
- `--resume <caminho>`: Caminho para o arquivo PDF do currículo (opcional, padrão: `curriculum/*.pdf`)

### Exemplos de Uso

```bash
# Enviar carta da pasta cover-letters com email do markdown
pnpm dev cover-letters/blincast.md

# Especificar destinatário
pnpm dev cover-letters/blincast.md --to recrutador@empresa.com

# Especificar assunto
pnpm dev cover-letters/blincast.md --to recrutador@empresa.com --subject "Candidatura - Desenvolvedor"

# Com corpo personalizado
pnpm dev cover-letters/blincast.md --to recrutador@empresa.com --body "Olá, segue minha carta de apresentação."

# Com currículo específico anexado
pnpm dev cover-letters/blincast.md --to recrutador@empresa.com --resume curriculum/Jônatas\ Rodrigues\ Carvalho\ Turibio\ -\ PT-br\ -\ full.pdf

# Usando exemplo na raiz
pnpm dev example-cover-letter.md --to recrutador@empresa.com
```

## Estrutura do Projeto

```text
tools/email-sender/
├── src/
│   ├── index.ts              # CLI principal
│   ├── markdown-parser.ts    # Parser de markdown
│   ├── gmail-auth.ts         # Autenticação OAuth2
│   ├── gmail-service.ts      # Serviço de envio via Gmail API
│   └── logger.ts             # Logger Winston
├── cover-letters/            # Pasta para organizar cartas de apresentação
│   └── blincast.md           # Exemplo de carta
├── curriculum/               # Currículos em PDF
│   └── *.pdf                 # Arquivos de currículo
├── example-cover-letter.md   # Exemplo de markdown
├── package.json
├── tsconfig.json
└── README.md
```

## Arquivos de Exemplo

- Veja o arquivo `example-cover-letter.md` para um exemplo básico de markdown formatado
- Veja `cover-letters/blincast.md` para um exemplo completo de carta direcionada para uma vaga específica

## Anexar Currículo

O script suporta anexar um arquivo PDF de currículo ao email:

- Se você usar a opção `--resume`, o arquivo especificado será anexado
- Se não especificar `--resume`, o script tentará usar automaticamente um arquivo da pasta `curriculum/`
- O arquivo padrão procurado é: `curriculum/Jônatas Rodrigues Carvalho Turibio - PT-br - PHP.pdf`

## Desenvolvimento

```bash
# Instalar dependências
pnpm install

# Executar em modo desenvolvimento
pnpm dev cover-letters/blincast.md

# Compilar
pnpm build

# Executar versão compilada
pnpm start cover-letters/blincast.md
```

## Logs e Debug

Os logs são salvos em `logs/email-sender.log` em formato JSON. Para aumentar a verbosidade dos logs, você pode definir a variável de ambiente `LOG_LEVEL`:

```bash
# Logs mais verbosos (inclui debug)
LOG_LEVEL=debug pnpm dev cover-letters/blincast.md

# Nível padrão (info)
pnpm dev cover-letters/blincast.md
```

Os logs incluem informações detalhadas sobre:

- Carregamento de credenciais
- Processo de autenticação OAuth2
- Parsing do markdown
- Preparação e envio do email
- Tratamento de erros com stack traces

## Notas Importantes

- O token OAuth2 é salvo em `token.json` (não commitado)
- O token expira após algum tempo; o script solicitará nova autorização quando necessário
- Os emails são enviados como se você estivesse enviando manualmente
- Não há limite de envio além dos limites normais do Gmail
