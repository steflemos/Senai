let bicicletas = [
    {nome: "Monark", preco: 200.40, isAtiva: false},
    {nome: "Barra Forte", preco: 350.23, isAtiva: false},
    {nome: "Caloi 10", preco: 1000.46, isAtiva: false},
    {nome: "Brilha escuro", preco: 1000.56, isAtiva: true},
    {nome: "Caloi Aspen Sport", preco: 1500.12, isAtiva: true},
    {nome: "Caloi Explorer aro 29", preco: 2000.50, isAtiva: true},
]

console.log("Todas as bikes", bicicletas);
console.log("Bikes ativas", bicicletas.filter(b=>b.isAtiva && b.preco <=1500));
