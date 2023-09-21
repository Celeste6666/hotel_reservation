import mysql from "mysql2/promise";

const { env } = process;

export async function query(query, values = []) {
  const dbConnection = await mysql.createPool({
    host: env.MYSQL_HOST,
    user: env.MYSQL_USER,
    database: env.MYSQL_DATABASE,
    password: env.MYSQL_PASSWORD,
    // port: env.MYSQL_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
  });

  try {
    const [rows] = await dbConnection.query(query, values);
    return rows;
  } catch (error) {
    throw Error(error.message);
  }
}
