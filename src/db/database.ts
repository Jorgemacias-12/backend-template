import { createConnection, Connection } from "mysql2/promise";

let connection: Connection | null = null;

export const connectToDatabase = async (databaseName: string) => {
  const DatabaseConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    databaseName: databaseName,
  };

  try {
    if (!connection) {
      connection = await createConnection(DatabaseConfig);
    }

    return connection;
  }
  catch(ex: any) {
    console.error(ex);
  }
}

export const closeDatabaseConnection = async () => {
  if (connection) {
    await connection.end();

    connection = null;
  }
}