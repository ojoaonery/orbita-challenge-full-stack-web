import { defineComponent, onMounted, reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { IStudent, StudentService } from '@/services/data/';

interface VForm {
  validate: () => boolean;
  resetValidation: () => void;
}

export default defineComponent({
  setup() {
    const router = useRouter();
    const route = useRoute();

    const studentForm = ref<VForm | null>(null);

    const student = reactive<IStudent>({
      id: 0,
      name: '',
      email: '',
      ra: 0,
      cpf: ''
    });

    const isValid = ref(false);
    const showSnackbar = ref(false);
    const isEdit = ref(false);

    const fetchStudent = async (id: number) => {
      try {
        const response = await StudentService.getById(id);
        student.id = response.data.id;
        student.name = response.data.name;
        student.email = response.data.email;
        student.ra = response.data.ra;
        student.cpf = response.data.cpf;
        isEdit.value = true;
      } catch (error) {
        console.error('Erro ao buscar o estudante:', error);
      }
    };

    const saveStudent = async () => {
      if (studentForm.value?.validate()) {
        try {
          if (isEdit.value) {
            await StudentService.update(Number(student.id), student);
          } else {
            await StudentService.create(student);
          }

          showSnackbar.value = true;

          setTimeout(() => {
            router.push({ name: '/Students' });
          }, 1000);
        } catch (error) {
          console.error('Erro ao salvar estudante:', error);
        }
      }
    };

    const cancel = () => {
      router.back();
    };

    onMounted(() => {
      const id = route.params.id;
      if (id) {
        fetchStudent(Number(id));
      }
    });

    return {
      student,
      isValid,
      showSnackbar,
      isEdit,
      saveStudent,
      cancel,
      studentForm
    };
  }
});
