import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            <p>AlphaProShop &copy; {currentYear}</p>
            <p> &nbsp; Created by: Mohammad Asif</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
