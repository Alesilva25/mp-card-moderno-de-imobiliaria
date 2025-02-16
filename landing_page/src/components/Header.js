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
      backgroundImage: "url('https://www.patronatoplbm.com.br/wp-content/uploads/2023/06/formacao_como-escolher-a-melhor-escola-para-os-filhos.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "80vh",
      width: "100%",
      padding: "2rem",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    }}
  >
    <h1 className="fw-bold fadeInUp" style={{fontSize: "83px"}}>Gestor escolar, bora matricular?</h1>
    <p className="lead fadeInUp" style={{ animationDelay: "0.4s" }}>
      Você quer aprender como matricular mais e ainda criar uma lista de
      espera para futuras turmas?
    </p>

    <h2 className="fadeInUp" style={{ 
      animationDelay: "0.8s",
      border: "2px solid #ECA9AE",
      background:"#FFFFFF91",
      margin:"11px 400px",
      padding:"11px",
      borderRadius:"28px",
      boxShadow:"0px 0px 17px 0px rgba(0,0,0,0.5)",
      width:"1050px",
      color:"#000000",
      fontFamily:"Poppins, Sans-serif",
      fontSize:"18px",
      fontWeight:"600",
      lineHeight:"25px"
      }}>
      Com o meu passo a passo isso será possível!
    </h2>

    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4 text-center fadeInUp icon-hover">
          <FontAwesomeIcon 
            icon={faSchool} 
            size="3x" 
            className="mb-3 icon-effect"
          />
          <h3>Conteúdos assertivos para alavancar matrículas</h3>
        </div>

        <div className="col-md-4 text-center fadeInUp icon-hover" style={{ animationDelay: "0.2s" }}>
          <FontAwesomeIcon icon={faVideo} size="3x" className="mb-3 icon-effect" />
          <h3>Vídeos explicativos para aplicar cada conteúdo</h3>
        </div>

        <div className="col-md-4 text-center fadeInUp icon-hover" style={{ animationDelay: "0.4s" }}>
          <FontAwesomeIcon icon={faFileAlt} size="3x" className="mb-3 icon-effect" />
          <h3>Bônus: Drive com materiais editáveis!</h3>
        </div>

      </div>
    </div>

    <a
      href="https://pay.kiwify.com.br/93AaDSQ"
      className="btn btn-light btn-lg mt-5 fadeInDown position-relative shadow-sm"
      style={{
        animationDelay: "0.8s",
        border: "2px solid #ECA9AE",
        background: "#FFFFFF91",
        margin: "11px 400px",
        padding: "11px",
        borderRadius: "28px",
        boxShadow: "0px 0px 17px 0px rgba(0,0,0,0.5)",
        color: "#000000",
        fontFamily: "Poppins, Sans-serif",
        fontSize: "18px",
        fontWeight: "600",
        lineHeight: "25px",
        transition: "transform 0.3s ease-in-out"
      }}
      onMouseEnter={(e) => e.target.style.transform = "translateY(-10px)"}
      onMouseLeave={(e) => e.target.style.transform = "translateY(0)"}     
    >
      Eu quero saber mais!
    </a>
  </section>
  );
};



export default Header;
