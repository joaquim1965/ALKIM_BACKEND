// routes/tablasRoute.js
const express = require('express');
const router = express.Router();
const tablasController = require('../controllers/tablasController');

// Rutas CRUD para tablas
router.get('/:tabla', tablasController.obtenerTodos); // Dependiendo de cómo desees estructurar
router.get('/:tabla/:id', tablasController.obtenerPorId);
router.post('/:tabla', tablasController.crear);
router.put('/:tabla/:id', tablasController.actualizar);
router.delete('/:tabla/:id', tablasController.eliminar);

module.exports = router;
