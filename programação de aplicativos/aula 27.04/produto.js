class Produto {
    constructor (nome, quantidade, preco){
        this.nome = nome
        this.quantidade = quantidade
        this.preco = preco
    }

    calcularTotal(){
        this.total = (this.quantidade * this.preco).toFixed(2)
    }

    toString(){
        return "Nome: " + this.nome + "quantidade: " + this.quantidade + ". preço: " + this.preco + ", total: " + this.total
    }
}
let produto = new Produto("samsung s21",3, 7.843)
let produto2 = new Produto("Brunno",1, 101.435)

produto.calcularTotal()
produto2.calcularTotal()

console.log(produto, produto2);
console.log(produto.toString(), produto2.toString());
