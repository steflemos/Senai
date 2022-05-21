class Cliente{

    constructor (nome, email, zap, twitter){
        this.nome = nome
        this.email = email
        this.zap = zap
        this.twitter = twitter
    }
    
    toString(){
        return "Cliente: " + this.nome + ", email: " + this.email + ", zap: " + this.zap + ", twitter: " + this.twitter
    }
}

let clientes = []
for (i=1; i<11; i++){
    let cliente = new Cliente ("bataly"+i, "batalygmail.com"+i, "(48) 91234-2356"+i,  "bataly"+ i)
    console.log(cliente.toString());
}

