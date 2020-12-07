# UOBA (Unlock Open Banking For All) - App
### Verificação de identidade usando transferência PIX.

![uoba](./front/src/assets/logo.png)

# Open Banking API

## Sobre o Frontend (/front)

### Iniciando a aplicação (Getting Started)

1. Navegue até a pasta raiz do front
#### `$ cd front`

2. Instale as dependências:
#### `$ yarn` ou `$ npm install`

3. Inicialize o app:
#### `$ yarn start` ou `$ npm start`

----

## Sobre o Backend (/api)

### Getting Started
1. Navegue até a pasta raiz da API:
#### `$ cd api`

2. Instale as dependências
#### `$ yarn` ou `$ npm install`

3. Instale o PostgreSQL mais recente

4. Renomeie o arquivo .env-example para .env

5. Configure-o

6. Execute o servidor
#### `$ npm run watch`

7. Acesse:
#### `http://localhost:5445/docs`

### Detalhes do backend

Mais informações sobre a API

- Ao executar, a api irá fornecer um link de documentação mais técnico (feita em Open API 3)

- Uma abstração da lógica do serviço de autenticação de pagamento:




----

## Sobre as Tecnologias

### Frontend:

**React 17**: como framework de sigle page application

**Material UI 4**: para auxiliar na aparência dos componentes

### Backend:
**Node 14.6**: como ambiente de execução;

**Typescript 3.9**: como linguagem de programação;

**Express 4.17**: para fornecer as rotas e iniciar o servidor REST;

**Sequelize 6.3**: para definir, manipular e consultar o banco de dados;

**PostgreSQL 12**: como SGBD, podendo ser facilmente substituído por outro;

**Swagger (Open API 3)**: para documentar as rotas;
