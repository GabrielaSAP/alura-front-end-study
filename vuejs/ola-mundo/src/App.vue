<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <OlaMundo />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OlaMundo from "@/components/OlaMundo.vue"

export default defineComponent({
  name: 'App',
  components: {
    OlaMundo
  }
});
</script>
