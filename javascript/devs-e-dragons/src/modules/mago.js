import { Personagem } from "./personagem.js"

export class Mago extends Personagem {
    elementoMagico
    nivelMagico
    inteligencia
    tipo = 'Mago'

    constructor(nome, nivel, elementoMagico, nivelMagico, inteligencia) {
        super(nome, nivel)
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