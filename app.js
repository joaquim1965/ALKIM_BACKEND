//pp.js
const express = require('express'); // Importar express
const rutas = require('./routes'); // Importar las rutas centralizadas
// El control de errores tiene que ser el último middleware
const { handle404, handleError } = require('./middlewares/errorHandler'); // Importar los manejadores de error
const env = require('./config/env'); // Importar la configuración del entorno
const db = require('./config/db'); // Importar el módulo de la base de datos

// Inicializar la aplicación Express
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Usar las rutas centralizadas directamente en la raíz
app.use('/', rutas);

// Manejo de rutas no encontradas (404)
app.use(handle404);

// Manejo de errores generales (500)
app.use(handleError);

// Levantar el servidor
const PORT = env.port;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT} en modo ${process.env.NODE_ENV}`);
    console.log(`http://localhost:${PORT.trim()}/tables/test`);
});

// Comprobar la conexión a la base de datos
db.query('SELECT 1')
   .then(() => console.log('Conectado a la base de datos'))
   .catch(err => console.error('Error al conectar a la base de datos', err));
