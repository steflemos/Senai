l//et numeros = [0, 2, 4, 6, 9, 10, 14, 18, 20]
//console.log(numeros.map( n =>n *2));
//console.log(numeros);

let numerosText = ['0','2', '4', '6', '8', '10','12','14', '16', '18','20']
let numeros = numerosText.map(n => parseFloat(n))
console.log(numerosText, numeros);