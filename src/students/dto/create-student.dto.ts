import { faker } from '@faker-js/faker';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateStudentDto {
  @ApiProperty({ example: faker.person.firstName() })
  @IsOptional()
  @IsString({ message: '"firstName" Must be a string value' })
  readonly name: string;
}
