import { useEffect, useState } from "react";
import {
  getMascotas,
  createMascota,
  updateMascota,
  deleteMascota,
} from "../services/mascotaAPI";
import { getDuenos } from "../services/duenoAPI";
import MascotaForm from "../components/MascotaForm";
import MascotaTable from "../components/MascotaTable";

function Mascotas() {
  const [mascotas, setMascotas] = useState([]);
  const [duenos, setDuenos] = useState([]);
  const [form, setForm] = useState({
    nombre_mascota: "",
    tipo_animal: "",
    edad: "",
    raza: "",
    id_dueno: "",
  });
  const [modoEditar, setModoEditar] = useState(false);
  const [idEditando, setIdEditando] = useState(null);

  const cargarDatos = async () => {
    try {
      const [mascotasData, duenosData] = await Promise.all([
        getMascotas(),
        getDuenos(),
      ]);
      setMascotas(mascotasData);
      setDuenos(duenosData);
    } catch (error) {
      console.error("Error al cargar datos:", error);
    }
  };

  useEffect(() => {
    cargarDatos();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const { nombre_mascota, tipo_animal, edad, raza, id_dueno } = form;

    if (!nombre_mascota || !tipo_animal || !edad || !raza || !id_dueno) {
      return alert("Completa todos los campos");
    }

    try {
      if (modoEditar) {
        await updateMascota(idEditando, form);
        setModoEditar(false);
        setIdEditando(null);
      } else {
        await createMascota(form);
      }

      setForm({
        nombre_mascota: "",
        tipo_animal: "",
        edad: "",
        raza: "",
        id_dueno: "",
      });
      cargarDatos();
    } catch (error) {
      alert("Error al guardar mascota");
      console.error(error);
    }
  };

  const onEdit = (mascota) => {
    setForm(mascota);
    setModoEditar(true);
    setIdEditando(mascota.id);
  };

  const onDelete = async (id) => {
    if (!confirm("¿Eliminar esta mascota?")) return;
    await deleteMascota(id);
    cargarDatos();
  };

  return (
    <div className="container">
      <div className="card mb-4 shadow-sm">
        <div className="card-header bg-success text-white fw-semibold">
          {modoEditar ? "Editar Mascota" : "Registrar Mascota"}
        </div>
        <div className="card-body">
          <MascotaForm
            form={form}
            setForm={setForm}
            duenos={duenos}
            modoEditar={modoEditar}
            onSubmit={onSubmit}
          />
        </div>
      </div>

      <div className="card shadow-sm">
        <div className="card-header bg-secondary text-white fw-semibold">
          Lista de Mascotas
        </div>
        <div className="card-body table-responsive">
          <MascotaTable
            mascotas={mascotas}
            duenos={duenos}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default Mascotas;
