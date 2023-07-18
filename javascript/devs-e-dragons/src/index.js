import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/mago.js"
import { Arqueiro } from "./modules/arqueiro.js"
import { ArqueiroMago } from "./modules/arqueiro-mago.js"

const magoAntonio = new Mago('Antonio', 4, 'fogo', 4, 3)
const magaJulia = new Mago('Julia', 8, 'gelo', 7, 10)
const arqueiroPedrinho = new Arqueiro('Pedrinho', 5, 5)
const arqueiroMagoChico = new ArqueiroMago('Chico', 7, 10, 'ar', 6, 8)

const personagens = [magoAntonio, magaJulia, arqueiroPedrinho, arqueiroMagoChico]

new PersonagemView(personagens).render()
console.log(Personagem.verificarVencedor(arqueiroPedrinho, magoAntonio))