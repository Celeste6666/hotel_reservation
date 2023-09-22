import mysql from "mysql2/promise"; // 注意這裡使用了 promise 版本的 mysql2

const { env } = process;
const dbConnection = await mysql.createPool({
  host: env.MYSQL_HOST,
  user: env.MYSQL_USER,
  database: env.MYSQL_DATABASE,
  password: env.MYSQL_PASSWORD,
  port: env.MYSQL_PORT,
});

export async function query(query, values = []) {
  try {
    const [rows, fields] = await dbConnection.query(query, values);
    return rows;
  } catch (error) {
    throw error; // 將錯誤拋出以便更好地處理
  }
}
