import avatar from '../img/avatar.png';

export const Skills = () => {
  return (
    <>
      <div className="pt-4">
        <section className="about">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center py-3">
                <h1> Skills </h1>
                <hr />
              </div>
            </div>
          </div>
          <div className="container my-3">
            <div className="row">
              <div className="col-md-4 mx-auto mb-2">
                <img src={avatar} alt="avatar" height='300px' />
              </div>
              <div className='col-md-8 mx-auto'>
                <h1 className='display-5 mb-4'>
                  Victoria Andrés
                </h1>
                <p className='lead mb-4'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an imply dummy text of the printing and typesetting imply dummy text of imply dummy text of the printing and typesetting hhjkhkjh hjk
                </p>
                <h6> JavaScript </h6>
                <div className="progress mb-3">
                  <div className="progress-bar" role="progressbar" style={{ width: '80%', background: '#d63384' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h6> React.js </h6>
                <div className="progress mb-3">
                  <div className="progress-bar" role="progressbar" style={{ width: '80%', background: '#d63384' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h6> Git </h6>
                <div className="progress mb-3">
                  <div className="progress-bar" role="progressbar" style={{ width: '65%', background: '#d63384' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h6> English </h6>
                <div className="progress mb-3">
                  <div className="progress-bar" role="progressbar" style={{ width: '15%', background: '#d69384' }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"> TALKING </div>
                  <div className="progress-bar" role="progressbar" style={{ width: '15%', background: '#d66384' }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"> WRITING </div>
                  <div className="progress-bar" role="progressbar" style={{ width: '30%', background: '#d63384' }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"> LISTENING </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
