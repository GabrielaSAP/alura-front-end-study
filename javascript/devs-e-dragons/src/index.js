import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/mago.js"
import { Arqueiro } from "./modules/arqueiro.js"

const magoAntonio = new Mago('Antonio', 4, 'fogo', 4, 3)
const magaJulia = new Mago('Julia', 8, 'gelo', 7, 10)
const arqueiroPedrinho = new Arqueiro('Pedrinho', 5, 5)
const arqueiroJoao = new Arqueiro('João', 2, 2)

const personagens = [magoAntonio, magaJulia, arqueiroPedrinho, arqueiroJoao]

new PersonagemView(personagens).render()