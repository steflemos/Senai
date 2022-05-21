class Pessoa{
    #nome;
    #cpf;
    constructor(nome, cpf){
        this.#nome = nome;
        this.#cpf = cpf;
    }

    set nome(nome){this.#nome = nome;}
    get nome(){return this.#nome}

    set cpf(cpf){this.#cpf = cpf;}
    get cpf(){return this.#cpf}

    toString(){return "Nome: " + this.#nome + ", Cpf: " + this.#cpf;}
}

class Cliente extends Pessoa{
    #pedido
    constructor(nome, cpf, pedido){
        super(nome,cpf);
        this.#pedido = pedido;
    }
    set pedido(pedido){this.#pedido = pedido};
    get pedido(){return this.#pedido};
    toString(){return super.toString()+ ", Pedido: " + this.#pedido}
}

class Funcionario extends Pessoa{
    #salario
    constructor(nome,cpf, pedido, salario){
        super(nome,cpf,pedido)
        this.#salario = salario
    }
    set salario(salario){this.#salario = salario};
    get salario(){return this.#salario};
    toString(){return super.toString()+ ", Salario: " + this.#salario}
}

let pessoa = new Pessoa("Bruno", 1254.768981);
console.log(pessoa.toString());

let cliente = new Cliente("q iss",7654.123411, "short do bob esponja");
cliente.nome = "Stefani";
console.log(cliente.toString());

let funcionario = new Funcionario("novax ", 4748.2229598 , 12, 12.5801 );
funcionario.nome = "Gustavo";
console.log(funcionario.toString());