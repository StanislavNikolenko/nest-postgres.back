import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ContactInfo } from "./contact-info.entity";
import { OneToOne, OneToMany } from "typeorm";
import { Task } from "./task.entity";
import { Meeting } from "./meeting.entity";

@Entity("students")
export class Student {
  @ApiProperty({ example: "6b2e187b-38a2-42a0-95be-37af6dd9a75e" })
  @PrimaryGeneratedColumn("uuid", { name: "id" })
  id: string;

  @ApiProperty({ example: "John" })
  @Column({ type: "varchar", length: 50, name: "name", nullable: true })
  name: string;

  @ManyToOne(() => Student, (student) => student.directReports, {onDelete: "SET NULL"})
  manager: Student

  @OneToMany(() => Student, (student) => student.manager)
  directReports: Student[]

  @OneToOne(() => ContactInfo, (contactInfo) => contactInfo.student)
  contactInfo: ContactInfo;

  @OneToMany(() => Task, (task) => task.student)
  tasks: Task[];

  @ManyToMany(() => Meeting, (meeting) => meeting.attendees)
  @JoinTable()
  meetings: Meeting[]
}
