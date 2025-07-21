const API_URL = "http://67.205.142.104:3000/api/dueno";

// Obtener todos los dueños
export const getDuenos = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Error al obtener dueños");
  return res.json();
};

// Crear nuevo dueño
export const createDueno = async (dueno) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dueno),
  });
  if (!res.ok) throw new Error("Error al crear dueño");
};

// Actualizar dueño por RUT
export const updateDueno = async (rut, dueno) => {
  const res = await fetch(`${API_URL}/${rut}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dueno),
  });
  if (!res.ok) throw new Error("Error al actualizar dueño");
};

// Eliminar dueño por RUT
export const deleteDueno = async (rut) => {
  const res = await fetch(`${API_URL}/${rut}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Error al eliminar dueño");
};
