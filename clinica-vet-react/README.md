# 🐾 Clínica Veterinaria - React + API REST

Aplicación web desarrollada con React que permite gestionar datos de una clínica veterinaria, incluyendo **dueños, mascotas, veterinarios y reservas de procedimientos**, consumiendo una API RESTful.

## 🚀 Tecnologías

- React (Vite)
- React Router DOM
- Bootstrap 5
- Fetch API (GET, POST, PUT, DELETE)

## 📂 Estructura

- src/
- ├── components/ # Componentes reutilizables
- ├── pages/ # Vistas principales (Dueños, Mascotas, etc.)
- ├── services/ # Funciones para consumir la API
- ├── App.jsx # Componente raíz con rutas
- ├── main.jsx # Punto de entrada


## 🧩 Funcionalidades

✅ CRUD completo para:

- **Dueños** (nombre, RUT, teléfono, correo)
- **Mascotas** (nombre, tipo, edad, raza, dueño)
- **Veterinarios** (nombre, especialidad, teléfono)
- **Reservas** (mascota, veterinario, procedimiento, fecha y hora)

✅ Relación entre entidades (mascota ↔ dueño, reserva ↔ mascota y veterinario)  
✅ Formularios con validación  
✅ Navegación por rutas  
✅ Diseño responsive y limpio con Bootstrap

## 🔗 API utilizada

API RESTful externa proporcionada por el docente:

- `/api/dueno`
- `/api/mascota`
- `/api/veterinario`
- `/api/reserva_procedimiento`

> Base URL: `http://67.205.142.104:3000`

## ▶️ Cómo ejecutar

1. Clonar el repositorio o descomprimir el .zip entregado.
2. Instalar dependencias:
   ```bash
   npm install
3. Ejecutar la app:
    ```bash
    npm run dev
4. Abrir en el navegador: http://localhost:5173

👨‍💻 Autor
Felipe Larrañaga
Estudiante INACAP
Repositorio GitHub: @Zannakh

📌 Proyecto realizado para la evaluación N°3 de Programación Front End, Clínica Veterinaria, con React y consumo de API.