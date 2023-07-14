export class Personagem {
    nome
    vida
    mana
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