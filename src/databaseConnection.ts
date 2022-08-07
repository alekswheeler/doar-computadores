import { DataSource } from 'typeorm';
import { User } from './modules/donation/entities/User';

const appDataSource = new DataSource({
  type: "postgres",
  url: `${process.env.DATABASE_URL}`,
  ssl: {
    rejectUnauthorized: false,
  },
  entities: ["bin/src/modules/donation/entities/*.js"],
});

export { appDataSource }