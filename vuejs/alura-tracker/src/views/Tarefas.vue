<template>
    <Formulario @aoSalvarTarefa="salvarTarefa"/>
    <div class="lista">
        <Box v-if="listaEstaVazia">
        Você não está muito produtivo hoje :(
        </Box>
        <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"/>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import Formulario from '../components/Formulario.vue';
import Tarefa from '../components/Tarefa.vue';
import Box from '../components/Box.vue';
import { useStore } from '@/store';
import { OBTER_TAREFAS } from '@/store/tipo-acoes';

export default defineComponent({
// eslint-disable-next-line vue/multi-word-component-names
name: 'App',
components: {
    Formulario, Tarefa, Box
},
computed: {
    listaEstaVazia () : boolean {
    return this.tarefas.length === 0
    }
},
methods: {
    // salvarTarefa (tarefa: ITarefa) {
    // this.tarefas.push(tarefa)
    // }
},
setup() {
    const store = useStore()
    store.dispatch(OBTER_TAREFAS)
    return {
        tarefas: computed(() => store.state.tarefas),
        store
    }
}
});
</script>