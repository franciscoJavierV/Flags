require('dotenv').config();

const config ={
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 3000,
  cors: process.env.CORS,
  //api
  apiUrl: process.env.API_URL,
  apiKeyToken : process.env.API_KEY_TOKEN,
}

module.exports = {config};