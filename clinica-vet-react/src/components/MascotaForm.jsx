function MascotaForm({ form, setForm, duenos, modoEditar, onSubmit }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Nombre de la Mascota</label>
          <input
            type="text"
            name="nombre_mascota"
            className="form-control"
            value={form.nombre_mascota}
            onChange={handleChange}
            required
            placeholder="Ej: Firulais"
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Tipo de Animal</label>
          <select
            name="tipo_animal"
            className="form-select"
            value={form.tipo_animal}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona un tipo</option>
            <option value="Perro">Perro</option>
            <option value="Gato">Gato</option>
            <option value="Otro">Otro</option>
          </select>
        </div>

        <div className="col-md-4">
          <label className="form-label">Edad</label>
          <input
            type="number"
            name="edad"
            className="form-control"
            value={form.edad}
            onChange={handleChange}
            required
            min="0"
          />
        </div>

        <div className="col-md-4">
          <label className="form-label">Raza</label>
          <input
            type="text"
            name="raza"
            className="form-control"
            value={form.raza}
            onChange={handleChange}
            required
            placeholder="Ej: Labrador"
          />
        </div>

        <div className="col-md-4">
          <label className="form-label">Dueño</label>
          <select
            name="id_dueno"
            className="form-select"
            value={form.id_dueno}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona un dueño</option>
            {duenos.map((d) => (
              <option key={d.id} value={d.id}>
                {d.nombre_completo}
              </option>
            ))}
          </select>
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

export default MascotaForm;
