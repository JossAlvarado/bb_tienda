const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Obtener todos los usuarios
async function getAllListaUsuarios(req, res) {
  try {
    const listaUsuarios = await prisma.listaUsuarios.findMany();
    res.json(listaUsuarios);
  } catch (error) {
    console.error('Error al obtener Usuarios:', error);
    res.status(500).json({ error: 'Ocurrió un error al obtener Usuario' });
  }
}

// Obtener un usuario por ID
async function getListaUsuariosById(req, res) {
  const { id } = req.params;
  try {
    const listaUsuarios = await prisma.listaUsuarios.findUnique({
      where: { id: parseInt(id) },
    });
    if (listaUsuarios) {
      res.json(listaUsuarios);
    } else {
      res.status(404).json({ error: 'El Usuario no fue encontrado' });
    }
  } catch (error) {
    console.error('Error al obtener el Usuario por ID:', error);
    res.status(500).json({ error: 'Ocurrió un error al obtener el Usuario' });
  }
}

// Eliminar un usuario por ID
async function deleteListaUsuariosById(req, res) {
  const { id } = req.params;
  try {
    const deletedlistaUsuarios = await prisma.listaUsuarios.delete({
      where: { id: parseInt(id) },
    });
    res.json(deletedlistaUsuarios);
  } catch (error) {
    console.error('Error al eliminar el Usuario:', error);
    res.status(500).json({ error: 'Ocurrió un error al eliminar el Usuario' });
  }
}

// Actualizar un usuario por ID
async function updateListaUsuariosById(req, res) {
  const { id } = req.params;
  const updatedData = req.body; 
  try {
    const updatedlistaUsuarios = await prisma.listaUsuarios.update({
      where: { id: parseInt(id) },
      data: updatedData,
    });
    res.json(updatedlistaUsuarios);
  } catch (error) {
    console.error('Error al actualizar el Usuario:', error);
    res.status(500).json({ error: 'Ocurrió un error al actualizar el Usuario' });
  }
}

async function createdListaUsuarios(req, res) {
  const newData = req.body;
  try {
    const createdlistaUsuarios = await prisma.listaUsuarios.create({
      data: newData,
    });
    res.status(201).json(createdlistaUsuarios);
  } catch (error) {
    console.error('Error al crear el Usuario:', error);
    res.status(500).json({ error: 'Ocurrió un error al crear el Usuario' });
  }
}

module.exports = {
  getAllListaUsuarios,
  getListaUsuariosById,
  deleteListaUsuariosById,
  updateListaUsuariosById,
  createdListaUsuarios
};