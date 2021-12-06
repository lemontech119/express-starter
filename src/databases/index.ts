import path from 'path';
import { Connection, getConnectionOptions, createConnection } from "typeorm";

let connection: Connection;

export const connectDB = async () => {
  const connectionOptions = await getConnectionOptions(process.env.NODE_ENV);
  connection = await createConnection({
    ...connectionOptions,
    name: 'default',
  });
  
  return connection;
};
