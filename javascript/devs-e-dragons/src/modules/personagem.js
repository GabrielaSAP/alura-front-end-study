export class Personagem {
    nome
    vida = 100
    mana = 100
    nivel
    tipo
    descricao

    constructor(nome, nivel) {
        this.nome = nome
        this.nivel = nivel
    }

    obterInsignia() {
        if (this.nivel >= 5) {
            return `${this.tipo} implacável`
        }
        return `${this.tipo} iniciante`
    }
}