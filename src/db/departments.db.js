const pool = require("./connection.db");
const TABLE='departments'

/**
 * Retorna todos los departamentos
 * @returns 
 */
module.exports.getDatos = async function () {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query(`SELECT * FROM alumnos`);
    return rows;
  } catch (err) {
    return Promise.reject(err);
  } finally {
    if (conn) await conn.release();
  }
};
