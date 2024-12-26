import {
  Injectable,
} from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { BadRequestException } from '@nestjs/common';

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
    const existingUser = await this.studentRepository.findOne({
      where: { name }
    });
    if (existingUser) {
      throw new BadRequestException(`User ${name} already exists`);
    }
    return this.studentRepository.save(createStudentDto);
  }
}
