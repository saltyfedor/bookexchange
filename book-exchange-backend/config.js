const dotenv = require('dotenv');
dotenv.config();

const origins = process.env.CORS_ORIGINS.split(';')

module.exports = { 
    port: process.env.PORT,
    googleClientId: process.env.GOOGLE_CLIENT_ID,
    dbUrl: process.env.DATABASE_URL,
    tokenKey: process.env.TOKEN_KEY,
    appRoot: __dirname,
    gmailLogin: process.env.GMAIL_LOGIN,
    gmailPass: process.env.GMAIL_PASSWORD,
    corsOrigins: origins
};