function MascotaTable({ mascotas, duenos, onEdit, onDelete }) {
  const obtenerNombreDueno = (id_dueno) => {
    const dueno = duenos.find((d) => d.id === id_dueno);
    return dueno ? dueno.nombre_completo : "No registrado";
  };

  return (
    <table className="table table-striped table-hover align-middle">
      <thead className="table-dark">
        <tr>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Edad</th>
          <th>Raza</th>
          <th>Dueño</th>
          <th className="text-center">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {mascotas.length === 0 ? (
          <tr>
            <td colSpan="6" className="text-center text-muted">
              No hay mascotas registradas
            </td>
          </tr>
        ) : (
          mascotas.map((m) => (
            <tr key={m.id}>
              <td>{m.nombre_mascota}</td>
              <td>{m.tipo_animal}</td>
              <td>{m.edad}</td>
              <td>{m.raza}</td>
              <td>{obtenerNombreDueno(m.id_dueno)}</td>
              <td className="text-center">
                <button
                  className="btn btn-sm btn-outline-warning me-2"
                  onClick={() => onEdit(m)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => onDelete(m.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default MascotaTable;
