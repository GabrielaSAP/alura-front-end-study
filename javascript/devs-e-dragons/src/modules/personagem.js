export class Personagem {
    nome
    vida = 100
    mana = 100
    nivel
    tipo
    descricao

    constructor(nome, nivel, tipo) {
        this.nome = nome
        this.nivel = nivel
        this.tipo = tipo
    }

    obterInsignia() {
        if (this.nivel >= 5) {
            return `${this.tipo} implacável`
        }
        return `${this.tipo} iniciante`
    }
}