import { DataSource } from 'typeorm';
import { Student } from './entities/student.entity';
import { DBRepositories } from 'src/database/repositories';

export const studentProviders = [
  {
    provide: DBRepositories.STUDENT,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Student),
    inject: ['DATA_SOURCE'],
  }
];
