require('dotenv').config(); // Carrega variáveis do .env
const express = require('express');
const app = express();

// Middleware para interpretar JSON
app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
  res.send('V.I.D.A Backend Rodando 🚀');
});

module.exports = app;