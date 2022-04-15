
export const Contact = () => {
  return (
    <div className="container mt-5">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label"> Name </label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label"> Tell me: </label>
          <textarea type="text" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn" style={{ background: '#d63384', color: 'white' }}> Send </button>
      </form>
      
      <a href="mailto:vvictoriaandres@gmail.com"> consult </a>
    </div>
  );
};