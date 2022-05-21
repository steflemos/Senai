class Pessoa{
    #nome;
    constructor(nome){
        this.#nome = nome;
    }

    set nome(nome){this.#nome = nome;}
    get nome(){return this.#nome}

    toString(){return "Nome: " + this.#nome}
}

class PessoaFisica extends Pessoa{
    #cpf
    #rg
    constructor(nome, cpf, rg){
        super(nome);
        this.#cpf = cpf;
        this.#rg = rg;
    }
    set cpf(cpf){this.#cpf = cpf};
    get cpf(){return this.#cpf};

    set rg(rg){this.#rg = rg};
    get rg(){return this.#rg};

    toString(){return super.toString()+ ", CPF: " + this.#cpf + ", RG: " + this.#rg}
}

class PessoaJuridica extends Pessoa{
    #cnpj
    #ie
    constructor(nome, cpf, cnpj, ie){
        super(nome,cpf)
        this.#cnpj = cnpj
        this.#ie = ie
    }
    set cnpj(cnpj){this.#cnpj = cnpj};
    get cnpj(){return this.#cnpj};

    set ie(ie){this.#ie = ie};
    get ie(){return this.#ie};
    
    toString(){return super.toString()+ ", CNPJ: " + this.#cnpj + ", IE: " + this.#ie}
}

let pessoa = new Pessoa("Bruno", 1254.768981);
console.log(pessoa.toString());

let pessoaFisica = new PessoaFisica("q iss",7654.123411, 12.121212);
pessoaFisica.nome = "Stefani";
console.log(pessoaFisica.toString());

let pessoaJuridica = new PessoaJuridica("novax ", 4748.2229598 , 65478912404681, 123456789 );
pessoaJuridica.nome = "Gustavo";
console.log(pessoaJuridica.toString());