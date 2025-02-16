import React from 'react';
import { Container, Row, Col, Image,Card } from 'react-bootstrap';

const MentoraSection = () => {
  return (
    <section id="mentora" className="mentora-section py-5">
      <Container>
      <h2 className="text-center mb-5">Bônus: Drive com materiais editáveis!</h2>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Folder editável</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Planilha de controle de alunos</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Revistinha editável</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Ficha de matrícula</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>QR code para balcão</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Papel timbrado</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Portfólio editável</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <h2 className="text-center mb-5">Conheça a sua mentora</h2>
        <Row className="justify-content-center">
          <Col md={6}>
            <Image src="https://via.placeholder.com/300x300" alt="Camila Viana" roundedCircle className="mb-4" />
            <h3 className="text-center">Camila Viana</h3>
            <p className="text-center">
              Eu me chamo Camila Viana e a minha escola é referência em gestão humanizada e lista de espera! 10 anos de experiência em Gestão Escolar!
            </p>
            <div className="text-center">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin me-3"></i>
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-whatsapp me-3"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MentoraSection;