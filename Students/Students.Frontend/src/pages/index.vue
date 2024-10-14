<template>
  <v-container>
    <v-container>
      <v-row class="d-flex align-center">
        <v-col cols="8">
        <v-text-field
        clearable
        label="Digite sua busca"
        variant="outlined"
        append-inner-icon="mdi-magnify"
      >
      </v-text-field>
      </v-col>
      <v-col cols="4" class="d-flex align-center justify-center">
        <v-btn variant="outlined" class="mt-2 mb-6" link :to="path">
        Cadastrar aluno
      </v-btn>
      </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-divider></v-divider>
      <v-data-table
        :headers="headers"
        :items="items"
        item-key="id"
      >
        <template v-slot:item.actions="{ item }">
          <v-btn color="primary" @click="editItem(item)">
            Edit
          </v-btn>
        </template>
      </v-data-table>
    </v-container>
  </v-container>
</template>

<script lang="ts" setup>
  const path = "/Student"
  const editItemData = ref({});

  const headers = ref([
    { text: 'Name', value: 'name' },
    { text: 'Description', value: 'description' },
    { text: 'Actions', value: 'actions', sortable: false },
  ]);

  const items = [
  {
      "Registro Acadêmico": 123456,
      "Nome": '',
      "CPF": '',
      "Ações": ''
    },
    {
      "Registro Acadêmico": 123456,
      "Nome": '',
      "CPF": '',
      "Ações": ''
    },
    {
      "Registro Acadêmico": 123456,
      "Nome": '',
      "CPF": '',
      "Ações": ''
    },
    {
      "Registro Acadêmico": 123456,
      "Nome": '',
      "CPF": '',
      "Ações": ''
    },
    {
      "Registro Acadêmico": 123456,
      "Nome": '',
      "CPF": '',
      "Ações": ''
    },
    {
      "Registro Acadêmico": 123456,
      "Nome": '',
      "CPF": '',
      "Ações": ''
    },
    {
      "Registro Acadêmico": 123456,
      "Nome": '',
      "CPF": '',
      "Ações": ''
    },
    {
      "Registro Acadêmico": 123456,
      "Nome": '',
      "CPF": '',
      "Ações": ''
    },
    {
      "Registro Acadêmico": 123456,
      "Nome": '',
      "CPF": '',
      "Ações": ''
    },
    {
      "Registro Acadêmico": 123456,
      "Nome": '',
      "CPF": '',
      "Ações": ''
    },
  ]
</script>
