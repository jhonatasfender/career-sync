# Scripts para Adicionar Histórico Profissional no Nerdin

Este diretório contém scripts para adicionar automaticamente o histórico profissional no Nerdin via requisições HTTP.

## Como Obter o PHPSESSID

1. Abra o navegador e faça login no Nerdin
2. Pressione F12 para abrir as ferramentas de desenvolvedor
3. Vá para a aba "Application" (ou "Aplicativo")
4. No menu lateral, expanda "Cookies" > "https://www.nerdin.com.br"
5. Procure pelo cookie "PHPSESSID" e copie o valor

## Scripts Disponíveis

### 1. add-historicos-simple.sh (Recomendado)

Script bash simples que usa curl.

**Uso:**

```bash
./add-historicos-simple.sh "seu_phpsessid_aqui"
```

**Ou:**

```bash
export PHPSESSID=seu_phpsessid
./add-historicos-simple.sh
```

### 2. add-historicos.py

Script Python usando a biblioteca `requests`.

**Uso:**

```bash
python3 add-historicos.py "PHPSESSID=seu_phpsessid; outros_cookies=valores"
```

**Ou:**

```bash
export COOKIES="PHPSESSID=xxx; outros=yyy"
python3 add-historicos.py
```

### 3. add-historicos-node.js

Script Node.js que executa curls.

**Uso:**

```bash
node add-historicos-node.js "PHPSESSID=seu_phpsessid"
```

## Experiências que Serão Adicionadas

1. **NTT DATA Europe & Latam** - Jul 2023 - Feb 2024
2. **Pixeon** (Pleno) - Jun 2022 - Jul 2023
3. **Pixeon** (Junior) - Mar 2021 - Jun 2022
4. **GS3 TECNOLOGIA** - Jun 2022 - May 2023
5. **Capgemini** - Mar 2020 - Feb 2021

## Nota

O código da cidade Brasília-DF é: **5569**

Todos os scripts usam este código automaticamente.
