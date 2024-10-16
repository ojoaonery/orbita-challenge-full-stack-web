<template>
  <v-container>
  </v-container>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    beforeRouteEnter(to, from, next) {
      document.title = 'Módulo acadêmico';
      next();
    },
  });
</script>
