class Aluno {
    constructor (nome, nota1, nota2, nota3, media){
        this.nome = nome
        this.nota1 = nota1
        this.nota2 = nota2
        this.nota3 = nota3
        this.media = media
    }
    calcularMedia(){
        this.media = ((parseFloat(this.nota1) + parseFloat(this.nota2) + parseFloat(this.nota3)) / 3)
        this.media = this.media.toFixed(1)
        }
    }
    
    let aluno = new Aluno('Fernando', 10, 9, 7)
    aluno.calcularMedia()
    console.log(aluno);