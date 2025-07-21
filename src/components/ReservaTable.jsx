function ReservaTable({ reservas, onEdit, onDelete }) {
  return (
    <table className="table table-hover table-striped align-middle">
      <thead className="table-dark">
        <tr>
          <th>Mascota</th>
          <th>Veterinario</th>
          <th>Procedimiento</th>
          <th>Fecha</th>
          <th>Hora</th>
          <th className="text-center">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {reservas.length === 0 ? (
          <tr>
            <td colSpan="6" className="text-center text-muted">
              No hay reservas registradas
            </td>
          </tr>
        ) : (
          reservas.map((r) => (
            <tr key={r.id}>
              <td>{r.nombre_mascota}</td>
              <td>{r.nombre_veterinario}</td>
              <td>{r.tipo_procedimiento}</td>
              <td>{r.fecha}</td>
              <td>{r.hora}</td>
              <td className="text-center">
                <button
                  className="btn btn-sm btn-outline-warning me-2"
                  onClick={() => onEdit(r)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => onDelete(r.id)}
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

export default ReservaTable;
