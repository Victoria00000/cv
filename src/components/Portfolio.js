import movies from '../img/movies.jpg';
import store from '../img/store.jpg';
import contMan from '../img/contMan.jpg';

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
                      This is one of my first projects, responsive, implementing the integration with
                      an API and the development of components with CSS grid design entirely by hand.
                      Also developed in React using react-infinite-scroll-component to generate the
                      feeling of 'infinite scroll', react-router-dom for site navigation and
                      I got the content by integrating the 'movieDb' API.
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
                      It is a work of mine that I used to study and practice, in this application
                      i implemented axios, bootstrap, react-router, redux, react-loading-skeleton.
                      I did this store by consuming the public API 'fakestoreapi.com' with axios library.
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
                      CRUD with redux, bootstrap, react-router-dom, react-toastify, to achieve an app that
                      manage contacts in an orderly, visually pleasing and intuitive way, and responsive to
                      various screen sizes.
                    </p>
                    <a href="https://github.com/Victoria00000/contact-manager-app" target="_blank" rel='noopener noreferrer' className="btn btn-light mx-2" style={{ background: '#d63384', color: 'white' }}> GitHub </a>
                    <a href="https://contact-manager-front.netlify.app/" target="_blank" rel='noopener noreferrer' className="btn btn-light mx-2" style={{ background: '#d63384', color: 'white' }}> Deploy </a>
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
