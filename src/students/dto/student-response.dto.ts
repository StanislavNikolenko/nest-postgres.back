import { ApiProperty } from '@nestjs/swagger';
import { Student } from '../entities/student.entity';

export class StudentResponseDto {
  @ApiProperty({ example: '6b2e187b-38a2-42a0-95be-37af6dd9a75e' })
  id: Student['id'];

  @ApiProperty({ example: 'John' })
  readonly name: Student['name'];
}
