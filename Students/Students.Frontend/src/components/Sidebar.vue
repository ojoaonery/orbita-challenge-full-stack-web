<template>
  <v-list dense nav>
    <v-container fluid>
      <v-row align="center" no-gutters>
        <v-col cols="auto" class="d-flex align-center">
          <v-img contain src="../assets/logo.svg" height="80" width="100"></v-img>
        </v-col>
      </v-row>
    </v-container>
    <v-divider></v-divider>
    <v-list-item title="Módulo acadêmico"></v-list-item>
    <v-divider></v-divider>
    <v-list-item class="mt-1" v-for="item in items" :key="item.title" link :to="item.path">
      <template v-slot:prepend>
        <v-list-item-icon>
        <v-icon>
          {{ item.icon }}
        </v-icon>
      </v-list-item-icon>
      </template>

      <v-list-item-content>
        <v-list-item-title class="ml-2">
          {{ item.title }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script lang="ts" setup>
  import { ref } from "vue";

  const items = ref([
    { title: "Alunos", icon: "mdi-account-multiple", path: "/Students" },
  ]);
</script>
