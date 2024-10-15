<template>
  <v-app>
    <v-navigation-drawer location="left" permanent app>
      <Sidebar />
    </v-navigation-drawer>
    <v-main>
        <router-view />
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
