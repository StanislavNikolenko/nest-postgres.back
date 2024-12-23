import {
  Inject,
  Injectable,
} from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import {Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { DBRepositories } from 'src/database/repositories';

type StudentResponse = {
  id: string;
  name: string;
};

@Injectable()
export class StudentsService {
  constructor(
    @Inject(DBRepositories.STUDENT) private repository: Repository<Student>,
  ) {}

  async create(createStudentDto: CreateStudentDto): Promise<StudentResponse> {
    const { name } = createStudentDto;
    const newStudent = {
      id: '12345',
      name: name
    };
    return newStudent;
  }
}
