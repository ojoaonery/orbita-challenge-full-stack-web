<template>
  <v-container fluid class="fill-height">
    <v-app-bar density="compact" :elevation="0">
      <v-app-bar-title>Cadastro de aluno</v-app-bar-title>
    </v-app-bar>
    <v-row justify="center" align="center" class="fill-height">
      <v-col cols="12" md="8">
        <v-form ref="studentForm" v-model="isValid" lazy-validation>
          <v-text-field
            v-model="student.name"
            label="Nome"
            variant="outlined"
            :rules="[v => !!v || 'Nome é obrigatório']"
            required
          ></v-text-field>

          <v-text-field
            v-model="student.email"
            label="E-mail"
            variant="outlined"
            :rules="[v => !!v || 'E-mail é obrigatório', v => /.+@.+\..+/.test(v) || 'E-mail deve ser válido']"
            required
          ></v-text-field>

          <v-text-field
            v-model="student.ra"
            label="RA"
            variant="outlined"
            :rules="[v => !!v || 'RA é obrigatório']"
            required
            type="number"
            :disabled="isEdit"
          ></v-text-field>

          <v-text-field
            v-model="student.cpf"
            label="CPF"
            variant="outlined"
            :rules="[v => !!v || 'CPF é obrigatório']"
            required
            :disabled="isEdit"
          ></v-text-field>

          <div class="d-flex justify-end mt-4">
            <v-btn variant="flat" @click="cancel">Cancelar</v-btn>
            <v-btn variant="tonal" @click="saveStudent" :disabled="!isValid" class="ml-5">Salvar</v-btn>
          </div>
        </v-form>

        <v-snackbar v-model="showSnackbar" :timeout="3000" bottom right>
          Estudante cadastrado com sucesso!
        </v-snackbar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" src="./Student.ts" />
