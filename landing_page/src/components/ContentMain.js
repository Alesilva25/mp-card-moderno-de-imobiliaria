import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const ContentMain = () => {
  return (
    <div className="container mb-10" style={{ zIndex: 500 }}>
      <div 
        className="row align-items-center rounded shadow p-4"
        style={{ backgroundColor: "#F8F8F8" }}
      >
        <div className="col-12 col-md-6">
          <h2
            className="fw-bold mb-4 text-center text-md-start"
            style={{
              color: "#000000",
              fontFamily: "Poppins, Sans-serif",
              fontSize: "2rem", 
              fontWeight: "600",
              lineHeight: "1.2",
            }}
          >
            O que você irá aprender?
          </h2>
          <ul className="list-unstyled">
            {[
              "Como preencher as vagas em aberto",
              "Como montar uma lista de espera",
              "Como fidelizar as famílias e fazer com que elas façam um bom boca a boca",
              "Como identificar os seus materiais",
              "Material de apoio para apresentação da escola.",
              "E muito mais!",
            ].map((item, index) => (
              <li key={index} className="d-flex align-items-center mb-2">
                <FontAwesomeIcon icon={faCheck} className="text-danger me-2" 
                  
                />
                <span style={{ fontSize: "1rem" }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-12 col-md-6 text-center mt-4 mt-md-0">
          <img
            src="https://rezeyle.com.br/wp-content/uploads/2023/12/mulher-corporativa-bem-sucedida-demonstrando-produto-apontando-para-o-espaco-vazio-mostrando-propaganda-e-sorrindo-em-pe-de-terno-sobre-fundo-branco-1536x1024.jpg"
            alt="Mulher sorrindo"
            className="img-fluid rounded"
            style={{ maxHeight: "400px", width: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ContentMain;
