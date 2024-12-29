import { ApiProperty } from "@nestjs/swagger";
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ContactInfo } from "./contact-info.entity";
import { OneToOne, OneToMany } from "typeorm";
import { Task } from "./task.entity";
import { Meeting } from "./meeting.entity";

/***
 * This file has examples for different kinds of relationships:
 * - OneToOne.
 * - OneToMany.
 * - ManyToOne.
 * - ManyToMany.
 * - Self-referencing relationship.
 *  */

@Entity("students")
export class Student {
  @ApiProperty({ example: "6b2e187b-38a2-42a0-95be-37af6dd9a75e" })
  @PrimaryGeneratedColumn("uuid", { name: "id" })
  id: string;

  @ApiProperty({ example: "John" })
  @Column({ type: "varchar", length: 50, name: "name", nullable: true })
  name: string;

  // A group of students can have one manager. This is a self-referencing relationship.
  @ManyToOne(() => Student, (student) => student.directReports, {
    onDelete: "SET NULL",
  })
  manager: Student;

  // A manager can have many reports. This is a self-referencing relationship.
  @OneToMany(() => Student, (student) => student.manager)
  directReports: Student[];

  // One student can have only one contact info.
  @OneToOne(() => ContactInfo, (contactInfo) => contactInfo.student)
  contactInfo: ContactInfo;

  // One student can have many tasks.
  @OneToMany(() => Task, (task) => task.student)
  tasks: Task[];

  // Any student can attend any meeting.
  @ManyToMany(() => Meeting, (meeting) => meeting.attendees)
  @JoinTable()
  meetings: Meeting[];
}
