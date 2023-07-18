export class Personagem {
    nome
    vida = 100
    mana = 100
    #nivel
    tipo
    descricao

    constructor(nome, nivel) {
        this.nome = nome
        this.#nivel = nivel
    }

    obterInsignia() {
        if (this.#nivel >= 5) {
            return `${this.constructor.tipo} implacável`
        }
        return `${this.constructor.tipo} iniciante`
    }

    static verificarVencedor(personagem1, personagem2) {
        if(personagem1.nivel === personagem2.nivel) {
            return 'Empate!!!'
        }
        if(personagem1.nivel > personagem2.nivel) {
            return `${personagem1.constructor.tipo} ${personagem1.nome} é o vencedor!`
        }
        return `${personagem2.constructor.tipo} ${personagem2.nome} é o vencedor!`
    }
}