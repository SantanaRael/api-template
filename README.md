# API TEMPLATE

Template de uma API que consulta o banco de dados Postgres

## Tecnologias Utilizadas:

- [NodeJs](https://nodejs.org/en/docs)
- [Express](https://expressjs.com/pt-br/)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://docs.docker.com/)

## Dependencias:
Para a execução do projeto, as seguintes dependências precisão ser satifeitas,
- [Docker](https://docs.docker.com/get-docker/).
- [NodeJS](https://nodejs.org/en), Versão: 18.x ou superior.


## Execução do Projeto:
Fazer o clone e ir na pasta do projeto:

```sh
git clone https://github.com/SantanaRael/api-template.git
cd api-template
```

Instalar as dependências do projeto:

```sh
npm install
```

Subir dois containers com a API e outro com postgres com o comando:

```sh
docker-compose up -d
```

Verificar se os containers subiram corretamente:

```sh
docker ps
```

## Documentação da API
Acessar aplicação pelo link:

```sh
http://localhost:3000/
```
