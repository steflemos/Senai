class Conta {

    #numeroAgencia
    #numeroConta
    #saldo

    constructor(numeroAgencia, numeroConta, saldo){
        this.#numeroAgencia = numeroAgencia
        this.#numeroConta = numeroConta
        this.#saldo = saldo
    
        
    }
    get numeroAgencia(){return this.#numeroAgencia}
    set numeroAgencia(numeroAgencia){this.#numeroAgencia = numeroAgencia}
    get numeroConta(){return this.#numeroAgencia = numeroAgencia}
    set numeroConta(numeroConta){this.#numeroConta = numeroConta}

    get saldo(){return this.#saldo}
    depositar(valor){
        if (valor >0){
            this.#saldo += valor
        }
    }

    sacar (valor){
    if ( valor > 0 && valor <= this.#saldo){
        this.#saldo += valor

    }
}

toSthing(){
    return "Agencia: " + this.#numeroAgencia +
    ", Conta: " + this.#numeroConta +
    ", saldo: " + this.#saldo
}

}

let conta = new Conta("12345-6", "34567-7", 100)
conta.depositar(1000)
conta.sacar(500)
//console.log(conta.getSaldo());
console.log(conta);