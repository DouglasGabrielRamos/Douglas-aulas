USE desafiodouglas;


CREATE TABLE produtos (
    produtosID INT PRIMARY KEY,
    nome VARCHAR(100),
    preco VARCHAR(10000),
    cor VARCHAR(100),
    datadevalidade DATE,
    estoque TEXT(10000));

    ALTER TABLE produtos 
    ADD COLUMN categoria VARCHAR(100);
 
 USE desafiodouglas;

    ALTER TABLE produtos 
    ADD COLUMN ID VARCHAR(100);
 
    USE desafiodouglas;
--1
    UPDATE produtos SET nome = 'Doritos', categoria = 'Comida', preco = 15.00, cor = 'Laranja', datadevalidade = '2024-11-01', estoque = 450, ID = '1' WHERE produtosID;
    USE desafiodouglas;
--2
   UPDATE produtos SET nome = 'Iphone 15', categoria = 'Eletronico', preco = 4000.00, cor = 'Branco', datadevalidade = '2027-01-01', estoque = 55, ID = '2' WHERE produtosID;
--3
   UPDATE produtos SET nome = 'Sofá', categoria = 'Eletrodomestico', preco = 2500.00, cor = 'Marrom', datadevalidade = '2027-01-01', estoque = 65, ID = '3' WHERE produtosID;
--4
   UPDATE produtos SET nome = 'Coca-cola', categoria = 'Bebida', preco = 10.00, cor = 'preto', datadevalidade = '2024-12-01', estoque = 27, ID = '4' WHERE produtosID;
-- 5
  UPDATE produtos SET nome = 'Fogão', categoria = 'Eletrodomestico', preco = 1100.00, cor = 'Preto', datadevalidade = '2026-09-01', estoque = 34, ID = '5' WHERE produtosID;
-- 6
  UPDATE produtos SET nome = 'Carregador', categoria = 'Eletronico', preco = 25.00, cor = 'Preto', datadevalidade = '2024-11-07', estoque = 62, ID = '6' WHERE produtosID;
-- 7
  UPDATE produtos SET nome = 'Mouse', categoria = 'Eletronico', preco = 15.00, cor = 'Preto', datadevalidade = '2025-01-01', estoque = 44, ID = '7' WHERE produtosID;
-- 8
  UPDATE produtos SET nome = 'Mouse', categoria = 'Eletronico', preco = 15.00, cor = 'Preto', datadevalidade = '2025-01-01', estoque = 44, ID = '8' WHERE produtosID;
-- 8
  UPDATE produtos SET nome = 'Geladeira', categoria = 'Eletrodomestico', preco = 15.00, cor = 'Preto', datadevalidade = '2025-01-01', estoque = 44, ID = '8' WHERE produtosID;

-- 9
  UPDATE produtos SET nome = 'Arroz', categoria = 'Comida', preco = 30.00, cor = 'Branco', datadevalidade = '2025-01-01', estoque = 60, ID = '9' WHERE produtosID;
-- 10
  UPDATE produtos SET nome = 'Feijão', categoria = 'Comida', preco = 34.00, cor = 'Preto', datadevalidade = '2025-01-01', estoque = 44, ID = '10' WHERE produtosID;
