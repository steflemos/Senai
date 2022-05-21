-- apagando o banco de dados caso exista
drop database if exists dbexercicio03;

-- criando a base de dados
create database dbexercicio03;

-- conectando na base de dados
use dbexercicio03;

-- criando as tabelas

create table livro (
idlivro int not null auto_increment
, titulo varchar(100)
, autor varchar(100)
, editora varchar(100)
, ano_de_pubricacao int
, primary key (idlivro)
);