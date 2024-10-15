<template>
  <v-container fluid class="pa-2 ma-0 w-auto">
    <v-app-bar density="compact" :elevation="0">
      <v-app-bar-title>Consulta de alunos</v-app-bar-title>
    </v-app-bar>
    <v-container fluid fill-heigth class="pt-0">
      <v-card-title class="d-flex align-center pa-0 mb-4">
      <v-text-field
        v-model="searchText"
        density="compact"
        label="Digite sua busca"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        flat
        hide-details
        single-line
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn variant="outlined" link :to="`${path}/0`">
        Cadastrar aluno
      </v-btn>
    </v-card-title>
      <v-divider></v-divider>
      <v-data-table
        :headers="headers"
        :items="allStudents"
        :search="searchText"
      >
        <template v-slot:item.actions="{ item: { id } }">
          <div class="d-flex justify-end mt-4">
            <v-btn
              class="ma-2"
              icon="mdi-pencil"
              variant="outlined"
              size="small"
              link :to="`${path}/${id}`"
            />
            <v-btn
              class="ma-2"
              color="red-lighten-1"
              icon="mdi-delete"
              variant="outlined"
              size="small"
              @click="deleting(String(id))"
            />
          </div>
        </template>
      </v-data-table>
      <v-dialog v-model="dialogDelete" max-width="500">
      <template v-slot:default="{ isActive }">
        <v-card title="Confirmar exclusão">
          <v-card-text>
            Você deseja excluir este aluno?
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text="Cancelar"
              @click="isActive.value = false"
            />
            <v-btn
              text="Confirmar"
              variant="flat"
              color="red-lighten-1"
              @click="isActive.value = false"
            />
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
    </v-container>
  </v-container>
</template>

<script lang="ts" src="./Students.ts" />
