// models/tablasModel.js
// models/tablasModel.js
const db = require('../config/db');

const tablasModel = {
    obtenerTodos: async (tabla) => {
        const query = `SELECT * FROM ??`;
        const [rows] = await db.query(query, [tabla]);  // Removed .promise()
        return rows;
    },

    obtenerPorId: async (tabla, id) => {
        const query = `SELECT * FROM ?? WHERE id = ?`;
        const [rows] = await db.query(query, [tabla, id]);  // Removed .promise()
        return rows[0];
    },

    crear: async (tabla, datos) => {
        const query = `INSERT INTO ?? SET ?`;
        const [result] = await db.query(query, [tabla, datos]);  // Removed .promise()
        return result.insertId;
    },

    actualizar: async (tabla, id, datos) => {
        const query = `UPDATE ?? SET ? WHERE id = ?`;
        const [result] = await db.query(query, [tabla, datos, id]);  // Removed .promise()
        return result.affectedRows;
    },

    eliminar: async (tabla, id) => {
        const query = `DELETE FROM ?? WHERE id = ?`;
        const [result] = await db.query(query, [tabla, id]);  // Removed .promise()
        return result.affectedRows;
    }
};

module.exports = tablasModel;
