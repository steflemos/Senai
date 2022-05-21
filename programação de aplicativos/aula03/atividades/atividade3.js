
let produto = []
for (i=0; i<21; i++){
    produto.push({nome:"produto"+i, preco: 1+i})
}
console.log(produto);
console.log("soma dos preços: ", produto.map (b=>b.preco).reduce((a,b)=>a+b))