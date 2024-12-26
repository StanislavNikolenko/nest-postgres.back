// import { DataSource } from 'typeorm';

// export const databaseProviders = [
//   {
//     provide: 'DATA_SOURCE',
//     useFactory: async () => {
//       const dataSource = new DataSource({
//         type: 'postgres',
//         host: process.env.POSTGRES_HOST,
//         port: Number(process.env.POSTGRES_PORT),
//         username: process.env.POSTGRES_USERNAME,
//         password: process.env.POSTGRES_PASSWORD,
//         database: process.env.POSTGRES_DB_NAME,
//         entities: [__dirname + '/../**/*.entity{.ts,.js}'],
//         synchronize: false,
//         logging: process.env.NODE_ENV === 'local' ? true : false,
//         ssl: false
//       });
//       return dataSource.initialize();
//     },
//   },
// ];
