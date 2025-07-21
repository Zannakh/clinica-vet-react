function VeterinarioTable({ veterinarios, onEdit, onDelete }) {
  return (
    <table className="table table-striped table-hover align-middle">
      <thead className="table-dark">
        <tr>
          <th>Nombre</th>
          <th>Especialidad</th>
          <th>Teléfono</th>
          <th className="text-center">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {veterinarios.length === 0 ? (
          <tr>
            <td colSpan="4" className="text-center text-muted">
              No hay veterinarios registrados
            </td>
          </tr>
        ) : (
          veterinarios.map((v) => (
            <tr key={v.id}>
              <td>{v.nombre_completo}</td>
              <td>{v.especialidad}</td>
              <td>{v.telefono}</td>
              <td className="text-center">
                <button
                  className="btn btn-sm btn-outline-warning me-2"
                  onClick={() => onEdit(v)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => onDelete(v.id)}
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

export default VeterinarioTable;
