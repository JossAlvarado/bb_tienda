const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

// Rutas
router.get('/acceso-usuarios',usuariosController.getAllListaUsuarios);
router.get('/acceso-usuarios/:id',usuariosController.getListaUsuariosById);
router.delete('/acceso-usuarios/:id',usuariosController.deleteListaUsuariosById);
router.put('/acceso-usuarios/:id',usuariosController.updateListaUsuariosById);
router.post('/acceso-usuarios',usuariosController.createdListaUsuarios);


module.exports = router;
