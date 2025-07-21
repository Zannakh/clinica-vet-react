const API_URL = "http://67.205.142.104:3000/api/mascota";

// Obtener todas las mascotas
export const getMascotas = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Error al obtener mascotas");
  return res.json();
};

// Crear nueva mascota
export const createMascota = async (mascota) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(mascota),
  });
  if (!res.ok) throw new Error("Error al crear mascota");
};

// Actualizar mascota por ID
export const updateMascota = async (id, mascota) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(mascota),
  });
  if (!res.ok) throw new Error("Error al actualizar mascota");
};

// Eliminar mascota por ID
export const deleteMascota = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Error al eliminar mascota");
};
