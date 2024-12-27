import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ContactInfo } from "./contact-info.entity";
import { OneToOne, OneToMany } from "typeorm";
import { Task } from "./task.entity";
import { Student } from "./student.entity";

@Entity("meetings")
export class Meeting {
  @ApiProperty({ example: "6b2e187b-38a2-42a0-95be-37af6dd9a75e" })
  @PrimaryGeneratedColumn("uuid", { name: "id" })
  id: string;

  @Column()
  zoomUrl: string;

  @ManyToMany(() => Student, (student) => student.meetings, {onDelete: "SET NULL"})
  attendees: Student[]
}
