# Documentação do Gerenciamento de Currículo

## Fluxo do Formulário

### Steps de Preenchimento

#### Step 1 - Informações Básicas

- **Campos**
  - Nome completo
  - Email
  - Telefone
  - Data de nascimento
  - Foto do perfil
- **Validações**
  - Nome Completo:
    - Obrigatório
    - Mínimo 5 caracteres
    - Máximo 100 caracteres
    - Apenas letras e espaços
    - Pelo menos um sobrenome
  - Email:
    - Obrigatório
    - Formato válido (contém @ e domínio)
    - Verificação de DNS do domínio
    - Máximo 255 caracteres
    - Case insensitive
  - Telefone:
    - Obrigatório
    - Formato internacional (+XX XX XXXXX-XXXX)
    - Validação por país
    - Aceita múltiplos números
    - Permite extensão (opcional)
  - Data de Nascimento:
    - Obrigatório
    - Idade mínima 16 anos
    - Data não futura
    - Formato conforme localização
  - Foto do Perfil:
    - Opcional
    - Formatos: JPG, PNG
    - Tamanho máximo: 5MB
    - Dimensões mínimas: 200x200px
    - Dimensões máximas: 1000x1000px
    - Proporção 1:1 (quadrada)

#### Step 2 - Localização e Documentos

- **Campos**
  - Endereço completo
  - Documentos (CPF, RG, etc.)
  - Região/Timezone
- **Validações**
  - Endereço:
    - CEP/Código Postal (obrigatório)
    - Rua/Logradouro (obrigatório)
    - Número (obrigatório)
    - Complemento (opcional)
    - Bairro (obrigatório)
    - Cidade (obrigatório)
    - Estado/Província (obrigatório)
    - País (obrigatório)
  - Documentos:
    - CPF (obrigatório para Brasil)
      - Validação do dígito verificador
      - Formato XXX.XXX.XXX-XX
    - RG (opcional)
    - Passaporte (opcional)
    - Documentos específicos por país
  - Região/Timezone:
    - Fuso horário (obrigatório)
    - Formato local de data/hora

#### Step 3 - Links e Redes Sociais

- **Campos**
  - Links padrão
  - Links personalizados
  - Portfólio
- **Validações**
  - Links padrão (opcionais):
    - LinkedIn (formato URL válido)
    - GitHub (formato URL válido)
    - Portfolio (formato URL válido)
    - Website pessoal (formato URL válido)
  - Links personalizados:
    - Botão "Adicionar novo link"
    - Campos por link:
      - Título/Nome da rede (obrigatório, 2-30 caracteres)
      - URL (obrigatório, formato válido)
      - Ícone/Logo (opcional)
      - Descrição (opcional, máximo 100 caracteres)
      - Categoria (opcional: profissional, social, projeto, etc.)
    - Validações:
      - URLs únicas (sem duplicatas)
      - Links ativos (verificação opcional)
      - Protocolos permitidos (http, https)
    - Recursos:
      - Ordenação personalizada
      - Agrupamento por categorias
      - Preview do link
      - Verificador de links quebrados
      - Estatísticas de cliques (opcional)

#### Step 4 - Experiência Profissional

- **Campos**
  - Histórico de empregos
  - Descrição de atividades
  - Tecnologias e conhecimentos
  - Conquistas
- **Validações**
  - Cargo:
    - Obrigatório
    - Mínimo 3 caracteres
    - Máximo 100 caracteres
  - Empresa:
    - Obrigatório
    - Mínimo 3 caracteres
    - Máximo 100 caracteres
    - Validação de existência opcional
  - Período:
    - Data início (obrigatório)
    - Data fim (opcional para emprego atual)
    - Data início anterior à data fim
    - Não permite sobreposição de períodos
    - Máximo 15 experiências no total
  - Descrição:
    - Obrigatório
    - Mínimo 100 caracteres
    - Máximo 2000 caracteres
    - Suporte a markdown
    - Palavras-chave destacadas
  - Tecnologias e Conhecimentos:
    - Mínimo 1 tag por experiência
    - Sem limite máximo de tags
    - Tags podem incluir:
      - Linguagens de programação
      - Frameworks e bibliotecas
      - Ferramentas e plataformas
      - Metodologias
      - Soft skills desenvolvidas
      - Certificações relacionadas
      - Áreas de conhecimento
    - Auto-sugestão baseada em:
      - Tags populares
      - Tags do usuário
      - Descrição da experiência
      - Tendências do mercado
    - Validações:
      - Sem duplicatas na mesma experiência
      - Tags devem ter 2-30 caracteres
      - Permite caracteres especiais comuns (., -, #, +)
      - Case insensitive para comparações
    - Recursos:
      - Agrupamento por categorias
      - Vinculação automática com seção de Habilidades
      - Possibilidade de adicionar nível de proficiência por tag
      - Ordenação por relevância ou cronologia
      - Filtro e busca rápida de tags

#### Step 5 - Formação Acadêmica

- **Campos**
  - Graduações
  - Pós-graduações
  - Cursos técnicos
  - Certificações
- **Validações**
  - Instituição:
    - Obrigatório
    - Mínimo 3 caracteres
    - Máximo 100 caracteres
    - Validação de existência opcional
  - Curso:
    - Obrigatório
    - Mínimo 3 caracteres
    - Máximo 100 caracteres
    - Tipo de formação (graduação, pós, etc.)
  - Período:
    - Data início (obrigatório)
    - Data fim (opcional se em andamento)
    - Status (em andamento/concluído)
    - Data conclusão não futura
  - Informações Adicionais:
    - Carga horária (obrigatório)
    - Média/Notas (opcional)
    - Trabalho de conclusão (opcional)
    - Certificado (upload opcional)

#### Step 6 - Habilidades e Competências

- **Campos**
  - Hard skills
  - Soft skills
  - Níveis de proficiência
  - Certificações relacionadas
- **Validações**
  - Técnicas (Hard Skills):
    - Importação automática das tags de experiências profissionais
    - Agrupamento por categorias
    - Consolidação automática de níveis baseada em:
      - Tempo de uso em diferentes experiências
      - Níveis informados em cada experiência
      - Última utilização
    - Validações para habilidades adicionais:
      - Nome (3-50 caracteres)
      - Nível (0-100%)
      - Tempo de experiência
      - Sem duplicatas com as tags já importadas
    - Recursos:
      - Visualização em nuvem de tags
      - Gráfico de evolução temporal
      - Ranking de proficiência
      - Sugestões baseadas no perfil
  - Comportamentais (Soft Skills):
    - Importação automática das soft skills das experiências
    - Validações para habilidades complementares:
      - Nome (3-50 caracteres)
      - Sem duplicatas
    - Recursos:
      - Agrupamento por categorias
      - Exemplos contextuais
      - Associação com experiências

#### Step 7 - Idiomas e Finalização

- **Campos**
  - Idiomas e níveis
  - Revisão final
  - Preview do currículo
  - Opções de exportação
- **Validações**
  - Idiomas:
    - Níveis de proficiência:
      - CEFR (A1 a C2)
      - ACTFL
      - Cambridge
      - TOEFL/IELTS
    - Recursos:
      - Conversão entre escalas
      - Auto-avaliação guiada
      - Certificações (opcional)
      - Histórico de evolução
    - Validações específicas:
      - Regionalização
      - Terminologia técnica
      - Expressões idiomáticas
  - Preview e Exportação:
    - Validação final de todos os campos
    - Verificação de consistência
    - Formatação do documento
    - Opções de template

### Características Gerais do Fluxo

- Navegação livre entre steps
- Salvamento automático
- Indicador de progresso
- Validação por step
- Preview em tempo real
- Dicas contextuais
- Sugestões automáticas

### Validações Globais

- **Formatação**

  - Consistência de capitalização
  - Remoção de espaços extras
  - Padronização de pontuação

- **Segurança**
  - Sanitização de HTML/markdown
  - Validação de URLs
  - Proteção contra injeção de código

### Recursos Adicionais

- Tags para organização
- Busca avançada
- Filtros por versão/idioma
- Estatísticas de visualização
