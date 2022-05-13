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
        I currently have about 1 year in the world of frontend development. I am an active and
        proactive person, I have ambition and curiosity, and I like to be in continuous progress. I am
        patient and communicative. I hope to be part of a team that allows me to grow up as a
        professional, but also to contribute to mutual growth.
        Today I want to perfect myself in frontend development and the study of the English
        language. Also, I want to enter the backend world to become a fullstack developer.
      </p>
      <div>
        <img src={logo} style={{ width: '240px' }} id='logo' alt='logo' />
      </div>
    </div>
  );
};
