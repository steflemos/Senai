do{
    var a = Math.floor(Math.random() * 5) + 1;
    var b = Math.floor(Math.random() * 5) + 1;
    var sinal = ["+", "-"][Math.floor(Math.random()*2)];

    // calcular a resposta certa
    var resposta = eval(a + sinal + b)

}while(resposta<0 || resposta>9)

document.getElementById('n1').innerHTML = a
document.getElementById('n2').innerHTML = b
document.getElementById('sinal').innerHTML = sinal

document.onkeyup = function (evento){
    let tecla = Number(evento.key)

    document.getElementById('answer').value = tecla

    setTimeout(function() {
        window.location.reload(1);
    }, 3000);

    if(tecla == eval(a + sinal + b)){
        document.getElementById('p').innerHTML =  "Você acertou!"
        document.getElementById('img').src = "https://c.tenor.com/TQIJ27YF7bIAAAAC/turma-da-monica-monica.gif";
    } else {
        document.getElementById('p').innerHTML = `Resposta Errada! a resposta correta é ${resposta}`
        document.getElementById('img').src = "https://c.tenor.com/xUSdTZjpTeIAAAAC/monica-turma-da-monica.gif";
    }
}