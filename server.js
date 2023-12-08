const express = require('express');
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();
const cors = require('cors'); // Importa el paquete cors

const usuariosRoutes = require('./src/routes/usuariosRoute.js');


const empleadosRoutes = require('./src/routes/empleadosRoute.js');

const tenisRoutes = require('./src/routes/tenisRoute.js');


const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


app.use(cors());


app.use(usuariosRoutes);

app.use(empleadosRoutes);

app.use(tenisRoutes);


app.get('/', (req, res) => {
  res.send('¡Conexión exitosa al backend!');
});
// Antes de la configuración del enrutador


app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
