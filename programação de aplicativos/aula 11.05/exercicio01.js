class Produto {
    #nome
    #quantidade
    #preco
    #total
    constructor(nome, quantidade, preco,total){
        this.#nome = nome
        this.#quantidade = quantidade
        this.preco = preco
        this.total = total
    }

    set nome(nome){this.#nome = nome;}
    get nome(){return this.#nome}

    
    set quantidade(quantidade){this.#quantidade = quantidade;}
    get quantidade(){return this.#quantidade}

    set preco(preco){this.#preco = preco;}
    get preco(){return this.#preco}

    set total(total){this.#total = total;}
    get total(){return this.#total};

    toString(){
        return "Produto: " + this.#nome + ", Quantidade" + this.#quantidade + ", Preço: " + this.#preco + " Total: " + this.#total
    }

}

let produto = []
for (let i=0; i<10; i++){
    produto.push(new Produto("Arroz doce" +  i, i+1, i*2,0))
}
console.log(produto.toString());
console.log(produto.map(p =>{
    p.total = p.quantidade * p.preco
    return[p.nome, p.quantidade, p.total]
    
}));