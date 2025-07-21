const API_URL = "http://67.205.142.104:3000/api/veterinario";

// Obtener todos los veterinarios
export const getVeterinarios = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Error al obtener veterinarios");
  return res.json();
};

// Crear nuevo veterinario
export const createVeterinario = async (veterinario) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(veterinario),
  });
  if (!res.ok) throw new Error("Error al crear veterinario");
};

// Actualizar veterinario por ID
export const updateVeterinario = async (id, veterinario) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(veterinario),
  });
  if (!res.ok) throw new Error("Error al actualizar veterinario");
};

// Eliminar veterinario por ID
export const deleteVeterinario = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Error al eliminar veterinario");
};
