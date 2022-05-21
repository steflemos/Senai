class Conta{
    #titular;
    #numero;
    constructor(titular, numero){
        this.#titular = titular;
        this.#numero = numero;
    }

    set titular(titular){this.#titular = titular;}
    get titular(){return this.#titular}

    set numero(numero){this.#numero = numero;}
    get numero(){return this.#numero}

    toString(){return "Titular: " + this.#titular + "Numero: " + this.#numero;}
}
class Poupanca extends Conta{
    #aniversario
    constructor(titular, numero, aniversario){
        super(titular,numero);
        //super(numero);
        this.#aniversario = aniversario;
    }
    set aniversario(aniversario){this.#aniversario = aniversario};
    get aniversario(){return this.#aniversario};
    toString(){return super.toString()+ ", aniversario: " + this.#aniversario}
}

class Especial extends Conta{
    #limite
    constructor(titular,numero, aniversario, limite){
        super(titular,numero,aniversario)
        this.#limite = limite
    }
    set limite(limite){this.#limite = limite};
    get limite(){return this.#limite};
    toString(){return super.toString()+ ", limite: " + this.#limite}
}

let conta = new Conta("brenno ", 12);
console.log(conta.toString());

let poupanca = new Poupanca("q iss", 13, 19.06);
poupanca.titular = "bruno ";
console.log(poupanca.toString());

let especial = new Especial("novax ", 14, 12, 1.564 );
especial.titular = "oq ser isto";
console.log(especial.toString());