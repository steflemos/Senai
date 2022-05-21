class Animal{
    #nome;
    constructor(nome){
        this.#nome = nome;
    }

    set nome(nome){this.#nome = nome;}
    get nome(){return this.#nome}

    toString(){
        return "Nome: " + this.#nome;
    }
    
}
class Gato extends Animal{
    #raca
    constructor(nome, raca){
        super(nome),
         this.#raca = raca
    }
    toString(){ return super.toString() + ", Raça: " + this.#raca}
}
class Cachorro extends Animal{
    #idade
    constructor(nome, idade){
        super(nome);
        this.#idade = idade;
    }
    set idade(idade){this.#idade = idade};
    get idade(){return this.#idade};
    toString(){return super.toString()+ ", Idade: " + this.#idade}
}
class Coelho extends Animal{
    #cor
    constructor(nome, cor){
        super(nome);
        this.#cor = cor;
    }
    set cor(cor){this.#cor = cor};
    get cor(){return this.#cor};
    toString(){return super.toString()+ ", Cor: " + this.#cor}
}

/*let animal = new Animal("Gambá");
console.log(animal.toString());

let gato = new Gato("Jujuba", "Laranja");
gato.nome = "Garfield";
console.log(gato.toString());

let cachorro = new Cachorro("Juquinha", "777 meses");
cachorro.nome = "Rex";
console.log(cachorro.toString());*/

const listAnimais = () => {
    let p = document.getElementById("resultado")
    let animal = new Animal("Gatinho");
    let gato = new Gato("Zoe", "Tricolor");
    let cachorro = new Cachorro("Foguetinho", "777 meses");
    let coelho = new Coelho ("Januario" , "Azul")

    p.innerHTML = "<br>"  + "ANIMAL " + "<br><br>"+ animal.toString() + "<br><br>" +
    "<br>" + "GATO " + "<br><br>" + gato.toString() + "<br><br>" +
    "<br>" + "COELHO " + "<br><br>" + coelho.toString() + "<br><br>" +
    "<br>"  + "CACHORRO " + "<br><br>"  + cachorro.toString() + "<br><br>";
}

listAnimais();