let produtos = []
for(i=0; i <10; i++){
    produtos.push({nome: ("banana " + (i+1)), preco:2 * i})
}
console.log("Produtos: ", produtos);
console.log('Total: '); produtos.map(p=> p.preco).reduce((pa, pt) => pa + pt)

