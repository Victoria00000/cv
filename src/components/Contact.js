import cv from "../documents/CV-Victoria Andrés.docx";
import ecv from "../documents/CV-English.docx";

export const Contact = () => {
  return (
    <div className="container d-flex flex-column align-items-center mt-5">
      <a
        href="mailto:vvictoriaandres@gmail.com"
        className="btn btn-light mt-3 mx-2 p-3 fs-5"
        style={{ background: "#d63384", color: "white", maxWidth: "200px" }}
      >
        {" "}
        Enviame un email{" "}
      </a>

      <div
        href="mailto:vvictoriaandres@gmail.com"
        className="btn btn-light mt-3 mx-2 p-3 fs-5"
        style={{ background: "black", color: "#d63384", maxWidth: "200px" }}
      >
        {" "}
        Arg. 2477-367248{" "}
      </div>

      <a
        href={cv}
        download
        className="btn btn-light mt-3 mx-2 p-3 fs-5"
        style={{
          background: "#d63384",
          color: "white",
          maxWidth: "200px",
          minWidth: "190px",
        }}
      >
        CV español
      </a>

      <a
        href={ecv}
        download
        className="btn btn-light mt-3 mx-2 p-3 fs-5"
        style={{
          background: "#d63384",
          color: "white",
          maxWidth: "200px",
          minWidth: "190px",
        }}
      >
        English CV
      </a>
    </div>
  );
};
