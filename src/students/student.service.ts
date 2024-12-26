import {
  Injectable,
} from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { InjectRepository } from '@nestjs/typeorm';

type StudentResponse = {
  id: string;
  name: string;
};

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
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
