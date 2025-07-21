import { useEffect, useState } from "react";
import {
  getVeterinarios,
  createVeterinario,
  updateVeterinario,
  deleteVeterinario,
} from "../services/veterinarioAPI";
import VeterinarioForm from "../components/VeterinarioForm";
import VeterinarioTable from "../components/VeterinarioTable";

function Veterinarios() {
  const [veterinarios, setVeterinarios] = useState([]);
  const [form, setForm] = useState({
    nombre_completo: "",
    especialidad: "",
    telefono: "",
  });
  const [modoEditar, setModoEditar] = useState(false);
  const [idEditando, setIdEditando] = useState(null);

  const cargarVeterinarios = async () => {
    try {
      const data = await getVeterinarios();
      setVeterinarios(data);
    } catch (error) {
      console.error("Error al cargar veterinarios:", error);
    }
  };

  useEffect(() => {
    cargarVeterinarios();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!form.nombre_completo || !form.especialidad || !form.telefono) {
      return alert("Completa todos los campos");
    }

    try {
      if (modoEditar) {
        await updateVeterinario(idEditando, form);
        setModoEditar(false);
        setIdEditando(null);
      } else {
        await createVeterinario(form);
      }

      setForm({
        nombre_completo: "",
        especialidad: "",
        telefono: "",
      });

      cargarVeterinarios();
    } catch (error) {
      alert("Error al guardar veterinario");
      console.error(error);
    }
  };

  const onEdit = (veterinario) => {
    setForm(veterinario);
    setModoEditar(true);
    setIdEditando(veterinario.id);
  };

  const onDelete = async (id) => {
    if (!confirm("¿Eliminar este veterinario?")) return;
    await deleteVeterinario(id);
    cargarVeterinarios();
  };

  return (
    <div className="container">
      <div className="card mb-4 shadow-sm">
        <div className="card-header bg-primary text-white fw-semibold">
          {modoEditar ? "Editar Veterinario" : "Registrar Veterinario"}
        </div>
        <div className="card-body">
          <VeterinarioForm
            form={form}
            setForm={setForm}
            modoEditar={modoEditar}
            onSubmit={onSubmit}
          />
        </div>
      </div>

      <div className="card shadow-sm">
        <div className="card-header bg-secondary text-white fw-semibold">
          Lista de Veterinarios
        </div>
        <div className="card-body table-responsive">
          <VeterinarioTable
            veterinarios={veterinarios}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default Veterinarios;
