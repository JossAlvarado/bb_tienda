const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Obtener todos los empelados
async function getAllEmpleados(req, res) {
  try {
    const empleadoBaby = await prisma.empleadoBaby.findMany();
    res.json(empleadoBaby);
  } catch (error) {
    console.error('Error al obtener empleado:', error);
    res.status(500).json({ error: 'Ocurrió un error al obtener empleado' });
  }
}

// Obtener un empleado por ID
async function getEmpleadoById(req, res) {
  const { id } = req.params;
  try {
    const empleadoBaby = await prisma.empleadoBaby.findUnique({
      where: { id: parseInt(id) },
    });
    if (empleadoBaby) {
      res.json(empleadoBaby);
    } else {
      res.status(404).json({ error: 'Empleado no fue encontrada' });
    }
  } catch (error) {
    console.error('Error al obtener Empleado por ID:', error);
    res.status(500).json({ error: 'Ocurrió un error al obtener Empleado' });
  }
}

// Eliminar un empelado por ID
async function deleteEmpleadoById(req, res) {
  const { id } = req.params;
  try {
    const deletedEmpleado = await prisma.empleadoBaby.delete({
      where: { id: parseInt(id) },
    });
    res.json(deletedEmpleado);
  } catch (error) {
    console.error('Error al eliminar empleado:', error);
    res.status(500).json({ error: 'Ocurrió un error al eliminar empleado' });
  }
}

// Actualizar un empleado por ID
async function updateEmpleadoById(req, res) {
  const { id } = req.params;
  const updatedData = req.body; 
  try {
    const updatedEmpleado = await prisma.empleadoBaby.update({
      where: { id: parseInt(id) },
      data: updatedData,
    });
    res.json(updatedEmpleado);
  } catch (error) {
    console.error('Error al actualizar empleado:', error);
    res.status(500).json({ error: 'Ocurrió un error al actualizar empleado' });
  }
}

// Crear un empleado
async function createEmpleado(req, res) {
  const newData = req.body; 
  try {
    const createdEmpleado = await prisma.empleadoBaby.create({
      data: newData,
    });
    res.status(201).json(createdEmpleado); 
  } catch (error) {
    console.error('Error al crear empleado:', error);
    res.status(500).json({ error: 'Ocurrió un error al crear empleado' });
  }
}

module.exports = {
  getAllEmpleados,
  getEmpleadoById,
  deleteEmpleadoById,
  updateEmpleadoById,
  createEmpleado
};
