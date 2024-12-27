import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Student } from "./student.entity";

@Entity("contact-info")
export class ContactInfo {
  @ApiProperty({ example: "6b2e187b-38a2-42a0-95be-37af6dd9a75e" })
  @PrimaryGeneratedColumn("uuid", { name: "id" })
  id: string;

  @ApiProperty()
  @Column({ name: "phone", nullable: true })
  phone: string;

  @ApiProperty()
  @Column({ name: "email"})
  email: string;

  @OneToOne(() => Student, (student) => student.contactInfo, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  student: Student;
}
