# Gestión de Tareas del Hogar

## Descripción

La aplicación **Gestión de Tareas del Hogar** permite gestionar las tareas domésticas de forma sencilla, permitiendo a los usuarios agregar, editar y eliminar tareas asignadas a fechas específicas. Las tareas se clasifican en tres categorías: **Pendientes**, **Asignadas** y **Registradas**, y se pueden visualizar fácilmente en listas organizadas. Esta aplicación utiliza una interfaz de usuario en HTML con funcionalidad JavaScript, junto con un servidor Express que se conecta a una base de datos MongoDB para almacenar y gestionar las tareas.

## Tecnologías Utilizadas

- **Frontend:**
  - HTML
  - JavaScript
  - CSS (si se aplica)

- **Backend:**
  - Node.js
  - Express
  - MongoDB
  - Mongoose

## Requisitos

Para ejecutar este proyecto, necesitas tener las siguientes herramientas instaladas:

- [Node.js](https://nodejs.org/)
- [MongoDB Atlas](mongodb+srv://wad:wwady2004@cluster0.2ss6z.mongodb.net/tareas?retryWrites=true&w=majority&appName=Cluster0).

## Instalación

### 1. Clonar el repositorio

Primero, clona este repositorio en tu máquina local:

```bash
git clone https://github.com/wady1115/gestion-tareas-hogar.git
cd gestion-tareas-hogar

## Instalar dependencias del backend 
En el directorio del proyecto, instala las dependencias de Node.js:

cd backend
npm install

## Configurar MongoDB
Asegúrate de tener una base de datos MongoDB disponible. Si estás usando MongoDB Atlas, configura tu URI de conexión en el archivo server.js. El valor por defecto es:
mongoose.connect('mongodb+srv://wad:wwady2004@cluster0.2ss6z.mongodb.net/tareas?retryWrites=true&w=majority&appName=Cluster0');

## Ejecutar el servidor backend
Ejecuta el servidor backend con el siguiente comando:
node server.js
El servidor backend debería estar corriendo en http://localhost:3000.



## Configuración del Frontend
Puedes abrir el archivo "Task Manager.html" directamente en tu navegador para interactuar con la interfaz de usuario.

## Ejemplo de Uso

## Agregar tarea:
Selecciona una fecha.
Ingresa el nombre de la tarea.
Selecciona el tipo de tarea ( Pendiente, Asignada o Registrada).
Haz clic en "Asignar Tarea".

## Ver tareas:
Las tareas asignadas se dividirán en tres listas: Pendientes, Asignadas y Registradas.

## Editar tarea:
Haz clic en el botón "Editar" junto a una tarea para modificarla.

## Eliminar tarea:
Haz clic en el botón "Eliminar" para quitar una tarea.

## Pautas de Contribución
Si deseas contribuir a este proyecto, sigue estos pasos:

Haz un fork del repositorio.
Crea una nueva rama para tu característica (git checkout -b nueva-caracteristica).
Realiza los cambios y haz commit de tus cambios (git commit -am 'Añadir nueva característica').
Sube los cambios a tu fork (git push origin nueva-caracteristica).
Abre un Pull Request para revisión.

## Licencia
## Este proyecto está bajo la Licencia MIT. Para más detalles, consulta el archivo LICENSE

## Información de Contacto
Si tienes alguna pregunta o sugerencia, no dudes en ponerte en contacto:

Correo electrónico: wmercedesmota@gmail.com
GitHub: https://github.com/wady1115


### Explicación de los apartados:

1. **Título y Descripción**: Describe el propósito de la aplicación y qué tecnologías utiliza.
2. **Tecnologías Utilizadas**: Enumera las tecnologías clave utilizadas en el proyecto, tanto en el frontend como en el backend.
3. **Requisitos**: Explica lo necesario para ejecutar el proyecto, incluyendo las herramientas como Node.js y MongoDB.
4. **Instalación**: Detalla los pasos necesarios para configurar y ejecutar el proyecto en un entorno local.
5. **Ejemplo de Uso**: Describe cómo el usuario puede interactuar con la aplicación, agregar, editar y eliminar tareas.
6. **Pautas de Contribución**: Proporciona instrucciones sobre cómo otros desarrolladores pueden contribuir al proyecto.
7. **Licencia**: Proporciona la licencia del proyecto (MIT por defecto).
8. **Información de Contacto**: Ofrece un canal para contacto en caso de preguntas o sugerencias.

Este `README.md` es una guía completa para que cualquier usuario o desarrollador entienda rápidamente el proyecto, cómo instalarlo, usarlo y cómo contribuir.
