import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ManyToOne } from "typeorm";
import { Student } from "./student.entity";

@Entity("tasks")
export class Task {
  @ApiProperty({ example: "6b2e187b-38a2-42a0-95be-37af6dd9a75e" })
  @PrimaryGeneratedColumn("uuid", { name: "id" })
  id: string;

  @ApiProperty({ example: "John" })
  @Column({ type: "varchar", length: 50, name: "name", nullable: true })
  name: string;

  @ManyToOne(() => Student, (student) => student.tasks, {
    onDelete: "SET NULL",
  })
  student: Student;
}
