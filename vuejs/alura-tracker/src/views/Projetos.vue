<template>
    <section class="projetos">
        <h1 class="title">Projetos</h1>
        <RouterLink to="/projetos/novo" class="button">
            <span class="icon is-small">
                <i class="fas fa-plus"></i>
            </span>
            <span>Novo projeto</span>
        </RouterLink>
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="projeto in projetos" :key="projeto.id">
                    <td>{{ projeto.id }}</td>
                    <td>{{ projeto.nome }}</td>
                    <td>
                        <RouterLink :to="`/projetos/${projeto.id}`" class="button">
                            <span class="icon is-small">
                                <i class="fas fa-pencil-alt"></i>
                            </span>
                        </RouterLink>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from '@/store';

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Projetos',
    setup() {
        const store = useStore()
        return {
            projetos: computed(() => store.state.projetos)
        }
    }
});
</script> 

<style scoped>
    .projetos {
        padding: 1.25rem;
    }
</style>