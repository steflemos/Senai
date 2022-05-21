class Pessoa {
    #nome
    constructor(nome){
        this.#nome = nome
    }

    set nome(nome){this.#nome = nome;}
    get nome(){return this.#nome}

    toString(){return "Nome: " + this.#nome}
}

class Estudante extends Pessoa{
    #nota1
    #nota2
    #media
    constructor(nome, nota1, nota2,){
        super(nome);
        this.#nota1 = nota1;
        this.#nota2 = nota2;
    }
    set nota1(nota1){this.#nota1 = nota1};
    get nota1(){return this.#nota1};

    set nota2(nota2){this.#nota2 = nota2};
    get nota2(){return this.#nota2};

    //set media(media){this.#media = media};
    get media(){return this.#media};

    calcularMedia(){
        this.#media = (this.#nota1 + this.#nota2) /2;
    }
   
   toString(){
       return super.toString() + ", Nota1: " + this.#nota1 + ", Nota2: " + this.#nota2 + ", Media: " + this.#media
    }
}

class Professor extends Pessoa{
    #horas
    #valor
    #salario
    constructor(nome, horas, valor){
        super(nome)
        this.#horas = horas
        this.#valor = valor
    }
    set horas(horas){this.#horas = horas};
    get horas(){return this.#horas};

    set valor(valor){this.valor = valor};
    get valor(){return this.#valor};

    get salario(){return this.#salario}

    calcularSalario(){
        this.#salario = this.#horas * this.#valor;
    }

    toString(){
        return super.toString() + ", horas: " + this.#horas + ", valor: " + this.#valor + ", Salario: " + this.#salario
     }
    
    
}

let pessoa = new Estudante("Fernando", 10, 8);
pessoa.calcularMedia()
console.log(pessoa.toString());

let salario = new Professor("Battistella", 160, 45.43);
salario.calcularSalario()
console.log(salario.toString());