<template>
  <v-app>
    <v-navigation-drawer location="left" permanent app>
      <Sidebar />
    </v-navigation-drawer>
    <v-main class="d-flex justify-center align-center">
      <v-container class="spacing-playground pa-6">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
  import { ref, watch } from 'vue'

  const drawer = ref(false)
  const group = ref(null)

  watch(group, () => {
    drawer.value = false;
  })
</script>
