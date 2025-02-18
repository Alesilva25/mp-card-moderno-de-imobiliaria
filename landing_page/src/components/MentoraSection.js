import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faTable, faBookOpen, faUserEdit, faQrcode, faFileSignature, faFolderOpen } from '@fortawesome/free-solid-svg-icons';

const MentoraSection = () => {
  const bonusItems = [
    { title: "Folder editável", icon: faFileAlt },
    { title: "Planilha de controle de alunos", icon: faTable },
    { title: "Revistinha editável", icon: faBookOpen },
    { title: "Ficha de matrícula", icon: faUserEdit },
    { title: "QR code para balcão", icon: faQrcode },
    { title: "Papel timbrado", icon: faFileSignature },
    { title: "Portfólio editável", icon: faFolderOpen }
  ];

  return (
    <section id="mentora" className="mentora-section py-5">
      <Container>
        <h2 className="text-center mb-5 fw-bold">🎁 Bônus: Drive com materiais editáveis!</h2>

        <Row className="g-4">
          {bonusItems.map((item, index) => (
            <Col key={index} xs={12} sm={6} md={4}>
              <Card className="shadow-sm text-center p-3">
                <FontAwesomeIcon icon={item.icon} size="2x" className="text-primary mb-3" />
                <Card.Body style={{ minHeight: "100px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <Card.Title>{item.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>


        <h2 className="text-center mt-5 mb-4 fw-bold">👩‍🏫 Conheça a sua mentora</h2>
        <Row className="justify-content-center text-center">
          <Col xs={12} md={6}>
            <h3 className="fw-bold">Camila Viana</h3>
            <p>
              Eu me chamo Camila Viana e a minha escola é referência em gestão humanizada e lista de espera! 
              São 10 anos de experiência em Gestão Escolar!
            </p>
            <div className="d-flex justify-content-center gap-3 mt-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin fs-3 text-primary"></i>
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-whatsapp fs-3 text-success"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram fs-3 text-danger"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MentoraSection;
