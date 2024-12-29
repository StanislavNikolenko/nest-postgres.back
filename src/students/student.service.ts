import { Injectable } from "@nestjs/common";
import { CreateStudentDto } from "./dto/create-student.dto";
import { Repository } from "typeorm";
import { Student } from "./entities/student.entity";
import { BadRequestException } from "@nestjs/common";
import { StudentResponseDto } from "./dto/student-response.dto";
import { UpdateStudentDto } from "./dto/update-student.dto";
import { NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

// This file contains examples of services.
// Services contains business logic and do requests to a database
// using Repository pattern:
// DB Entity -> Repository Interface -> Request to DB from service.

@Injectable()
export class StudentsService {
  constructor(
    // Inject a repository to be able to use it for making DB requests.
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  async create(
    createStudentDto: CreateStudentDto,
  ): Promise<StudentResponseDto> {
    const { name } = createStudentDto;
    const existingUser = await this.studentRepository.findOne({
      where: { name },
    });
    if (existingUser) {
      throw new BadRequestException(`User ${name} already exists`);
    }
    return this.studentRepository.save(createStudentDto);
  }

  async getById(id: string): Promise<StudentResponseDto> {
    const student = await this.studentRepository.findOne({ where: { id } });
    if (!student) {
      throw new NotFoundException(`Student with id ${id} was not found`);
    }
    return student;
  }

  async update(
    id: Student["id"],
    updateStudentDto: UpdateStudentDto | Partial<Student>,
  ): Promise<Student> {
    const existingStudent: Student = await this.studentRepository.findOne({
      where: { id },
    });
    Object.assign(existingStudent, updateStudentDto);
    return this.studentRepository.save(existingStudent);
  }

  async remove(id: string): Promise<Student> {
    const existingStudent: Student = await this.studentRepository.findOne({
      where: { id },
    });
    return this.studentRepository.remove(existingStudent);
  }
}
