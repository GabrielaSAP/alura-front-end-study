import { Arqueiro } from "./arqueiro.js";
import { Mago } from "./mago.js";
import { Personagem } from "./personagem.js";

export class ArqueiroMago extends Personagem {
    ladoArqueiro
    ladoMago
    tipo = 'ArqueiroMago'

    constructor(nome, nivel, destreza, elementoMagico, nivelMagico, inteligencia) {
        super(nome, nivel)
        this.ladoArqueiro = new Arqueiro(nome, nivel, destreza)
        this.ladoMago = new Mago(nome, nivel, elementoMagico, nivelMagico, inteligencia)
    }

    obterInsignia() {
        return `${this.ladoArqueiro.obterInsignia()} e ${this.ladoMago.obterInsignia()}`
    }
}