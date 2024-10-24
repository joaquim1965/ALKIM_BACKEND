 //middlewares/errorHandler.js

 // Errores 404 (Ruta no encontrada)
const handle404 = (req, res, next) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
};

// Errores generales del servidor
const handleError = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Error del servidor' });
};

module.exports = {
    handle404,
    handleError
};
