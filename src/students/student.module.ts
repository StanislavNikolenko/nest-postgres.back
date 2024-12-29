import { Module } from "@nestjs/common";
import { StudentsService } from "./student.service";
import { StudentsController } from "./student.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Student } from "./entities/student.entity";
import { ContactInfo } from "./entities/contact-info.entity";
import { Task } from "./entities/task.entity";
import { Meeting } from "./entities/meeting.entity";

@Module({
  // Specify entities to be able to inject them in the service.
  imports: [TypeOrmModule.forFeature([Student, ContactInfo, Task, Meeting])],
  controllers: [StudentsController],
  providers: [StudentsService],
  // Specify services you want to use in other modules.
  exports: [StudentsService],
})
export class StudentsModule {}
