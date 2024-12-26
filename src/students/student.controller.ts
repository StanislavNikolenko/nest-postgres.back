import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  HttpCode,
  Get,
  Param,
  Patch
} from '@nestjs/common';
import { StudentsService } from './student.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { StudentResponseDto } from './dto/student-response.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { CreateStudentDto } from './dto/create-student.dto';

@ApiTags('Students')
@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @ApiOperation({ summary: 'Create student' })
  @ApiResponse({ status: 201, type: StudentResponseDto })
  @UsePipes(ValidationPipe)
  @Post()
  @HttpCode(201)
  create(@Body() createStudentDto: CreateStudentDto): Promise<StudentResponseDto> {
    return this.studentsService.create(createStudentDto);
  }

  @ApiOperation({ summary: "Get student by id" })
  @ApiResponse({
    status: 200,
    description: "Get student by id",
    type: StudentResponseDto,
  })
  @Get(":id")
  async getById(@Param("id") id: string): Promise<StudentResponseDto> {
    return await this.studentsService.getById(id);
  }

  @ApiOperation({ summary: 'Update student data' })
  @ApiResponse({ status: 201, type: StudentResponseDto })
  @UsePipes(ValidationPipe)
  @Patch(':studentId')
  @HttpCode(201)
  update(
    @Param('studentId') id: string,
    @Body() updateUserDto: UpdateStudentDto,
  ) {
    return this.studentsService.update(id, updateUserDto);
  }
}

