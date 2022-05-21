class Livro{
    #nome
    #titulo
    #autor
    #editora
    #ano

    constructor(nome,titulo, autor, editora, ano){
        this.#nome = nome
        this.#titulo = titulo
        this.#autor = autor
        this.#editora = editora
        this.#ano = ano

    }
    get nome(){return this.#nome}
    set nome(nome){this.#nome = nome}
    get titulo(){return this.#titulo}
   
}