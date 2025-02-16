import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <Container>
        &copy; {new Date().getFullYear()} Gestão Escolar Humanizada. Todos os direitos reservados.
      </Container>
    </footer>
  );
};

export default Footer;