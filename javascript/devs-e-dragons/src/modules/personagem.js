export class Personagem {
    nome
    vida
    mana
    nivel
    tipo
    descricao

    obterInsignia() {
        if (this.nivel >= 5) {
            return `${this.tipo} implacável`
        }
        return `${this.tipo} iniciante`
    }
}