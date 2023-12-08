const express = require('express');
const router = express.Router();
const EmpleadoController = require('../controllers/empleadosController');

// Rutas
router.get('/empleado', EmpleadoController.getAllEmpleados);
router.get('/empleado/:id',EmpleadoController.getEmpleadoById);
router.delete('/empleado/:id', EmpleadoController.deleteEmpleadoById);
router.put('/empleado/:id',EmpleadoController.updateEmpleadoById);
router.post('/empleado',EmpleadoController.createEmpleado);

module.exports = router;
