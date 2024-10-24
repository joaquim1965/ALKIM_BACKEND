
// Importa el paquete mysql para conectar con MySQL y dotenv para las variables de entorno
const mysql = require('mysql2');
require('dotenv').config({ path: '../.env' });


// Crea la conexión con la base de datos utilizando las variables de entorno
const db = mysql.createConnection({
    host: process.env.DB_HOST,     // Host de la base de datos
    user: process.env.DB_USER,     // Usuario de la base de datos
    password: process.env.DB_PASSWORD, // Contraseña del usuario
    database: process.env.DB_NAME, // Nombre de la base de datos
});

// Establece la conexión con la base de datos y muestra un mensaje de éxito o error
db.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
    } else {
        console.log('Conexión a la base de datos MySQL establecida.');
    }
});

// Exporta la conexión para que pueda ser usada en otros archivos
module.exports = db;
// config/db.js

// Importa el paquete mysql para conectar con MySQL
const mysql = require('mysql2');

// Verifica que las variables de entorno se han cargado correctamente
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_NAME:', process.env.DB_NAME);

// Crea la conexión con la base de datos utilizando las variables de entorno
const db = mysql.createConnection({
    host: process.env.DB_HOST,         // Host de la base de datos
    user: process.env.DB_USER,         // Usuario de la base de datos
    password: process.env.DB_PASSWORD, // Contraseña del usuario
    database: process.env.DB_NAME,     // Nombre de la base de datos
});

// Establece la conexión con la base de datos y muestra un mensaje de éxito o error
db.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
    } else {
        console.log('Conexión a la base de datos MySQL establecida.');
    }
});


// Exporta la conexión para que pueda ser usada en otros archivos
module.exports = db;

