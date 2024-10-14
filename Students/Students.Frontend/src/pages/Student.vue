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

<script lang="ts" setup>
  import { useField, useForm } from 'vee-validate'

  const { handleSubmit, handleReset } = useForm({
    validationSchema: {
      nome (value) {
        if (value?.length >= 2) return true

        return 'Nome needs to be at least 2 characters.'
      },
      email (value) {
        if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

        return 'Must be a valid E-mail.'
      },
      ra (value) {
        if (value?.length > 9 && /[0-9-]+/.test(value)) return true

        return 'RA number needs to be at least 9 digits.'
      },
      cpf (value) {
        if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

        return 'Must be a valid CPF.'
      },
    },
  })
  const nome = useField('nome')
  const email = useField('email')
  const ra = useField('ra')
  const cpf = useField('cpf')

  const submit = handleSubmit(values => {
    alert(JSON.stringify(values, null, 2))
  })
</script>
