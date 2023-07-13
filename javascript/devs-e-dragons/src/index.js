import { Personagem } from "./modules/personagem.js"

// const personagemPedrinho = {
//     nome: 'Pedrinho',
//     vida: 7,
//     mana: 12,
//     nivel: 5,
//     tipo: 'Mago',
// }

// const personagemJose = {
//     nome: 'Jose',
//     vida: 7,
//     mana: 6,
//     nivel: 3,
//     tipo: 'Arqueiro',
// }

const personagemAna = {
    nome: 'Ana',
    vida: 8,
    mana: 10
}

const personagemPedrinho = new Personagem()
personagemPedrinho.nome = 'Pedrinho'
personagemPedrinho.mana = 12
personagemPedrinho.vida = 7
personagemPedrinho.tipo = 'Mago'
personagemPedrinho.nivel = 5

const personagemJose = new Personagem()
personagemJose.nome = 'José'
personagemJose.tipo = 'Arqueiro'
personagemJose.nivel = 3

console.log('Insígnia de ' + personagemPedrinho.nome + ': ' + personagemPedrinho.obterInsignia())
console.log('Insígnia de ' + personagemJose.nome + ': ' + personagemJose.obterInsignia())