import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  HttpCode,
  Get,
  Param,
  Patch,
  Delete,
} from "@nestjs/common";
import { StudentsService } from "./student.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { StudentResponseDto } from "./dto/student-response.dto";
import { UpdateStudentDto } from "./dto/update-student.dto";
import { CreateStudentDto } from "./dto/create-student.dto";

/***
 * This controller has examples for CRUD operations:
 * - CREATE - create a new student entity.
 * - READ   - get student entity by id.
 * - UPDATE - update student entity.
 * - DELETE - delete student entity.
 * ***/

@ApiTags("Students")
@Controller("students")
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  // Create.
  @ApiOperation({ summary: "Create student" })
  @ApiResponse({ status: 201, type: StudentResponseDto })
  @UsePipes(ValidationPipe)
  @Post()
  @HttpCode(201)
  create(
    @Body() createStudentDto: CreateStudentDto,
  ): Promise<StudentResponseDto> {
    return this.studentsService.create(createStudentDto);
  }

  // Read.
  @ApiOperation({ summary: "Get student by id" })
  @ApiResponse({
    status: 200,
    description: "Get student by id",
    type: StudentResponseDto,
  })
  @Get(":id")
  async getById(@Param("id") id: string): Promise<StudentResponseDto> {
    return this.studentsService.getById(id);
  }

  // Update.
  @ApiOperation({ summary: "Update student data" })
  @ApiResponse({ status: 201, type: StudentResponseDto })
  @UsePipes(ValidationPipe)
  @Patch(":studentId")
  @HttpCode(201)
  update(
    @Param("studentId") id: string,
    @Body() updateUserDto: UpdateStudentDto,
  ) {
    return this.studentsService.update(id, updateUserDto);
  }

  // Delete.
  @ApiOperation({ summary: "Delete a student" })
  @ApiResponse({ status: 201, type: StudentResponseDto })
  @Delete(":studentId")
  @HttpCode(201)
  remove(@Param("studentId") id: string) {
    return this.studentsService.remove(id);
  }
}
