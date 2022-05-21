DROP DATABASE IF EXISTS DBEXERCICIO09;
CREATE DATABASE DBEXERCICIO09;
USE DBEXERCICIO09;
CREATE TABLE ANIMAL (
	IDANIMAL INT NOT NULL AUTO_INCREMENT,
	NOME VARCHAR(45),
	PORTE VARCHAR(45),
    SEXO CHAR(1),
    TIPO ENUM('CÃO', 'GATO'),
	PRIMARY KEY (IDANIMAL)
);