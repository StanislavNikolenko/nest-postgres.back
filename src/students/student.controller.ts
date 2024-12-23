import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  HttpCode,
} from '@nestjs/common';
import { StudentsService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { StudentResponseDto } from './dto/student-response.dto';

@ApiTags('Students')
@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @ApiOperation({ summary: 'Create student' })
  @ApiResponse({ status: 201, type: StudentResponseDto })
  @UsePipes(ValidationPipe)
  @Post()
  @HttpCode(201)
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentsService.create(createStudentDto);
  }
}
