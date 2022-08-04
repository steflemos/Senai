var a = Math.floor(Math.random() * 5) + 1;
var b = Math.floor(Math.random() * 5) + 1;
var operation = ["+", "-"][Math.floor(Math.random()*2)];

document.getElementById('n1').innerHTML = a
document.getElementById('n2').innerHTML = b
document.getElementById('operation').innerHTML = operation


function ask() {
    var answer = document.getElementById('answer').value

    if(answer == ''){
        document.getElementById('p').innerHTML = "Preencha os campos!"
        document.getElementById('img').src = "https://c.tenor.com/KThP19wcsrQAAAAC/monica-turmadamonica.gif";

    } else if(answer == eval(a + operation + b)){
        document.getElementById('p').innerHTML = "Você acertou!"
        document.getElementById('img').src = "https://c.tenor.com/TQIJ27YF7bIAAAAC/turma-da-monica-monica.gif";
        document.getElementById('button').innerHTML = `<button onclick="window.location.reload()">Proxima Pergunta</button>`
    } else  {
        document.getElementById('p').innerHTML = "Você errou!\nA resposta correta é: " + eval(a + operation + b)
        document.getElementById('img').src = "https://c.tenor.com/xUSdTZjpTeIAAAAC/monica-turma-da-monica.gif";
        document.getElementById('button').innerHTML = `<button onclick="window.location.reload()" id="button">Proxima Pergunta</button>`
    }
}