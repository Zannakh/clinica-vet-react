function DuenoForm({ form, setForm, modoEditar, onSubmit }) {
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
            placeholder="Ej: Carla Muñoz"
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">RUT</label>
          <input
            type="text"
            name="rut"
            className="form-control"
            value={form.rut}
            onChange={handleChange}
            required
            placeholder="Ej: 11.111.111-1"
            disabled={modoEditar}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Teléfono</label>
          <input
            type="tel"
            name="telefono"
            className="form-control"
            value={form.telefono}
            onChange={handleChange}
            required
            placeholder="Ej: 912345678"
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Correo Electrónico</label>
          <input
            type="email"
            name="correo"
            className="form-control"
            value={form.correo}
            onChange={handleChange}
            required
            placeholder="Ej: carla.munoz@email.com"
          />
        </div>

        <div className="col-12 d-flex justify-content-end">
          <button type="submit" className="btn btn-success">
            {modoEditar ? "Actualizar" : "Registrar"}
          </button>
        </div>
      </div>
    </form>
  );
}

export default DuenoForm;
