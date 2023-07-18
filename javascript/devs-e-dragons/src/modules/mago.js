import { Personagem } from "./personagem.js"

export class Mago extends Personagem {
    elementoMagico
    nivelMagico
    inteligencia
    static tipo = 'Mago'
    static descricao = 'O mago é implacável!'

    constructor(nome, elementoMagico, nivelMagico, inteligencia) {
        super(nome)
        this.elementoMagico = elementoMagico
        this.nivelMagico = nivelMagico
        this.inteligencia = inteligencia
    }

    obterInsignia() {
        if(this.nivelMagico >= 5 && this.inteligencia >= 5) {
            return `Mestre do ${this.elementoMagico}`
        }
        return super.obterInsignia()
    }
}