DROP database IF exists EXERCICIO17;
CREATE database EXERCICIO17;
USE EXERCICIO17;

CREATE TABLE PESSOA_OCULOS_DE_GRAU (
IDPESSOA INT NOT NULL,
IDOCULOS_DE_GRAU INT NOT NULL,
NOME VARCHAR(100),
DATA_DE_NASCIMENTO DATE,
DEFICIENCIA_VISUAL VARCHAR(100),
ARMACAO VARCHAR (100),
GRAU CHAR(5),
PRIMARY KEY (IDPESSOA, IDOCULOS_DE_GRAU)
);