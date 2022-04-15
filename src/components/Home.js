// About
import logo from '../img/logo512.png';

export const Home = () => {
  return (
    <div className="container text-center pt-5" style={{ display: 'flex', flexDirection: 'column', wrap: 'wrap', alignItems: 'center' }}>
      <h1 className="display-5 fw-normal px-2">
        Jr Frontend with React.js
      </h1>
      <h4 className="display-6 mb-4 fw-normal px-2">
        Victoria Andrés
      </h4>
      <p className="lead p-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      <div>
        <img src={logo} style={{ width:'240px'}} id='logo' alt='logo'/>
      </div>
    </div>
  );
};
