import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool, faVideo } from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faSchool, faVideo, faFileAlt);

const Header = () => {
  return (
    <section
      className="d-flex flex-column justify-content-center align-items-center text-center text-white"
      style={{
        backgroundImage:
          "url('https://www.patronatoplbm.com.br/wp-content/uploads/2023/06/formacao_como-escolher-a-melhor-escola-para-os-filhos.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "80vh",
        width: "100%",
        padding: "2rem",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
      }}
    >

      <h1
        className="fw-bold fadeInUp"
        style={{
          fontSize: "5rem",
          marginBottom: "1rem",
        }}
      >
        Gestor escolar, bora matricular?
      </h1>


      <p
        className="lead fadeInUp mb-4"
        style={{ animationDelay: "0.4s" }}
      >
        Você quer aprender como matricular mais e ainda criar uma lista de
        espera para futuras turmas?
      </p>

      <h2
        className="fadeInUp px-3 py-2 rounded shadow-sm"
        style={{
          animationDelay: "0.8s",
          border: "2px solid #ECA9AE",
          background: "#FFFFFF91",
          color: "#000000",
          fontFamily: "Poppins, Sans-serif",
          fontSize: "1.125rem",
          fontWeight: "600",
          lineHeight: "1.5",
          width: "50%",
          margin: "0 auto",
        }}
      >
        Com o meu passo a passo isso será possível!
      </h2>


      <div className="container mt-5">
        <div className="row gy-4"> 
          <div className="col-12 col-md-4 text-center fadeInUp icon-hover">
            <FontAwesomeIcon
              icon={faSchool}
              size="3x"
              className="mb-3 icon-effect"
            />
            <h3 className="fs-5">Conteúdos assertivos para alavancar matrículas</h3>
          </div>
          <div
            className="col-12 col-md-4 text-center fadeInUp icon-hover"
            style={{ animationDelay: "0.2s" }}
          >
            <FontAwesomeIcon
              icon={faVideo}
              size="3x"
              className="mb-3 icon-effect"
            />
            <h3 className="fs-5">Vídeos explicativos para aplicar cada conteúdo</h3>
          </div>
          <div
            className="col-12 col-md-4 text-center fadeInUp icon-hover"
            style={{ animationDelay: "0.4s" }}
          >
            <FontAwesomeIcon
              icon={faFileAlt}
              size="3x"
              className="mb-3 icon-effect"
            />
            <h3 className="fs-5">Bônus: Drive com materiais editáveis!</h3>
          </div>
        </div>
      </div>

      <a
        href="d"
        className="btn btn-light btn-lg mt-5 fadeInDown position-relative shadow-sm d-block mx-auto"
        style={{
          animationDelay: "0.8s",
          border: "2px solid #ECA9AE",
          background: "#FFFFFF91",
          padding: "0.6875rem 1.5rem",
          borderRadius: "1.75rem",
          boxShadow: "0px 0px 1rem rgba(0,0,0,0.5)",
          color: "#000000",
          fontFamily: "Poppins, Sans-serif",
          fontSize: "1.125rem", 
          fontWeight: "600",
          lineHeight: "1.5",
          transition: "transform 0.3s ease-in-out",
          maxWidth: "80%"
        }}
        onMouseEnter={(e) => (e.target.style.transform = "translateY(-10px)")}
        onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
      >
        Eu quero saber mais!
      </a>
    </section>
  );
};

export default Header;