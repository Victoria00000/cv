// About
import logo from '../img/logo512.png';

export const Home = () => {
  return (
    <div className="container text-center pt-5" style={{ display: 'flex', flexDirection: 'column', wrap: 'wrap', alignItems: 'center' }}>
      <h1 className="display-5 fw-normal px-2">
        Jr FrontEnd with React.js
      </h1>
      <h4 className="display-6 mb-4 fw-normal px-2">
        Victoria Andrés
      </h4>
      <p className="lead p-3">
        I currently have 8 months of experience in the world of frontend development,
        I am an active and proactive person, I have ambition and curiosity, I like to
        be in continuous progress, work in a team, I am patient and communicative. I
        hope to be part of a team that allows me to grow as a professional, but also
        contribute to mutual growth.
      </p>
      <div>
        <img src={logo} style={{ width: '240px' }} id='logo' alt='logo' />
      </div>
    </div>
  );
};
