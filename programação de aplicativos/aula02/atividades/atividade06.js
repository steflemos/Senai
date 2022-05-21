let produtos = []
for(i=0; i <20; i++){
    produtos.push({nome: ("produto " + (i+1)), preco:2 * i, desconto: 0})
}
console.log(produtos);
produtos.map(p=> p.desconto = p.preco * 0.15)
console.log(produtos);