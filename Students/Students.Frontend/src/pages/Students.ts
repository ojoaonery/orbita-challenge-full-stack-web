import { computed, defineComponent, onMounted, ref } from 'vue';
import { IStudent, StudentService } from '@/services/data/';

export default defineComponent({
  setup() {
    const students = ref<IStudent[]>([]);
    const dialogDelete = ref(false);
    const searchText = ref('');
    const deleteId = ref('0');
    const path = "/Student"

    const headers = [
      { title: 'Registro acadêmico', key: 'ra' },
      { title: 'Nome', key: 'name' },
      { title: 'CPF', key: 'cpf' },
      { title: 'Ações', key: 'actions', sortable: false },
    ];

    onMounted(() => {
      StudentService.getAll().then((response) => {
        students.value = response.data;
      });
    });

    const allStudents = computed(() => {
      return students.value.filter((student) => {
        return (
          String(student.ra).toLowerCase().includes(searchText.value.toLowerCase()) ||
          student.cpf.toLowerCase().includes(searchText.value.toLowerCase()) ||
          student.name.toLowerCase().includes(searchText.value.toLowerCase())
        );
      });
    });

    const edit = (id: string) => {
    };

    const deleting = (id: string) => {
      deleteId.value = id;
      dialogDelete.value = true;
    };

    const deleteItemConfirm = () => {
      dialogDelete.value = false;
      StudentService.delete(Number(deleteId.value));
    };

    return {
      students,
      dialogDelete,
      searchText,
      deleteId,
      path,
      headers,
      allStudents,
      edit,
      deleting,
      deleteItemConfirm,
    };
  }
});
