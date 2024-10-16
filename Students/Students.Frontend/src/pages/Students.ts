import { computed, defineComponent, onMounted, ref } from 'vue';
import { IStudent, StudentService } from '@/services/data/';

export default defineComponent({
  beforeRouteEnter(to, from, next) {
    document.title = 'Consulta de alunos';
    next();
  },
  setup() {
    const students = ref<IStudent[]>([]);
    const isDelete = ref(false);
    const searchText = ref('');
    const deleteId = ref(0);
    const path = "/Student"

    const headers = [
      { title: 'Registro acadêmico', key: 'ra' },
      { title: 'Nome', key: 'name' },
      { title: 'CPF', key: 'cpf' },
      { title: 'Ações', key: 'actions', sortable: false },
    ];

    const loadStudents = () => {
      StudentService.getAll().then((response) => {
        students.value = response.data;
      });
    };

    onMounted(loadStudents);

    const filterStudents = computed(() => {
      return students.value.filter((student) => {
        return (
          String(student.ra).toLowerCase().includes(searchText.value.toLowerCase()) ||
          student.cpf.toLowerCase().includes(searchText.value.toLowerCase()) ||
          student.name.toLowerCase().includes(searchText.value.toLowerCase())
        );
      });
    });

    const deleteStudent = (id: number) => {
      deleteId.value = id;
      isDelete.value = true;
    };

    const deleteStudentConfirm = () => {
      isDelete.value = false;
      StudentService.delete(deleteId.value).then(() => {
        loadStudents();
      }).catch((error) => {
        console.error("Erro ao excluir o estudante:", error);
      });
    };

    return {
      students,
      isDelete,
      searchText,
      deleteId,
      path,
      headers,
      filterStudents,
      deleteStudent,
      deleteStudentConfirm,
    };
  }
});
