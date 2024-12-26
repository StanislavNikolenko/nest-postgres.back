import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  HttpCode,
  Get,
  Param
} from '@nestjs/common';
import { StudentsService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { StudentResponseDto } from './dto/student-response.dto';
import { StudentResponse } from './student.service';

@ApiTags('Students')
@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @ApiOperation({ summary: 'Create student' })
  @ApiResponse({ status: 201, type: StudentResponseDto })
  @UsePipes(ValidationPipe)
  @Post()
  @HttpCode(201)
  create(@Body() createStudentDto: CreateStudentDto): Promise<StudentResponse> {
    return this.studentsService.create(createStudentDto);
  }

  @ApiOperation({ summary: "Get student by id" })
  @ApiResponse({
    status: 200,
    description: "Get student by id",
    type: StudentResponseDto,
  })
  @Get(":id")
  async getStudentById(@Param("id") id: string): Promise<StudentResponse> {
    return await this.studentsService.getStudentById(id);
  }
}

