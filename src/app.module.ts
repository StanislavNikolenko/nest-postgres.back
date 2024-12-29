import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { StudentsModule } from "./students/student.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Student } from "./students/entities/student.entity";
import { ContactInfo } from "./students/entities/contact-info.entity";
import { Task } from "./students/entities/task.entity";
import { Meeting } from "./students/entities/meeting.entity";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `./config/.${process.env.NODE_ENV}.env`,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: "postgres",
        host: process.env.DB_HOST,
        port: +process.env.DB_PORT,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [Student, ContactInfo, Task, Meeting],
        // The synchronize should be always false in production.
        synchronize: process.env.NODE_ENV === "local",
      }),
    }),
    StudentsModule,
  ],
})
export class AppModule {}
