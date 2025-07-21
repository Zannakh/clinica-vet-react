function VeterinarioForm({ form, setForm, modoEditar, onSubmit }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Nombre Completo</label>
          <input
            type="text"
            name="nombre_completo"
            className="form-control"
            value={form.nombre_completo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-3">
          <label className="form-label">Especialidad</label>
          <input
            type="text"
            name="especialidad"
            className="form-control"
            value={form.especialidad}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-3">
          <label className="form-label">Teléfono</label>
          <input
            type="tel"
            name="telefono"
            className="form-control"
            value={form.telefono}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-12 d-flex justify-content-end">
          <button type="submit" className="btn btn-primary">
            {modoEditar ? "Actualizar" : "Registrar"}
          </button>
        </div>
      </div>
    </form>
  );
}

export default VeterinarioForm;
