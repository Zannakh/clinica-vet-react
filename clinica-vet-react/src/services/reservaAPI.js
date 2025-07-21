const API_URL = "http://67.205.142.104:3000/api/reserva_procedimiento";

export async function getReservas() {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Error al obtener reservas");
  return await response.json();
}

export async function createReserva(reserva) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(reserva),
  });
  if (!response.ok) throw new Error("Error al crear reserva");
  return await response.json();
}

export async function updateReserva(id, reserva) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(reserva),
  });
  if (!response.ok) throw new Error("Error al actualizar reserva");
  return await response.json();
}

export async function deleteReserva(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Error al eliminar reserva");
  return await response.json();
}
