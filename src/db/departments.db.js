const pool = require("./connection.db");

// module.exports.getDatos = async function () {
//   let conn;
//   try {
//     conn = await pool.getConnection();
//     const rows = await conn.query('SELECT * FROM alumnos');
//     return rows;
//   } catch (err) {
//     return Promise.reject(err);
//   } finally {
//     if (conn) await conn.release();
//   }
// };


module.exports.getDatos = function () {
  let conn;
  try {
    conn = pool.getConnection();
    //const rows = conn.query('SELECT * FROM alumnos');
    return {
      "squadName": "Super hero squad",
      "homeTown": "Metro City",
      "formed": 2016,
      "secretBase": "Super tower"
    }
  } catch (err) {
    return Promise.reject(err);
  } finally {
    if (conn) conn.release();
  }
};