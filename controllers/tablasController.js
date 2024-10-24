// controllers/tablasController.js
const tablasModel = require('../models/tablasModel');

// Lista blanca de tablas permitidas
const tablasPermitidas = [
   'activos'
    ,'activos_parciales'
    ,'empresas'
    ,'test'
    ,'idiomas'
    ,'idioma_palabras'
    ,'idiomas.frases'
    ,'test'
    ,'usuarios'
    ,'usuarios_conig'
    ,'usuario_empresa'
];

const tablasController = {
    obtenerTodos: async (req, res) => {
        const { tabla } = req.params;

        if (!tablasPermitidas.includes(tabla)) {
            return res.status(400).json({ error: 'Tabla no permitida' });
        }

        try {
            const registros = await tablasModel.obtenerTodos(tabla);
            res.json(registros);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al obtener los registros' });
        }
    },  // << Add comma here

    obtenerPorId: async (req, res) => {
        const { tabla, id } = req.params;

        if (!tablasPermitidas.includes(tabla)) {
            return res.status(400).json({ error: 'Tabla no permitida' });
        }

        try {
            const registro = await tablasModel.obtenerPorId(tabla, id);
            if (!registro) {
                return res.status(404).json({ error: 'Registro no encontrado' });
            }
            res.json(registro);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al obtener el registro' });
        }
    },

    crear: async (req, res) => {
        const { tabla } = req.params;
        const datos = req.body;

        if (!tablasPermitidas.includes(tabla)) {
            return res.status(400).json({ error: 'Tabla no permitida' });
        }

        try {
            const insertId = await tablasModel.crear(tabla, datos);
            res.status(201).json({ id: insertId });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al crear el registro' });
        }
    },

    actualizar: async (req, res) => {
        const { tabla, id } = req.params;
        const datos = req.body;

        if (!tablasPermitidas.includes(tabla)) {
            return res.status(400).json({ error: 'Tabla no permitida' });
        }

        try {
            const filasAfectadas = await tablasModel.actualizar(tabla, id, datos);
            if (filasAfectadas === 0) {
                return res.status(404).json({ error: 'Registro no encontrado' });
            }
            res.json({ mensaje: 'Registro actualizado' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al actualizar el registro' });
        }
    },

    eliminar: async (req, res) => {
        const { tabla, id } = req.params;

        if (!tablasPermitidas.includes(tabla)) {
            return res.status(400).json({ error: 'Tabla no permitida' });
        }

        try {
            const filasAfectadas = await tablasModel.eliminar(tabla, id);
            if (filasAfectadas === 0) {
                return res.status(404).json({ error: 'Registro no encontrado' });
            }
            res.json({ mensaje: 'Registro eliminado' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al eliminar el registro' });
        }
    }
};

module.exports = tablasController;

