
const dateTaskForm = document.getElementById("date-task-form");
const dateInput = document.getElementById("date");
const taskNameInput = document.getElementById("date-task-name");
const taskTypeSelect = document.getElementById("date-task-type");

// Variables de las listas de tareas por tipo
const pendientesList = document.getElementById("pendientes-list");
const asignadasList = document.getElementById("asignadas-list");
const creadasList = document.getElementById("creadas-list");

// Variable para almacenar las tareas y editar la tarea seleccionada
let tareas = [];
let tareaEditada = null;

// Función para obtener todas las tareas desde el backend
async function obtenerTareas() {
    try {
        const response = await fetch('http://localhost:3000/tareas');
        const data = await response.json();
        tareas = data;
        renderizarTareas();
    } catch (err) {
        console.error('Error al obtener tareas:', err);
    }
}

// Función para manejar la asignación de tareas
dateTaskForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const fecha = dateInput.value;
    const nombre = taskNameInput.value;
    const tipo = taskTypeSelect.value;

    if (tareaEditada) {
        // Si estamos editando una tarea existente
        await editarTarea(tareaEditada._id, { fecha, nombre, tipo });
        tareaEditada = null;
    } else {
        // Crear nueva tarea
        await crearTarea({ fecha, nombre, tipo });
    }

    // Limpiar el formulario
    dateTaskForm.reset();

    // Obtener las tareas actualizadas desde la base de datos
    obtenerTareas();
});

// Función para crear una nueva tarea en la base de datos
async function crearTarea(tarea) {
    try {
        const response = await fetch('http://localhost:3000/tareas', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(tarea)
        });
        const nuevaTarea = await response.json();
        tareas.push(nuevaTarea);
    } catch (err) {
        console.error('Error al agregar tarea:', err);
    }
}

// Función para editar una tarea en la base de datos
async function editarTarea(id, tarea) {
    try {
        const response = await fetch(`http://localhost:3000/tareas/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(tarea)
        });
        const tareaEditada = await response.json();
        const index = tareas.findIndex(t => t._id === id);
        if (index !== -1) {
            tareas[index] = tareaEditada;
        }
    } catch (err) {
        console.error('Error al editar tarea:', err);
    }
}

// Función para eliminar una tarea de la base de datos
async function eliminarTarea(id) {
    try {
        await fetch(`http://localhost:3000/tareas/${id}`, { method: 'DELETE' });
        tareas = tareas.filter(t => t._id !== id);
        renderizarTareas();
    } catch (err) {
        console.error('Error al eliminar tarea:', err);
    }
}

// Función para renderizar las tareas en las listas
function renderizarTareas() {
    pendientesList.innerHTML = '';
    asignadasList.innerHTML = '';
    creadasList.innerHTML = '';

    tareas.forEach(tarea => {
        const tareaElemento = document.createElement('li');
        tareaElemento.textContent = `${tarea.nombre} - ${tarea.fecha}`;

        const botonEditar = document.createElement('button');
        botonEditar.textContent = 'Editar';
        botonEditar.addEventListener('click', () => editarTareaFormulario(tarea));

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.addEventListener('click', () => eliminarTarea(tarea._id));

        tareaElemento.appendChild(botonEditar);
        tareaElemento.appendChild(botonEliminar);

        if (tarea.tipo === 'pendiente') {
            pendientesList.appendChild(tareaElemento);
        } else if (tarea.tipo === 'asignada') {
            asignadasList.appendChild(tareaElemento);
        } else if (tarea.tipo === 'creada') {
            creadasList.appendChild(tareaElemento);
        }
    });
}

// Función para llenar el formulario con la tarea a editar
function editarTareaFormulario(tarea) {
    dateInput.value = tarea.fecha;
    taskNameInput.value = tarea.nombre;
    taskTypeSelect.value = tarea.tipo;
    tareaEditada = tarea;
}

// Inicializar la aplicación obteniendo las tareas
obtenerTareas();
                
{
// Obtener referencias a los elementos
// Variables de referencia del formulario
const dateTaskForm = document.getElementById("date-task-form");
const dateInput = document.getElementById("date");
const taskNameInput = document.getElementById("date-task-name");
const taskTypeSelect = document.getElementById("date-task-type");

// Variables de las listas de tareas por tipo
const pendientesList = document.getElementById("pendientes-list");
const asignadasList = document.getElementById("asignadas-list");
const creadasList = document.getElementById("creadas-list");

// Variable para almacenar las tareas y editar la tarea seleccionada
let tareas = [];
let tareaEditada = null;

// Función para manejar la asignación de tareas
dateTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const fecha = dateInput.value;
    const nombre = taskNameInput.value;
    const tipo = taskTypeSelect.value;

    if (tareaEditada) {
        // Si estamos editando una tarea existente
        tareaEditada.fecha = fecha;
        tareaEditada.nombre = nombre;
        tareaEditada.tipo = tipo;
        tareaEditada = null;
    } else {
        // Crear nueva tarea
        const nuevaTarea = { fecha, nombre, tipo };
        tareas.push(nuevaTarea);
    }

    // Limpiar el formulario
    dateTaskForm.reset();

    // Actualizar la vista de las tareas
    renderizarTareas();
});

// Función para renderizar las tareas en las listas
function renderizarTareas() {
    // Limpiar las listas de tareas
    pendientesList.innerHTML = '';
    asignadasList.innerHTML = '';
    creadasList.innerHTML = '';

   // Dividir las tareas por tipo
   tareas.forEach(tarea => {
        const tareaElemento = document.createElement('li');
        tareaElemento.textContent = `${tarea.nombre} - ${tarea.fecha}`;

        // Crear botones para editar y eliminar
        const botonEditar = document.createElement('button');
        botonEditar.textContent = 'Editar';
        botonEditar.addEventListener('click', () => editarTarea(tarea));

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.addEventListener('click', () => eliminarTarea(tarea));

        tareaElemento.appendChild(botonEditar);
        tareaElemento.appendChild(botonEliminar);

        // Dependiendo del tipo de tarea, agregarla a la lista correspondiente
        if (tarea.tipo === 'pendiente') {
            pendientesList.appendChild(tareaElemento);
        } else if (tarea.tipo === 'asignada') {
            asignadasList.appendChild(tareaElemento);
        } else if (tarea.tipo === 'creada') {
            creadasList.appendChild(tareaElemento);
        }
    });
}

// Función para editar una tarea
function editarTarea(tarea) {
    // Llenar el formulario con la tarea a editar
    dateInput.value = tarea.fecha;
    taskNameInput.value = tarea.nombre;
    taskTypeSelect.value = tarea.tipo;

    // Establecer tarea a editar
    tareaEditada = tarea;
}

// Función para eliminar una tarea
function eliminarTarea(tarea) {
    tareas = tareas.filter(t => t !== tarea);
    renderizarTareas();
}}





