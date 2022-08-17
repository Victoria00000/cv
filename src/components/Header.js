import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <ul className="nav justify-content-center align-content-center fw-bold pt-1" style={{ height: '7vh', background: '#d63384' }}>
        <li className="nav-item">
          <NavLink className="nav-link navbar-brand" to="/" style={{ color: 'white' }}> Sobre mi </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link navbar-brand" to="/skills" style={{ color: 'white' }}> Habilidades </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link navbar-brand" to="/portfolio" style={{ color: 'white' }}> Portfolio </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link navbar-brand" to="/contact" style={{ color: 'white' }}> Contacto/CV </NavLink>
        </li>
      </ul>
    </>
  );
};