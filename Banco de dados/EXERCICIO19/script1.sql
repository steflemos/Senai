drop database if exists exercicio19;
create database exercicio19;
use exercicio19;

CREATE TABLE medico (
idmedico INT NOT NULL,
nome varchar (100),
PRIMARY KEY (idmedico)
);

CREATE TABLE paciente (
idpaciente INT NOT NULL,
nome varchar (100),
PRIMARY KEY (idpaciente)
);
CREATE TABLE consultar (
idconsultar INT NOT NULL,
idmedico INT,
idpaciente INT,
dtconsulta date,
PRIMARY KEY (idconsultar),
FOREIGN KEY (idmedico) REFERENCES medico (idmedico),
FOREIGN KEY (idpaciente) REFERENCES paciente (idpaciente)
);