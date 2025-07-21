import { NavLink } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar-custom">
      <div className="container-fluid text-center py-3">
        <h1 className="m-0">Clínica Veterinaria</h1>
      </div>

      <div className="sub-navbar">
        <NavLink to="/" className="nav-link-custom">
          Dueños
        </NavLink>
        <NavLink to="/mascotas" className="nav-link-custom">
          Mascotas
        </NavLink>
        <NavLink to="/veterinarios" className="nav-link-custom">
          Veterinarios
        </NavLink>
        <NavLink to="/reservas" className="nav-link-custom">
          Reservas
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
