DROP DATABASE IF EXISTS EXERCICIO22;
CREATE DATABASE EXERCICIO22;
USE EXERCICIO22;

CREATE TABLE FILIAL (
IDFILIAL INT NOT NULL auto_increment,
NOME_FILIAL VARCHAR (100),
TELEFONE INT,
PRIMARY KEY (IDFILIAL)
);

CREATE TABLE FUNCIONARIO (
IDFILIAL INT,
IDFUNCIONARIO INT auto_increment,
NOME VARCHAR (100),
DTADMISSAO DATE,
PRIMARY KEY (IDFUNCIONARIO),
FOREIGN KEY (IDFILIAL) REFERENCES FILIAL (IDFILIAL)
);

CREATE TABLE CLIENTE (
IDFILIAL INT,
IDCLIENTE INT not null auto_increment,
NOME VARCHAR (100),
TELEFONE INT,
PRIMARY KEY (IDCLIENTE),
FOREIGN KEY (IDFILIAL) REFERENCES FILIAL (IDFILIAL)
);

CREATE TABLE PROJETO (
IDCLIENTE INT,
IDPROJETO INT not null auto_increment,
NOME_PROJETO VARCHAR (100),
DTINICIO DATE,
PRIMARY KEY (IDPROJETO),
FOREIGN KEY (IDCLIENTE) REFERENCES CLIENTE (IDCLIENTE)
);


CREATE TABLE ALOCAR (
IDFUNCIONARIO INT,
IDPROJETO INT,
PRIMARY KEY (IDFUNCIONARIO, IDPROJETO),
FOREIGN KEY (IDFUNCIONARIO) REFERENCES FUNCIONARIO (IDFUNCIONARIO),
FOREIGN KEY (IDPROJETO) REFERENCES PROJETO (IDPROJETO)
);