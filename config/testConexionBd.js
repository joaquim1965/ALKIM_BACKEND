const db = require('./db'); // Asegúrate de que apunte a tu archivo db.js

// Ejecutar una consulta simple para verificar la conexión
console.log('Iniciando la consulta a la base de datos...');
db.query('SELECT 1 + 1 AS solution', (err, results) => {
    if (err) {
        console.error('Error en la consulta:', err);
        db.end();  // Asegúrate de cerrar la conexión incluso si hay error
    } else {
        console.log('Resultado de la consulta:', results[0].solution); // Debería mostrar '2'
        
        // Cerrar la conexión después de procesar la consulta
        db.end((endErr) => {
            if (endErr) {
                console.error('Error al cerrar la conexión:', endErr);
            } else {
                console.log('Conexión cerrada correctamente');
            }
        });
    }
});