const express = require('express');
const router = express.Router();

// Importar las rutas
const tablasRoute = require('./tablasRoute');

// Asignar las rutas con sus respectivos prefijos
router.use('/tables', tablasRoute);


module.exports = router;
