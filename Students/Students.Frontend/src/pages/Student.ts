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
});
