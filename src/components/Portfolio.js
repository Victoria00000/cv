import movies from '../img/movies.jpg';
import store from '../img/store.jpg';
import soon from '../img/soon.jpg';

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
                    <p className="card-text"> DESCRIPCIONES dfsdfjsdojfosdj jfsdjfslkdjflsdkjf dlsjflksdjlfkj fjsljdfldskjf  dlaskjdlsakjd lkjljlkjljljlkjlkjlkjklj ljlkjlkjljlkjlkjljlkjljl  FRONTEND responsive proyect with REACT.js Consuming the API movieDb, with: "dependencies": "react": "^17.0.2", "react-dom": "^17.0.2", "react-icons": "^4.3.1", "react-infinite-scroll-component": "^6.1.0", "react-router-dom": "^6.2.1", "react-scripts": "5.0.0", </p>
                    <a href="https://github.com/Victoria00000/MoviesHouse" target="_blank" rel='noopener noreferrer' className="btn btn-light mx-2" style={{ background: '#d63384', color: 'white' }}> GitHub </a>
                    <a href="https://trendingmovieshouse.netlify.app/" target="_blank" rel='noopener noreferrer' className="btn btn-light mx-2" style={{ background: '#d63384', color: 'white' }}> Deploy </a>
                  </div>
                </div>

                <div className="cardbg-dark" style={{ width: '25rem' }}>
                  <img src={store} className="card-img-top" alt="proyect"/>
                  <div className="card-body">
                    <h5 className="card-title"> mySTORE </h5>
                    <p className="card-text"> FRONTEND proyect with REACT.JS consuming a public API (fakestoreapi.com).
                      And: "dependencies": "axios": "^0.26.1", "bootstrap": "^5.1.3", "font-awesome": "^4.7.0", "node-modules": "^1.0.1", "react": "^17.0.2", "react-dom": "^17.0.2", "react-loading-skeleton": "^3.0.3", "react-redux": "^7.2.6", "react-router": "^6.2.2", "react-router-dom": "^6.2.2", "react-scripts": "5.0.0", "redux": "^4.1.2"</p>
                    <a href="https://github.com/Victoria00000/E-COMMERCE-APP" target="_blank" rel='noopener noreferrer' className="btn btn-light mx-2" style={{ background: '#d63384', color: 'white' }}> GitHub </a>
                    <a href="https://velvety-starlight-bdc5ea.netlify.app/" target="_blank" rel='noopener noreferrer' className="btn btn-light mx-2" style={{ background: '#d63384', color: 'white' }}> Deploy </a>
                  </div>
                </div>

                <div className="cardbg-dark" style={{ width: '25rem' }}>
                  <img src={soon} className="card-img-top" alt="proyect" height='196px'/>
                  <div className="card-body">
                    <h5 className="card-title"> Coming soon... </h5>
                    <p className="card-text"> FRONTEND proyect with REACT.JS consuming a public API (fakestoreapi.com).
                      And: "dependencies": "axios": "^0.26.1", "bootstrap": "^5.1.3", "font-awesome": "^4.7.0", "node-modules": "^1.0.1", "react": "^17.0.2", "react-dom": "^17.0.2", "react-loading-skeleton": "^3.0.3", "react-redux": "^7.2.6", "react-router": "^6.2.2", "react-router-dom": "^6.2.2", "react-scripts": "5.0.0", "redux": "^4.1.2"</p>
                    <a href="#" className="btn btn-light mx-2" style={{ background: '#d63384', color: 'white' }}> GitHub </a>
                    <a href="#" className="btn btn-light mx-2" style={{ background: '#d63384', color: 'white' }}> Deploy </a>
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
