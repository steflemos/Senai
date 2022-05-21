-- apagando o banco de dados caso exista
drop database if exists dbexercicio01;

-- criando a base de dados
create database dbexercicio01;

-- conectando na base de dados
use dbexercicio01;

-- criando as tabelas

create  table aluno (
idaluno int not null auto_increment
, nome varchar(100)
, primary key (idaluno)
);