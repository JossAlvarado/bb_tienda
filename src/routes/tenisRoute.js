const express = require('express');
const router = express.Router();
const tenisController = require('../controllers/tenisController');

// Rutas
router.get('/tienda-tenis', tenisController.getAllTenis);
router.get('/tienda-tenis/:id', tenisController.getTenisById);
router.delete('/tienda-tenis/:id', tenisController.deleteTenisById);
router.put('/tienda-tenis/:id', tenisController.updateTenisById);
router.post('/tienda-tenis', tenisController.createTenis);

module.exports = router;
