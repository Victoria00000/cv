import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <ul className="nav justify-content-center align-content-center fw-bold" style={{ height: '7vh', background: '#d63384' }}>
        <li className="nav-item">
          <NavLink className="nav-link navbar-brand" to="/" style={{ color: 'white' }}> About </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link navbar-brand" to="/skills" style={{ color: 'white' }}> Skills </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link navbar-brand" to="/portfolio" style={{ color: 'white' }}> Portfolio </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link navbar-brand" to="/contact" style={{ color: 'white' }}> Contact </NavLink>
        </li>
      </ul>
    </>
  );
};