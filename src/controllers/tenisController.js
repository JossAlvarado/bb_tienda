const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Obtener tenis
async function getAllTenis(req, res) {
  try {
    const tiendaTenis = await prisma.tiendaTenis.findMany();
    res.json(tiendaTenis);
  } catch (error) {
    console.error('Error al obtener Tenis:', error);
    res.status(500).json({ error: 'Ocurrió un error al obtener Tenis' });
  }
}

async function createTenis(req, res) {
  const newData = req.body; 
  try {
    const createdTenis = await prisma.tiendaTenis.create({
      data: newData,
    });
    res.status(201).json(createdTenis); 
  } catch (error) {
    console.error('Error al crear tenis:', error);
    
    res.status(500).json({ error: 'Ocurrió un error al crear tenis' });
  }
}

// Obtener tenis por ID
async function getTenisById(req, res) {
  const { id } = req.params;
  try {
    const tiendaTenis = await prisma.tiendaTenis.findUnique({
      where: { id: parseInt(id) },
    });
    if (tiendaTenis) {
      res.json(tiendaTenis);
    } else {
      res.status(404).json({ error: 'tenis no fue encontrada' });
    }
  } catch (error) {
    console.error('Error al obtener tenis por ID:', error);
    res.status(500).json({ error: 'Ocurrió un error al obtener tenis' });
  }
}
// Eliminar tenis por ID
async function deleteTenisById(req, res) {
  const { id } = req.params;
  try {
    const deletedTenis = await prisma.tiendaTenis.delete({
      where: { id: parseInt(id) },
    });
    res.json(deletedTenis);
  } catch (error) {
    console.error('Error al eliminar tenis:', error);
    res.status(500).json({ error: 'Ocurrió un error al eliminar tenis' });
  }
}
// Actualizar tenis por ID
async function updateTenisById(req, res) {
  const { id } = req.params;
  const updatedData = req.body; 
  try {
    const updatedTenis = await prisma.tiendaTenis.update({
      where: { id: parseInt(id) },
      data: updatedData,
    });
    res.json(updatedTenis);
  } catch (error) {
    console.error('Error al actualizar tenis:', error);
    res.status(500).json({ error: 'Ocurrió un error al actualizar tenis' });
  }
}

module.exports = {
  getAllTenis,
  getTenisById,
  deleteTenisById,
  updateTenisById,
  createTenis
};
