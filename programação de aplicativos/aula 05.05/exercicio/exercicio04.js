class Funcionario {
    #nome
    constructor(nome){
        this.#nome = nome
    }

    set nome(nome){this.#nome = nome;}
    get nome(){return this.#nome}

    toString(){return "Nome: " + this.#nome}
}

class Engenheiro extends Funcionario{
    
}

class Diretor extends Funcionario{

}

class Secretario extends Funcionario{

}