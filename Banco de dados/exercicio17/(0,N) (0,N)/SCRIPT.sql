DROP database IF exists EXERCICIO17;
CREATE database EXERCICIO17;
USE EXERCICIO17;

CREATE TABLE PESSOA (
IDPESSOA INT NOT NULL,
NOME VARCHAR (100),
DATA_DE_NASCIMENTO DATE,
PRIMARY KEY (IDPESSOA)
);
CREATE TABLE CASA (
IDCASA INT NOT NULL,
RUA VARCHAR (100),
BAIRRO VARCHAR (100),
CIDADE VARCHAR(100),
ESTADO CHAR(2),
CEP CHAR(8),
NUMERO INT,
PRIMARY KEY (IDCASA)
);
CREATE TABLE MORAR (
IDPESSOA INT NOT NULL,
IDCASA INT NOT NULL,
PRIMARY KEY (IDPESSOA, IDCASA),
FOREIGN KEY (IDPESSOA) REFERENCES PESSOA (IDPESSOA),
FOREIGN KEY (IDCASA) REFERENCES CASA (IDCASA)
);