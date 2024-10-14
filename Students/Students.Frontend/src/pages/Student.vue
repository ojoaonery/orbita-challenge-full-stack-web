<template>
  <form @submit.prevent="submit">
    <v-text-field
      v-model="nome.value.value"
      :counter="10"
      :error-messages="nome.errorMessage.value"
      label="Nome"
      variant="outlined"
    ></v-text-field>

    <v-text-field
      v-model="email.value.value"
      :counter="7"
      :error-messages="email.errorMessage.value"
      label="E-mail"
      variant="outlined"
    ></v-text-field>

    <v-text-field
      v-model="ra.value.value"
      :error-messages="ra.errorMessage.value"
      label="RA"
      variant="outlined"
    ></v-text-field>

    <v-text-field
      v-model="cpf.value.value"
      :error-messages="cpf.errorMessage.value"
      label="CPF"
      variant="outlined"
    ></v-text-field>

    <v-btn @click="handleReset" variant="outlined">
      Cancelar
    </v-btn>

    <v-btn
      class="ms-4"
      type="submit"
      variant="tonal"
    >
      Salvar
    </v-btn>
  </form>
</template>

<script lang="ts" setup src="./Student.ts">

</script>
