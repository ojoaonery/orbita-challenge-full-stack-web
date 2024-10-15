import { AxiosResponse } from 'axios';
import { ApiService } from '../ApiService'
import { IStudent } from './IStudent';

interface IStudentService {
  create(student: IStudent): Promise<AxiosResponse<IStudent, string>>;
  getAll(): Promise<AxiosResponse<IStudent[], string>>;
  getById(id: number): Promise<AxiosResponse<IStudent, string>>;
  update(id: number, student: IStudent): Promise<AxiosResponse<IStudent, string>>;
  delete(id: number): Promise<AxiosResponse<boolean, string>>;
}

export const StudentService: IStudentService = {
  async create(student: IStudent) {
    return ApiService.post('/Student', student)
  },

  async getAll() {
    return ApiService.get('/Student');
  },

  async getById(id: number) {
    return ApiService.get(`/Student/${id}`);
  },

  async update(id: number, student: IStudent) {
    return ApiService.put(`/Student/${id}`, student)
  },

  async delete(id: number) {
    return ApiService.delete(`/Student/${id}`)
  }
}
