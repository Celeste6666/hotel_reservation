import mysql from "mysql/promise";
import fs from "fs";

export async function query({ query, values = [] }) {
  const { env } = process;
  const dbConnection = await mysql.createConnection({
    host: env.MYSQL_HOST,
    user: env.MYSQL_USER,
    database: env.MYSQL_DATABASE,
    password: env.MYSQL_PASSWORD,
  });

  try {
    const [rows, fields] = await connection.execute(query, values);
    dbConnection.end();
    return rows;
  } catch (error) {
    throw Error(error.message);
    return { error };
  }
}
