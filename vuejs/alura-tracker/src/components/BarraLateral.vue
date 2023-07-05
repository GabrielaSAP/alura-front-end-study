<template>
    <header>
        <h1><img src="../assets/logo.png" alt=""></h1>
        <button class="button" @click="alterarTema">
            {{ textoBotao }}
        </button>
        <nav class="panel mt-5">
            <ul>
                <li>
                    <RouterLink to="/" class="link">
                        <i class="fas fa-tasks"></i>
                        tarefas
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/projetos" class="link">
                        <i class="fas fa-project-diagram"></i>
                        projetos
                    </RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'BarraLateral',
        emits: ['aoTemaAlterado'],
        data () {
            return {
                modoEscuroAtivo: false
            }
        },
        computed: {
            textoBotao () {
                if (this.modoEscuroAtivo) {
                    return 'Desativar modo escuro'
                }
                return 'Ativar modo escuro'
            }
        },
        methods: {
            alterarTema () {
                this.modoEscuroAtivo = !this.modoEscuroAtivo
                this.$emit('aoTemaAlterado', this.modoEscuroAtivo)
            }
        }
    })
</script>

<style scoped>
    header {
        background: #0d3b66;
        height: 100vh;
        padding: 1rem;
        width: 100%;
        text-align: center;
    }

    @media only screen and (max-width: 768px) {
        header {
            height: auto;
            padding: 2.5rem;
        }
    }
    .panel li {
        margin: 8px 0;
    }
    .link {
        color: #fff;
    }
    .link:hover {
        color: #FAF0CA;
    }
    .link.router-link:active {
        color: #faf0ca;
    }
</style>