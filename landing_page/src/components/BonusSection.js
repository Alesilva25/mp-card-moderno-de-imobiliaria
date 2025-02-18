import React from 'react';
import { Container} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";


const BonusSection = () => {
  const scrollToMentora = () => {
    const mentoraSection = document.getElementById("mentora");
    if (mentoraSection) {
      mentoraSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <section id="bonus" className="py-5t d-flex flex-column justify-content-center text-center" style={{backgroundColor: "#F7DADC", minHeight:"35rem"}}>
      <Container>
      <FontAwesomeIcon icon={faAngleDown} size="3x" className="mb-5 btn-lg "
        style={{
          transition: "transform 0.3s ease-in-out",
          animationDelay: "0.8s",
          cursor:"pointer"
        }}
        onMouseEnter={(e) => (e.target.style.transform = "translateY(-10px)")}
        onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
        onClick={scrollToMentora}
      />
      <h1 className="fw-bold fadeInUp" style={{fontSize: "36px"}}>Para cada tema você receberá um vídeo explicativo mostrando como colocá-lo em prática de forma clara e eficiente</h1>
      <a
      href="https://pay.kiwify.com.br/93AaDSQ"
      className="btn btn-light btn-lg mt-4 fadeInDown"
      style={{
        animationDelay: "0.8s",
        border: "2px solid #ECA9AE",
        background:"#FFFFFF91",
        margin:"11px auto",
        padding:"11px",
        borderRadius:"28px",
        boxShadow:"0px 0px 17px 0px rgba(0,0,0,0.5)",
        color:"#000000",
        fontFamily:"Poppins, Sans-serif",
        fontSize:"18px",
        fontWeight:"600",
        lineHeight:"25px",
        transition: "transform 0.3s ease-in-out"
      }}
      onMouseEnter={(e) => e.target.style.transform = "translateY(-10px)"}
      onMouseLeave={(e) => e.target.style.transform = "translateY(0)"}    
    >
      Quero comprar!
    </a>
      </Container>
    </section>
  );
};

export default BonusSection;