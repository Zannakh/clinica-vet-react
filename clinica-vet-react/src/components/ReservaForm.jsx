function ReservaForm({
  form,
  setForm,
  modoEditar,
  mascotas,
  veterinarios,
  onSubmit,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row g-3">
        <div className="col-md-4">
          <label className="form-label">Mascota</label>
          <select
            name="id_mascota"
            className="form-select"
            value={form.id_mascota}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona una mascota</option>
            {mascotas.map((m) => (
              <option key={m.id} value={m.id}>
                {m.nombre_mascota}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-4">
          <label className="form-label">Veterinario</label>
          <select
            name="id_veterinario"
            className="form-select"
            value={form.id_veterinario}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona un veterinario</option>
            {veterinarios.map((v) => (
              <option key={v.id} value={v.id}>
                {v.nombre_completo}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-4">
          <label className="form-label">Tipo de procedimiento</label>
          <input
            type="text"
            name="tipo_procedimiento"
            className="form-control"
            value={form.tipo_procedimiento}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Fecha</label>
          <input
            type="date"
            name="fecha"
            className="form-control"
            value={form.fecha}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Hora</label>
          <input
            type="time"
            name="hora"
            className="form-control"
            value={form.hora}
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

export default ReservaForm;
