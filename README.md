# 🐾 Clínica Veterinaria – React + API REST

Aplicación web desarrollada con **React** para la gestión de una clínica veterinaria. Permite administrar **dueños, mascotas, veterinarios y reservas de procedimientos**, consumiendo una **API RESTful externa**.

---

## 🚀 Tecnologías utilizadas

- ⚛️ React (Vite)
- 🔗 React Router DOM
- 🎨 Bootstrap 5
- 🌐 Fetch API (GET, POST, PUT, DELETE)

---

## 📁 Estructura del proyecto

```
src/
├── assets/             # Recursos estáticos (imágenes, íconos, etc.)
├── components/         # Componentes reutilizables (formularios, tablas, navbar, etc.)
├── pages/              # Vistas principales (Dueños, Mascotas, Reservas, Veterinarios)
├── services/           # Funciones para consumir la API REST
├── App.jsx             # Componente principal con rutas
├── main.jsx            # Punto de entrada
├── App.css             # Estilos globales del componente App
├── global.css          # Estilos generales compartidos
index.html              # Plantilla HTML base (raíz del proyecto)
```

---

## 🧩 Funcionalidades

✅ CRUD completo para:

- **Dueños** (nombre, RUT, teléfono, correo)  
- **Mascotas** (nombre, tipo, edad, raza, dueño)  
- **Veterinarios** (nombre, especialidad, teléfono)  
- **Reservas** (mascota, veterinario, procedimiento, fecha y hora)

✅ Relaciones entre entidades:  
&nbsp;&nbsp;&nbsp;&nbsp;• Mascota ↔ Dueño  
&nbsp;&nbsp;&nbsp;&nbsp;• Reserva ↔ Mascota y Veterinario

✅ Formularios con validación  
✅ Navegación con React Router  
✅ Diseño responsive y moderno con Bootstrap

---

## 🔗 API RESTful utilizada

API proporcionada por el docente, con las siguientes rutas:

- `GET /api/dueno`
- `GET /api/mascota`
- `GET /api/veterinario`
- `GET /api/reserva_procedimiento`

> 🌐 **Base URL**: `http://67.205.142.104:3000`

---

## ▶️ ¿Cómo ejecutar el proyecto en local?

1. Clona el repositorio o descomprime el archivo `.zip` entregado.
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abre la app en tu navegador:  
   👉 [http://localhost:5173](http://localhost:5173)

---

## 🌍 Versión en línea

Puedes acceder a la versión desplegada en GitHub Pages aquí:  
👉 [https://zannakh.github.io/clinica-vet-react/](https://zannakh.github.io/clinica-vet-react/)

---

## 👨‍💻 Autor

**Felipe Larrañaga**  
Estudiante INACAP  
GitHub: [@Zannakh](https://github.com/Zannakh)

---

📌 *Proyecto realizado como parte de la Evaluación N°3 de Programación Front End (Clínica Veterinaria) usando React y consumo de API.*
