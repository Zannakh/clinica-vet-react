function DuenoTable({ duenos, onEdit, onDelete }) {
  return (
    <table className="table table-striped table-hover align-middle">
      <thead className="table-dark">
        <tr>
          <th>Nombre</th>
          <th>RUT</th>
          <th>Teléfono</th>
          <th>Correo</th>
          <th className="text-center">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {duenos.length === 0 ? (
          <tr>
            <td colSpan="5" className="text-center text-muted">
              No hay dueños registrados
            </td>
          </tr>
        ) : (
          duenos.map((dueno) => (
            <tr key={dueno.rut}>
              <td>{dueno.nombre_completo}</td>
              <td>{dueno.rut}</td>
              <td>{dueno.telefono}</td>
              <td>{dueno.correo}</td>
              <td className="text-center">
                <button
                  className="btn btn-sm btn-outline-warning me-2"
                  onClick={() => onEdit(dueno)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => onDelete(dueno.rut)}
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

export default DuenoTable;
