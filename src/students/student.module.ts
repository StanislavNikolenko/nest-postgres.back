import { Module } from '@nestjs/common';
import { StudentsService } from './student.service';
import { StudentsController } from './student.controller';
import { DatabaseModule } from 'src/database/database.module';
import { studentProviders } from './student.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [StudentsController],
  providers: [StudentsService, ...studentProviders],
  exports: [StudentsService],
})
export class StudentsModule {}
