import movies from '../img/movies.jpg';
import store from '../img/store.jpg';
import contMan from '../img/contMan.jpg';
import tw from '../img/cemisa.jpg';
import exp from '../img/expenses.jpg';

export const Portfolio = () => {
  return (
    <>
      <div className="pt-4">
        <section className="about">
          <div className="container">

            <div className="row">
              <div className="col-12 text-center py-3">
                <h1> Portfolio </h1>
                <hr />
              </div>
            </div>

            <div className='container d-flex justify-content-around'>
              <div className='row'>

                <div className="cardbg-dark" style={{ width: '25rem' }}>
                  <img src={movies} className="card-img-top" alt="proyect" />
                  <div className="card-body">
                    <h5 className="card-title"> TrendingMovies </h5>
                    <p className="card-text">
                      Este es uno de mis primeros proyectos, responsivos, implementando la integración
                      con una API y el desarrollo de componentes con diseño CSS grid enteramente a mano.
                      También desarrollado en React usando react-infinite-scroll-component para generar
                      la sensación de ‘scroll infinito’, react-router-dom para la navegación del sitio
                      y el contenido lo obtuve integrando la API ‘movieDb’.
                    </p>
                    <a href="https://github.com/Victoria00000/MoviesHouse" target="_blank" rel='noopener noreferrer' className="btn btn-light mx-2" style={{ background: '#d63384', color: 'white' }}> GitHub </a>
                    <a href="https://trendingmovieshouse.netlify.app/" target="_blank" rel='noopener noreferrer' className="btn btn-light mx-2" style={{ background: '#d63384', color: 'white' }}> Deploy </a>
                  </div>
                </div>

                <div className="cardbg-dark" style={{ width: '25rem' }}>
                  <img src={store} className="card-img-top" alt="proyect" />
                  <div className="card-body">
                    <h5 className="card-title"> mySTORE </h5>
                    <p className="card-text">
                      Es un trabajo propio de los que utilicé para estudiar y practicar, en esta aplicación
                      implementé axios, bootstrap, react-router, redux, react-loading-skeleton. Esta tienda la
                      realicé consumiendo la API pública ‘fakestoreapi.com’
                    </p>
                    <a href="https://github.com/Victoria00000/E-COMMERCE-APP" target="_blank" rel='noopener noreferrer' className="btn btn-light mx-2" style={{ background: '#d63384', color: 'white' }}> GitHub </a>
                    <a href="https://velvety-starlight-bdc5ea.netlify.app/" target="_blank" rel='noopener noreferrer' className="btn btn-light mx-2" style={{ background: '#d63384', color: 'white' }}> Deploy </a>
                  </div>
                </div>

                <div className="cardbg-dark" style={{ width: '25rem' }}>
                  <img src={contMan} className="card-img-top" alt="proyect" height='196px' />
                  <div className="card-body">
                    <h5 className="card-title"> contact-manager </h5>
                    <p className="card-text">
                      Otro proyecto para mejorar el estudio y la práctica en React,  en el cual implementé
                      un CRUD con redux, bootstrap, react-router-dom, react-toastify, para lograr una app
                      que maneje los contactos de manera ordenada, visualmente amena e intuitiva, y responsiva
                      a varios tamaños de pantallas.
                    </p>
                    <a href="https://github.com/Victoria00000/contact-manager-app" target="_blank" rel='noopener noreferrer' className="btn btn-light mx-2" style={{ background: '#d63384', color: 'white' }}> GitHub </a>
                    <a href="https://contact-manager-front.netlify.app/" target="_blank" rel='noopener noreferrer' className="btn btn-light mx-2" style={{ background: '#d63384', color: 'white' }}> Deploy </a>
                  </div>
                </div>

                <div className="cardbg-dark" style={{ width: '25rem' }}>
                  <img src={tw} className="card-img-top" alt="proyect" height='196px' />
                  <div className="card-body">
                    <h5 className="card-title"> Sistema de rastreo satelital (CEMISA) </h5>
                    <p className="card-text">
                      En este proyecto trabajé como desarrollador frontend usando React y Tailwind. Mis tareas
                      principales fueron: el rediseño de la interfaz de usuario directamente sobre código. Mis
                      implementaciones fueron fundamentales para la actualización de las tecnologías, que habían
                      quedado obsoletas,  y la optimización de la UX-UI.
                    </p>
                    <div className="btn btn-light mx-2" style={{ background: '#d63384', color: 'white' }}> Reference: Eng. Agustín Egidi 3402-659856.
                    </div>
                  </div>
                </div>

                <div className="cardbg-dark" style={{ width: '25rem' }}>
                  <img src={exp} className="card-img-top" alt="proyect" height='196px' />
                  <div className="card-body">
                    <h5 className="card-title"> Expenses Tracker - Frontend/backend </h5>
                    <p className="card-text">
                      Es un sitio realizado como práctica personal, valiéndome de Tailwind, React, boxicons, react-chartjs-2,
                      react-redux, mongoose, nodemon, cors, express, dotenv, entre otros recursos. Se trata de una web que te
                      clasifica tu dinero para su fácil control gracias a sus gráficos y listas. En esta ocasión me animé a hacer
                      un backend básico para almacenar los datos en una base.
                    </p>
                    <a href="https://github.com/Victoria00000" target="_blank" rel='noopener noreferrer' className="btn btn-light mx-2" style={{ background: '#d63384', color: 'white' }}> GitHub </a>
                    <div className="btn btn-light mx-2" style={{ background: '#d63384', color: 'white' }}> Deploy </div>
                
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>
      </div>
    </>
  );
};
