document.addEventListener("DOMContentLoaded", () => {
  let duenos = JSON.parse(localStorage.getItem("duenos")) || [];
  let mascotas = JSON.parse(localStorage.getItem("mascotas")) || [];
  let veterinarios = JSON.parse(localStorage.getItem("veterinarios")) || [];
  let reservas = JSON.parse(localStorage.getItem("reservas")) || [];

  let editandoMascota = null;
  let editandoVeterinario = null;
  let editandoReserva = null;

  const guardarLS = () => {
    localStorage.setItem("duenos", JSON.stringify(duenos));
    localStorage.setItem("mascotas", JSON.stringify(mascotas));
    localStorage.setItem("veterinarios", JSON.stringify(veterinarios));
    localStorage.setItem("reservas", JSON.stringify(reservas));
  };

  // --- Formularios y tablas ---
  const formDueno = document.getElementById("formDueno");
  const formMascota = document.getElementById("formMascota");
  const formVeterinario = document.getElementById("formVeterinario");
  const formReserva = document.getElementById("formReserva");

  const tablaDueno = document.querySelector("#tablaDueno tbody");
  const tablaMascota = document.querySelector("#tablaMascota tbody");
  const tablaVeterinario = document.querySelector("#tablaVeterinario tbody");
  const tablaReserva = document.querySelector("#tablaReserva tbody");

  const selMascota = document.getElementById("reservaMascota");
  const selVeterinario = document.getElementById("reservaVeterinario");

  const actualizarSelects = () => {
    selMascota.innerHTML = mascotas.map(m => `<option value="${m.nombre}">${m.nombre}</option>`).join("") || '<option disabled selected>No hay mascotas</option>';
    selVeterinario.innerHTML = veterinarios.map(v => `<option value="${v.nombre}">${v.nombre}</option>`).join("") || '<option disabled selected>No hay veterinarios</option>';
  };

  // --- CRUD Dueños ---
  const renderDuenos = () => {
    tablaDueno.innerHTML = "";
    duenos.forEach((d) => {
      tablaDueno.innerHTML += `
        <tr>
          <td>${d.nombre}</td>
          <td>${d.rut}</td>
          <td>${d.telefono}</td>
          <td>${d.correo}</td>
          <td>
            <button class='btn btn-warning btn-sm' onclick='editarDueno("${d.rut}")'>Editar</button>
            <button class='btn btn-danger btn-sm' onclick='eliminarDueno("${d.rut}")'>Eliminar</button>
          </td>
        </tr>`;
    });
  };

  formDueno.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = duenoNombre.value.trim();
    const rut = duenoRut.value.trim();
    const telefono = duenoTelefono.value.trim();
    const correo = duenoCorreo.value.trim();

    if (!nombre || !rut || !telefono || !correo) return alert("Completa todos los campos");

    const existente = duenos.find(d => d.rut === rut);
    if (existente) Object.assign(existente, { nombre, telefono, correo });
    else duenos.push({ nombre, rut, telefono, correo });

    guardarLS();
    renderDuenos();
    formDueno.reset();
  });

  window.eliminarDueno = (rut) => {
    if (!confirm("¿Eliminar dueño?")) return;
    duenos = duenos.filter(d => d.rut !== rut);
    mascotas = mascotas.filter(m => m.rutDueno !== rut);
    guardarLS();
    renderDuenos();
    renderMascotas();
    actualizarSelects();
  };

  // --- CRUD Mascotas ---
  const renderMascotas = () => {
    tablaMascota.innerHTML = "";
    mascotas.forEach((m, i) => {
      tablaMascota.innerHTML += `
        <tr>
          <td>${m.nombre}</td>
          <td>${m.tipo}</td>
          <td>${m.edad}</td>
          <td>${m.raza}</td>
          <td>${m.rutDueno}</td>
          <td>
            <button class='btn btn-warning btn-sm' onclick='editarMascota(${i})'>Editar</button>
            <button class='btn btn-danger btn-sm' onclick='eliminarMascota(${i})'>Eliminar</button>
          </td>
        </tr>`;
    });
  };

  formMascota.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = mascotaNombre.value.trim();
    const tipo = mascotaTipo.value;
    const edad = mascotaEdad.value.trim();
    const raza = mascotaRaza.value.trim();
    const rutDueno = mascotaRutDueno.value.trim();

    if (!nombre || !tipo || !edad || !raza || !rutDueno) return alert("Completa todos los campos");
    if (!duenos.some(d => d.rut === rutDueno)) return alert("RUT de dueño no encontrado");

    const nueva = { nombre, tipo, edad, raza, rutDueno };
    if (editandoMascota !== null) {
      mascotas[editandoMascota] = nueva;
      editandoMascota = null;
    } else {
      mascotas.push(nueva);
    }

    guardarLS();
    renderMascotas();
    actualizarSelects();
    formMascota.reset();
  });

  window.editarMascota = (i) => {
    const m = mascotas[i];
    mascotaNombre.value = m.nombre;
    mascotaTipo.value = m.tipo;
    mascotaEdad.value = m.edad;
    mascotaRaza.value = m.raza;
    mascotaRutDueno.value = m.rutDueno;
    editandoMascota = i;
  };

  window.eliminarMascota = (i) => {
    if (!confirm("¿Eliminar mascota?")) return;
    mascotas.splice(i, 1);
    guardarLS();
    renderMascotas();
    actualizarSelects();
  };

  // --- CRUD Veterinarios ---
  const renderVeterinarios = () => {
    tablaVeterinario.innerHTML = "";
    veterinarios.forEach((v, i) => {
      tablaVeterinario.innerHTML += `
        <tr>
          <td>${v.nombre}</td>
          <td>${v.especialidad}</td>
          <td>${v.telefono}</td>
          <td>
            <button class='btn btn-warning btn-sm' onclick='editarVeterinario(${i})'>Editar</button>
            <button class='btn btn-danger btn-sm' onclick='eliminarVeterinario(${i})'>Eliminar</button>
          </td>
        </tr>`;
    });
  };

  formVeterinario.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = veterinarioNombre.value.trim();
    const especialidad = veterinarioEspecialidad.value;
    const telefono = veterinarioTelefono.value.trim();

    if (!nombre || !especialidad || !telefono) return alert("Completa todos los campos");

    const nuevo = { nombre, especialidad, telefono };
    if (editandoVeterinario !== null) {
      veterinarios[editandoVeterinario] = nuevo;
      editandoVeterinario = null;
    } else {
      veterinarios.push(nuevo);
    }

    guardarLS();
    renderVeterinarios();
    actualizarSelects();
    formVeterinario.reset();
  });

  window.editarVeterinario = (i) => {
    const v = veterinarios[i];
    veterinarioNombre.value = v.nombre;
    veterinarioEspecialidad.value = v.especialidad;
    veterinarioTelefono.value = v.telefono;
    editandoVeterinario = i;
  };

  window.eliminarVeterinario = (i) => {
    if (!confirm("¿Eliminar veterinario?")) return;
    veterinarios.splice(i, 1);
    guardarLS();
    renderVeterinarios();
    actualizarSelects();
  };

  // --- CRUD Reservas ---
  const renderReservas = () => {
    tablaReserva.innerHTML = reservas.map((r, i) => `
      <tr>
        <td>${r.mascota}</td>
        <td>${r.veterinario}</td>
        <td>${r.tipo}</td>
        <td>${r.fecha}</td>
        <td>${r.hora}</td>
        <td>
          <button class='btn btn-warning btn-sm' onclick='editarReserva(${i})'>Editar</button>
          <button class='btn btn-danger btn-sm' onclick='eliminarReserva(${i})'>Eliminar</button>
        </td>
      </tr>`).join("");
  };

  formReserva.addEventListener("submit", (e) => {
    e.preventDefault();
    const mascota = reservaMascota.value;
    const veterinario = reservaVeterinario.value;
    const tipo = reservaTipo.value.trim();
    const fecha = reservaFecha.value;
    const hora = reservaHora.value;

    if (!mascota || !veterinario || !tipo || !fecha || !hora) return alert("Completa todos los campos");

    const nueva = { mascota, veterinario, tipo, fecha, hora };
    if (editandoReserva !== null) {
      reservas[editandoReserva] = nueva;
      editandoReserva = null;
    } else {
      reservas.push(nueva);
    }

    guardarLS();
    renderReservas();
    formReserva.reset();
  });

  window.editarReserva = (i) => {
    const r = reservas[i];
    reservaMascota.value = r.mascota;
    reservaVeterinario.value = r.veterinario;
    reservaTipo.value = r.tipo;
    reservaFecha.value = r.fecha;
    reservaHora.value = r.hora;
    editandoReserva = i;
  };

  window.eliminarReserva = (i) => {
    if (!confirm("¿Eliminar esta reserva?")) return;
    reservas.splice(i, 1);
    guardarLS();
    renderReservas();
  };

  // Inicializar todo
  renderDuenos();
  renderMascotas();
  renderVeterinarios();
  renderReservas();
  actualizarSelects();
});
