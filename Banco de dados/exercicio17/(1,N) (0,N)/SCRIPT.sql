DROP database IF exists EXERCICIO17;
CREATE database EXERCICIO17;
USE EXERCICIO17;

CREATE TABLE PROFESSOR (
IDPROFESSOR INT NOT NULL,
NOME VARCHAR (100),
DATA_DE_NASCIMENTO DATE,
FORMACAO VARCHAR (45),
PRIMARY KEY (IDPROFESSOR)
);
CREATE TABLE ALUNO (
IDALUNO INT NOT NULL,
NOME_ALUNO VARCHAR (100),
DATA_DE_NASCIMENTO DATE,
PRIMARY KEY (IDALUNO)
);
CREATE TABLE CORRIGIR (
IDPROFESSOR INT NOT NULL,
IDALUNO INT NOT NULL,
PRIMARY KEY (IDPROFESSOR, IDALUNO),
FOREIGN KEY (IDPROFESSOR) REFERENCES PROFESSOR (IDPROFESSOR),
FOREIGN KEY (IDALUNO) REFERENCES ALUNO (IDALUNO)
);