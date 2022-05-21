DROP database IF exists EXERCICIO17;
CREATE database EXERCICIO17;
USE EXERCICIO17;

CREATE TABLE PESSOA (
IDPESSOA INT NOT NULL,
NOME VARCHAR (100),
DATA_DE_NASCIMETO DATE,

PRIMARY KEY (IDPESSOA)
);
CREATE TABLE GATO (
IDGATO INT NOT NULL,
IDPESSOA INT,
NOME VARCHAR(100),
IDADE CHAR (2),
SEXO CHAR(1),
PRIMARY KEY (IDGATO),
FOREIGN KEY (IDPESSOA) REFERENCES PESSOA (IDPESSOA)
);