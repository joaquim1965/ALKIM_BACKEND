// config/env.js
const dotenv = require('dotenv');

dotenv.config();

const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 3000,
        db: {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            name: process.env.DB_NAME
        },
        jwtSecret: process.env.JWT_SECRET,
    },
    production: {
        port: process.env.PORT,
        db: {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            name: process.env.DB_NAME
        },
        jwtSecret: process.env.JWT_SECRET,
    }
};

module.exports = config[env];
