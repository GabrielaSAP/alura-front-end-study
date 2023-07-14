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
}