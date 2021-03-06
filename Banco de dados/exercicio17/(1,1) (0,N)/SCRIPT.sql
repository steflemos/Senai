drop database if exists exercicio17;
create database exercicio17;
use exercicio17;

CREATE TABLE SALA (
IDSALA INT NOT NULL,
NUMERO INT,
PRIMARY KEY (IDSALA)
);
CREATE TABLE MESA (
IDMESA INT NOT NULL,
IDSALA INT,
TIPO_MESA VARCHAR(100),
PRIMARY KEY (IDMESA),
FOREIGN KEY (IDSALA) REFERENCES SALA (IDSALA)
);