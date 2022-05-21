class Divisao{
    #x
    #y
    #resultado
    constructor(x, y){
        this.#x = x
        this.#y = y
    }
    dividir(){
        try{
            this.#resultado = this.#x / this.#y
            if(! isFinite(this.#resultado)){
                throw new Error ('erro ao dividir')
            }else {
                return this.#resultado 
            }
        }catch(e){
            console.log(e.message);
        }
       
    }
    toString(){
        return "divisão " + this.#x + "/" + this.#y + '=' + this.#resultado
    }
}

let divisao = new Divisao(20, 0)
console.log();
console.log(divisao.toString());