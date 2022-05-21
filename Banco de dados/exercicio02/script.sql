-- apagando o banco de dados caso exista
drop database if exists dbexercicio02;

-- criando a base de dados
create database dbexercicio02;

-- conectando na base de dados
use dbexercicio02;

-- criando as tabelas

create  table aluno (
idaluno int not null auto_increment
, nome varchar(100)
, sexo varchar(1)
, primary key (idaluno)
);