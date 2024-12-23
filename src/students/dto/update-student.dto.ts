import { PartialType } from '@nestjs/swagger';
import { CreateStudentDto } from './create-student.dto';
import { IsBoolean, IsInt, IsOptional } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateStudentDto) {
  @IsOptional()
  @IsBoolean()
  readonly isTestCompleted?: boolean;

  @IsOptional()
  @IsInt()
  readonly spikesAge?: number;
}
