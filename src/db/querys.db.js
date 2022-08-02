const pool = require("./connection.db");

module.exports.getDatos = async function () {
  let conn;
  try {
    conn = await pool.getConnection();
  //  console.log("DB in connected")
    const rows = await conn.query('SELECT * FROM alumnos');
    return rows;
  } catch (err) {
    return Promise.reject(err);
  } finally {
    if (conn) await conn.release();
  }
};

module.exports.getInfo = async function () {
  let conn;
  try {
    conn = await pool.getConnection();
  //  console.log("DB in connected")
    const rows = await conn.query('SELECT * FROM contenedores');
    return rows;
  } catch (err) {
    return Promise.reject(err);
  } finally {
    if (conn) await conn.release();
  }
};
