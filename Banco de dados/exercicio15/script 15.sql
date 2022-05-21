
drop database if exists exercicio15;


create database exercicio15;


use exercicio15;


create table computador (
idcomputador INT NOT NULL,
fabricante varchar(100),
modelo varchar(100),
numero_iden int,
endereço varchar(100),
mascara_rede int,
primary key (idcomputador),
foreign key (iddepartamento) references computador(idcomputador)
);
create table departamento (
iddepartamento int not null,
idcomputador int,
ramal int,
nome_do_responsavel varchar(100),
nome varchar(100),
primary key(iddepartamento)
);

