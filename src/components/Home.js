// About
import logo from '../img/logo512.png';

export const Home = () => {
  return (
    <div className="container text-center pt-5" style={{ display: 'flex', flexDirection: 'column', wrap: 'wrap', alignItems: 'center' }}>
      <h1 className="display-5 fw-normal px-2">
        Trainee FrontEnd React.js
      </h1>
      <h4 className="display-6 mb-4 fw-normal px-2">
        Victoria Andrés
      </h4>
      <p className="lead p-3">
        Actualmente cuento con casi un año en el mundo del desarrollo frontend,
        con fundamentos básicos en diseño web. Soy una persona activa y proactiva,
        tengo ambición y curiosidad, me gusta estar en continuo avance, trabajar en equipo,
        soy paciente y comunicativa. Espero formar parte de un equipo que me permita crecer
        como profesional, pero también aportar al crecimiento mutuo.
      </p>
      <div>
        <img src={logo} style={{ width: '240px' }} id='logo' alt='logo' />
      </div>
    </div>
  );
};
