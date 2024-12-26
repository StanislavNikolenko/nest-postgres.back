import { PartialType } from '@nestjs/swagger';
import { CreateStudentDto } from './create-student.dto';
import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { faker } from '@faker-js/faker';

export class UpdateStudentDto extends PartialType(CreateStudentDto) {
  @ApiProperty({ example: faker.person.firstName() })
  @IsOptional()
  @IsString({ message: '"name" Must be a string value' })
  readonly name: string;
}