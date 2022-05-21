class Frutas {
    #nome
    #preco
constructor(nome, preco){
    this.#nome = nome
    this.#preco = preco
}

set nome(nome){this.#nome = nome;}
get nome(){return this.#nome}


set preco(preco){this.#preco = preco;}
get preco(){return this.#preco}

toString(){
    return " Fruta: " + this.#nome + ", Preço: " + this.#preco 
}
}

let fruta = []
for (let i=0; i<7; i++){
    fruta.push(new Frutas("Banana " +  i, i+1, i*2,0))
}
console.log(fruta.toString());
console.log(fruta.reduce((a,b) => a + b

));
