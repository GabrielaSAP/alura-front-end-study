<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <Cronometro :tempoEmSegundos="tempoEmSegundos"/>
        <Botao @clicado="iniciar" :icone="'fas fa-play'" :texto="'play'" :disabled="cronometroRodando" />
        <Botao @clicado="finalizar" :icone="'fas fa-stop'" :texto="'stop'" :disabled="!cronometroRodando" />
        <!-- <button class="button" @click="iniciar" :disabled="cronometroRodando">
            <span class="icon">
                <i class="fas fa-play"></i>
            </span>
            <span>play</span>
        </button>
        <button class="button" @click="finalizar" :disabled="!cronometroRodando">
            <span class="icon">
                <i class="fas fa-stop"></i>
            </span>
            <span>stop</span>
        </button> -->
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import Cronometro from './Cronometro.vue'
    import Botao from './Botao.vue';

    export default defineComponent({
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Temporizador',
        emits: ['aoTemporizadorFinalizado'],

        components: {
            Cronometro, Botao
        },
        data() {
            return {
                tempoEmSegundos: 0,
                cronometro: 0,
                cronometroRodando: false
            }
        },
        methods: {
            iniciar() {
                this.cronometroRodando = true
                this.cronometro = setInterval(() => {
                    this.tempoEmSegundos += 1
                }, 1000)
            },
            finalizar() {
                this.cronometroRodando = false
                clearInterval(this.cronometro)
                this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos)
                this.tempoEmSegundos = 0
            }
        }
    });
</script>