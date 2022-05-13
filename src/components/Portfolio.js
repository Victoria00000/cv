import movies from '../img/movies.jpg';
import store from '../img/store.jpg';
import contMan from '../img/contMan.jpg';
import tw from '../img/tw.png';

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
                      This is one of my first projects, responsive, implementing the integration with an API
                      and the development of components with CSS grid layout entirely by hand. Also developed in
                      React using react-infinite-scroll-component to generate the feeling of 'infinite scroll',
                      react-router-dom for site navigation and the content was obtained by integrating the
                      'movieDb' API.
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
                      It is a work of my own that I used to study and practice. In this application I
                      implemented axios, bootstrap, react-router, redux, react-loading-skeleton. I made
                      this store consuming the public API 'fakestoreapi.com
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
                      Another project to improve the study and practice in React, in which I implemented a
                      CRUD with redux, bootstrap, react-router-dom, react-toastify, in order to achieve an
                      app that handles contacts in an orderly, visually pleasing and intuitive way, and it
                      is also responsive to various screen sizes.
                    </p>
                    <a href="https://github.com/Victoria00000/contact-manager-app" target="_blank" rel='noopener noreferrer' className="btn btn-light mx-2" style={{ background: '#d63384', color: 'white' }}> GitHub </a>
                    <a href="https://contact-manager-front.netlify.app/" target="_blank" rel='noopener noreferrer' className="btn btn-light mx-2" style={{ background: '#d63384', color: 'white' }}> Deploy </a>
                  </div>
                </div>

                <div className="cardbg-dark" style={{ width: '25rem' }}>
                  <img src={tw} className="card-img-top" alt="proyect" height='196px' />
                  <div className="card-body">
                    <h5 className="card-title"> Collaboration development system for satellite tracking(current) </h5>
                    <p className="card-text">
                      In this project I worked as a frontend developer using React. My main tasks were: the
                      implementation of a state management library ( Redux ), design and development of
                      components for the administration panel, implementation of React Hooks for management
                      of forms and backend integration using axios. My implementations were essential for the
                      correct management of user information and the performance of the application.
                    </p>
                    <div className="btn btn-light mx-2" style={{ background: '#d63384', color: 'white' }}> Reference: Eng. Agustín Egidi 3402-659856.
                    </div>
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
