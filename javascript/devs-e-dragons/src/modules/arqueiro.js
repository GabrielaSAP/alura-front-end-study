import { Personagem } from "./personagem.js";

export class Arqueiro extends Personagem {
    destreza
    tipo = 'Arqueiro'

    constructor(nome, nivel, destreza) {
        super(nome, nivel)
        this.destreza = destreza
    }

    obterInsignia() {
        if (this.destreza >= 5) {
            return `Dominador de flechas`
        }
        return super.obterInsignia()
    }
}