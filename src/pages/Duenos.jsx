import { useEffect, useState } from "react";
import {
  getDuenos,
  createDueno,
  updateDueno,
  deleteDueno,
} from "../services/duenoAPI";
import DuenoForm from "../components/DuenoForm";
import DuenoTable from "../components/DuenoTable";

function Duenos() {
  const [duenos, setDuenos] = useState([]);
  const [form, setForm] = useState({
    nombre_completo: "",
    rut: "",
    telefono: "",
    correo: "",
  });
  const [modoEditar, setModoEditar] = useState(false);
  const [rutOriginal, setRutOriginal] = useState("");

  const cargarDuenos = async () => {
    const data = await getDuenos();
    setDuenos(data);
  };

  useEffect(() => {
    cargarDuenos();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const { nombre_completo, rut, telefono, correo } = form;

    if (!nombre_completo || !rut || !telefono || !correo) {
      return alert("Completa todos los campos");
    }

    try {
      if (modoEditar) {
        await updateDueno(rutOriginal, form);
        setModoEditar(false);
        setRutOriginal("");
      } else {
        await createDueno(form);
      }

      setForm({ nombre_completo: "", rut: "", telefono: "", correo: "" });
      cargarDuenos();
    } catch (error) {
      alert("Error al guardar dueño");
      console.error(error);
    }
  };

  const onEdit = (dueno) => {
    setForm(dueno);
    setModoEditar(true);
    setRutOriginal(dueno.rut);
  };

  const onDelete = async (rut) => {
    if (!confirm("¿Eliminar este dueño?")) return;
    await deleteDueno(rut);
    cargarDuenos();
  };

  return (
    <div className="container">
      <div className="card mb-4 shadow-sm">
        <div className="card-header bg-primary text-white fw-semibold">
          {modoEditar ? "Editar Dueño" : "Registrar Dueño"}
        </div>
        <div className="card-body">
          <DuenoForm
            form={form}
            setForm={setForm}
            modoEditar={modoEditar}
            rutOriginal={rutOriginal}
            onSubmit={onSubmit}
          />
        </div>
      </div>

      <div className="card shadow-sm">
        <div className="card-header bg-secondary text-white fw-semibold">
          Lista de Dueños
        </div>
        <div className="card-body table-responsive">
          <DuenoTable duenos={duenos} onEdit={onEdit} onDelete={onDelete} />
        </div>
      </div>
    </div>
  );
}

export default Duenos;
