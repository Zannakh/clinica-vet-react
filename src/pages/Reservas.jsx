import { useEffect, useState } from "react";
import {
  getReservas,
  createReserva,
  updateReserva,
  deleteReserva,
} from "../services/reservaAPI";
import { getMascotas } from "../services/mascotaAPI";
import { getVeterinarios } from "../services/veterinarioAPI";
import ReservaForm from "../components/ReservaForm";
import ReservaTable from "../components/ReservaTable";

function Reservas() {
  const [reservas, setReservas] = useState([]);
  const [mascotas, setMascotas] = useState([]);
  const [veterinarios, setVeterinarios] = useState([]);
  const [form, setForm] = useState({
    id_mascota: "",
    id_veterinario: "",
    tipo_procedimiento: "",
    fecha: "",
    hora: "",
  });
  const [modoEditar, setModoEditar] = useState(false);
  const [idEditando, setIdEditando] = useState(null);

  const cargarDatos = async () => {
    try {
      const [res, mas, vet] = await Promise.all([
        getReservas(),
        getMascotas(),
        getVeterinarios(),
      ]);
      setReservas(res);
      setMascotas(mas);
      setVeterinarios(vet);
    } catch (error) {
      console.error("Error cargando datos:", error);
    }
  };

  useEffect(() => {
    cargarDatos();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.id_mascota ||
      !form.id_veterinario ||
      !form.tipo_procedimiento ||
      !form.fecha ||
      !form.hora
    ) {
      return alert("Completa todos los campos");
    }

    try {
      if (modoEditar) {
        await updateReserva(idEditando, form);
        setModoEditar(false);
        setIdEditando(null);
      } else {
        await createReserva(form);
      }

      setForm({
        id_mascota: "",
        id_veterinario: "",
        tipo_procedimiento: "",
        fecha: "",
        hora: "",
      });

      cargarDatos();
    } catch (error) {
      alert("Error al guardar reserva");
      console.error(error);
    }
  };

  const onEdit = (reserva) => {
    setForm({
      id_mascota: reserva.id_mascota,
      id_veterinario: reserva.id_veterinario,
      tipo_procedimiento: reserva.tipo_procedimiento,
      fecha: reserva.fecha,
      hora: reserva.hora,
    });
    setModoEditar(true);
    setIdEditando(reserva.id);
  };

  const onDelete = async (id) => {
    if (!confirm("¿Eliminar esta reserva?")) return;
    await deleteReserva(id);
    cargarDatos();
  };

  return (
    <div className="container">
      <div className="card mb-4 shadow-sm">
        <div className="card-header bg-primary text-white fw-semibold">
          {modoEditar ? "Editar Reserva" : "Registrar Nueva Reserva"}
        </div>
        <div className="card-body">
          <ReservaForm
            form={form}
            setForm={setForm}
            modoEditar={modoEditar}
            mascotas={mascotas}
            veterinarios={veterinarios}
            onSubmit={onSubmit}
          />
        </div>
      </div>

      <div className="card shadow-sm">
        <div className="card-header bg-secondary text-white fw-semibold">
          Lista de Reservas
        </div>
        <div className="card-body table-responsive">
          <ReservaTable
            reservas={reservas}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default Reservas;
