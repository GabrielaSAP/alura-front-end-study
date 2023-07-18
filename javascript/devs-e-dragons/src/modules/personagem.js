export class Personagem {
    nome
    vida = 100
    mana = 100
    #nivel
    tipo
    descricao

    constructor(nome) {
        this.nome = nome
        this.#nivel = 1
    }

    aumentarNivel() {
        this.nivel += 1
    }

    diminuirNivel() {
        this.nivel -= 1
    }

    get nivel() {
        return this.#nivel
    }

    set nivel(novoNivel) {
        if(novoNivel >= 1 && novoNivel <= 10) {
            this.#nivel = novoNivel
        }
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