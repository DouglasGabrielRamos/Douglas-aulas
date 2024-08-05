USE livrariadouglas;

CREATE TABLE autores ( 
    autoresID INT PRIMARY KEY,
    nome VARCHAR(100),
    nacionalidade VARCHAR(100)
 );

 USE livrariadouglas;

CREATE TABLE livros ( 
    livroID INT PRIMARY KEY AUTO_INCREMENT,
    tituto VARCHAR(200) NOT NULL,
    genero VARCHAR(50),
    anopublicacao INT,
    autoresID INT,
     FOREIGN KEY (autoresID) REFERENCES autores(autoresID)
 );

USE livrariadouglas;

CREATE TABLE clientes (
    clienteID INT PRIMARY KEY,
    nome VARCHAR(100),
    enedereco VARCHAR(100),
    telefone VARCHAR(100) 
);

USE livrariadouglas;

CREATE TABLE emprestimos (
    emprestimoID INT PRIMARY KEY,
    FOREIGN KEY (livroID) REFERENCES livros(livroID),
    FOREIGN KEY (clienteID) REFERENCES clientes(clienteID),
    livroID INT,
    clienteID INT,
    dataemprestimo DATE,
    datadevolucao DATE
);

USE livrariadouglas;

INSERT IGNORE INTO autores(autoresID, nome, nacionalidade) 
VALUES (1, 'Joaquim Maria Machado de Assis', 'Brasileiro'),
(2, 'Augusto Cury', 'Brasileiro'),
(3, 'Robert Greene', 'Americano');

INSERT IGNORE INTO livros(livroID, tituto, genero, anopublicacao, autoresID)
 VALUES (1, 'Dom Casmurro', 'romance, ficção, realismo litérario ', 1899, 1),
(2, 'O código da inteligência', 'romance, mémoria, não ficção', 2008, 1),
(3, 'As 48 leis do poder', 'Livro de autoajuda', 1998, 1);

INSERT IGNORE INTO clientes(clienteID, nome, enedereco, telefone) 
VALUES (1, 'Douglas Gabriel', 'apartamento 234', '3483-9870'),
(2, 'isabelly Rocha', 'apartamento 567', '2543-9546'),
(3, 'Carlos Castilhos', 'apartamento 890', '2735-9591');

USE livrariadouglas;

ALTER TABLE autores 
ADD COLUMN datadenascimentos DATE, 
ADD COLUMN biografias TEXT;

USE livrariadouglas;

ALTER TABLE livros
ADD COLUMN editoras VARCHAR(100),
ADD COLUMN numeropaginas INT, 
ADD COLUMN idiomas VARCHAR(100);

USE livrariadouglas;

ALTER TABLE clientes
ADD COLUMN emails VARCHAR(100),
ADD COLUMN datadenascimentos DATE;

USE livrariadouglas;

ALTER TABLE emprestimos
ADD COLUMN dataprevistadevolucaos DATE,
ADD COLUMN statuss VARCHAR(100);

USE livrariadouglas;

UPDATE autores SET datadenascimentos = '1939-06-21', biografias = 'Joaquim Maria Machado de Assis foi um escritor brasileiro, amplamente reconhecido por críticos, estudiosos, escritores e leitores como o maior expoente da literatura brasileira.' WHERE autoresID = 1;
UPDATE autores SET datadenascimentos = '1958-10-2', biografias = 'Augusto Jorge Cury é um psiquiatra, professor e escritor brasileiro. Augusto é autor da Teoria da Inteligência Multifocal e seus livros foram publicados em mais de 70 países, com mais de 25 milhões de livros vendidos somente no Brasil' WHERE autoresID = 2;
UPDATE autores SET datadenascimentos = '1959-05-14', biografias = 'Robert Greene é um autor americano de livros sobre estratégia, poder e sedução. Greene escreveu sete best-sellers internacionais, incluindo As 48 Leis do Poder, A Arte da Sedução, As 33 Estratégias de Guerra, A 50ª Lei, Maestria, As Leis da Natureza Humana e 365 Leis..' WHERE autoresID = 3;

UPDATE livros SET editoras = 'Arqueiro ', numeropaginas = 256, idiomas = 'Português' WHERE livroID = 3;
UPDATE livros SET editoras = 'Grupo Companhia das Letras.', numeropaginas = 346, idiomas = 'Português' WHERE livroID = 1;
UPDATE livros SET editoras = 'Rocco; 3ª edição', numeropaginas = 460, idiomas = 'Inglês' WHERE livroID = 2;

UPDATE clientes SET emails = 'Douglas.Gabriel@email.com', datadenascimentos = '2008-04-18' WHERE clienteID = 1;
UPDATE clientes SET emails = 'isabelly.silva@email.com', datadenascimentos = '2009-11-30' WHERE clienteID = 2;
UPDATE clientes SET emails = 'felipe.castilhos', datadenascimentos = '2009-08-28' WHERE clienteID = 3;


UPDATE emprestimos SET dataprevistadevolucao = '1960-05-13', status = 'concluido'WHERE clienteID =1;
UPDATE emprestimos SET dataprevistadevolucao = '1959-08-24', status = 'concluido'WHERE clienteID =2;
UPDATE emprestimos SET dataprevistadevolucao = '1940-09-11', status = 'concluido'WHERE clienteID =3;
