const app = require('./app');
const connectDB = require('./config/database');
const PORT = process.env.PORT || 5000;

// Conecta no MongoDB
connectDB();

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
