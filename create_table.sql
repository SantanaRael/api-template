-- Exemplo de criação de uma tabela chamada "clientes"
CREATE TABLE clientes (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255),
  email VARCHAR(255)
);

INSERT INTO clientes (nome, email) VALUES ('Teste da Silva', 'teste@email.com');
