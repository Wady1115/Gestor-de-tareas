const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Configurar el servidor
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Conectar a la base de datos MongoDB
mongoose.connect('mongodb+srv://wad:wwady2004@cluster0.2ss6z.mongodb.net/tareas?retryWrites=true&w=majority&appName=Cluster0', )
  .then(() => console.log("Conexión a MongoDB exitosa"))
  .catch(err => console.error("Error de conexión:", err));

// Definir el modelo de tarea
const tareaSchema = new mongoose.Schema({
  fecha: String,
  nombre: String,
  tipo: String
});

const Tarea = mongoose.model('Tarea', tareaSchema);

// Ruta para obtener todas las tareas
app.get('/tareas', async (req, res) => {
  try {
    const tareas = await Tarea.find();
    res.json(tareas);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener tareas' });
  }
});

// Ruta para crear una nueva tarea
app.post('/tareas', async (req, res) => {
  const { fecha, nombre, tipo } = req.body;
  try {
    const nuevaTarea = new Tarea({ fecha, nombre, tipo });
    await nuevaTarea.save();
    res.status(201).json(nuevaTarea);
  } catch (err) {
    res.status(500).json({ message: 'Error al agregar tarea' });
  }
});

// Ruta para editar una tarea
app.put('/tareas/:id', async (req, res) => {
  const { id } = req.params;
  const { fecha, nombre, tipo } = req.body;
  try {
    const tareaEditada = await Tarea.findByIdAndUpdate(id, { fecha, nombre, tipo }, { new: true });
    res.json(tareaEditada);
  } catch (err) {
    res.status(500).json({ message: 'Error al editar tarea' });
  }
});

// Ruta para eliminar una tarea
app.delete('/tareas/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Tarea.findByIdAndDelete(id);
    res.json({ message: 'Tarea eliminada' });
  } catch (err) {
    res.status(500).json({ message: 'Error al eliminar tarea' });
  }
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});

