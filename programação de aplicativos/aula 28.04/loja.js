class Loja {
    #nome
    #cnpj
    constructor(nome){
        this.#nome = nome
    }


   get nome2() {return this.#nome}
}
let loja = new Loja ('americanas')

console.log(loja);
loja.nome = 'aaaaaaa'
console.log(loja.nome, loja.nome2);