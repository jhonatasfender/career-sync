# Documentação da Página Inicial

## Layout da Área Central

### Chat de Entrada (Estado Inicial)

- Posicionado centralmente na tela
- Campo de texto adaptativo:
  - Largura máxima fixa (max-width) para manter legibilidade
  - Altura inicial mínima de 3 linhas
  - Expande verticalmente conforme o conteúdo (auto-expand)
  - Altura máxima de 50% da viewport
  - Quebra automática de linha (word-wrap)
  - Barra de rolagem vertical quando atinge altura máxima
  - Animação suave durante expansão
- Opções de destino múltipla escolha:
  - WhatsApp (versão informal)
  - Chat do LinkedIn
  - Email
- Botão de envio para processar a requisição

### Animação de Transição

- Após o envio, o chat se move para a esquerda
- Animação suave durante a transição
- Indicador de carregamento durante o processamento

### Estado de Processamento

- Após a transição do chat, exibir na coluna direita:
  - Animação de loading centralizada
  - Mensagem informativa "Processando sua solicitação..."
  - Indicador de progresso visual (spinner ou similar)
  - Feedback visual que mantenha o usuário informado
  - Transição suave para a área de resultados quando concluído

### Área de Resultados (Lado Direito)

1. **Seção de Carta de Apresentação**

   - Exibição dinâmica baseada nas opções selecionadas:
     - Versão formal para email
     - Versão adaptada para chat do LinkedIn
     - Versão informal para WhatsApp
   - Botão de copiar para cada versão
   - Animação de fade-in ao exibir os resultados

2. **Currículo Personalizado**
   - Visualização do currículo adaptado para a vaga
   - Botão de download do currículo em PDF
   - Prévia das alterações e personalizações
   - Animação de fade-in ao exibir o currículo

### Elementos de Interface

- Botões claros para cada ação
- Indicadores visuais de seleção múltipla
- Feedback visual durante o processamento
- Área de prévia para cada tipo de conteúdo
- Botões de ação para copiar e baixar

### Notas de Design

- Design limpo e minimalista
- Fundo claro/neutro
- Hierarquia visual clara
- Tipografia de fácil leitura
- Espaçamento consistente entre elementos
- Feedback visual claro para itens ativos/selecionados

### Fluxo de Interação

1. Usuário insere descrição da vaga no chat central
2. Seleciona um ou mais destinos (WhatsApp/LinkedIn/Email)
3. Clica em enviar
4. Chat se move para a esquerda com animação
5. Resultados aparecem à direita
6. Usuário pode copiar textos específicos para cada plataforma
7. Opção de download do currículo personalizado

### Validações e Feedback

1. **Validações do Campo de Texto**

   - Mínimo de 100 caracteres para processamento
   - Máximo de 5000 caracteres permitidos
   - Aviso visual quando texto muito curto
   - Contador de caracteres visível (ex: "100/5000")
   - Destaque visual quando atingir limite mínimo
   - Feedback visual ao se aproximar do limite máximo:
     - Amarelo aos 4500 caracteres
     - Vermelho aos 4900 caracteres
   - Desabilitar entrada de mais caracteres ao atingir 5000
   - Mensagem amigável informando o limite

2. **Validações de Seleção**

   - Pelo menos um destino deve ser selecionado
   - Feedback visual para seleções inválidas
   - Botão de envio desabilitado até validações passarem

3. **Tratamento de Erros**

   - Mensagens de erro amigáveis em caso de falha
   - Tipos de erro:
     - Erro de conexão: "Ops! Parece que estamos com problemas de conexão. Tente novamente em alguns instantes."
     - Erro de processamento: "Não conseguimos processar sua solicitação. Por favor, tente novamente."
     - Erro de timeout: "O processamento está demorando mais que o esperado. Deseja tentar novamente?"
   - Botão de retry em caso de falha
   - Opção de reportar problema
   - Manter texto inserido em caso de erro

4. **Estados de Loading**

   - Timeout máximo de 30 segundos
   - Mensagens progressivas durante espera longa:
     - "Analisando a descrição da vaga..."
     - "Personalizando seu currículo..."
     - "Gerando carta de apresentação..."
   - Opção de cancelar processamento

5. **Feedback de Sucesso**
   - Indicador visual de sucesso
   - Som sutil de notificação (opcional)
   - Mensagem de conclusão personalizada
   - Dicas de uso dos resultados gerados

### Acessibilidade

- Suporte a leitores de tela
- Navegação por teclado
- Mensagens de erro legíveis por leitores de tela
- Contraste adequado para textos e botões
- Labels descritivos em todos os elementos interativos
- Atalhos de teclado para ações principais
