import React from 'react';
import { Navbar, Nav, Container, Button, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/homePage.css';
import logo from '../../assets/logoswp.jpg';
import Header from '../../components/header';

const Homepage = () => {
  return (
    <div className="homepage">
      {/* <Navbar bg="light" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              alt="Aquatic Veterinary Services Logo"
              // className="d-inline-block align-top"
              className="logo"
            />
            {' '}
            Koi Veterinary Service Center
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#about">ABOUT US</Nav.Link>
              <Nav.Link href="#faq">FAQ</Nav.Link>
              <Nav.Link href="/service">SERVICES</Nav.Link>
            </Nav>
            <Nav>
              <Link to="/login" className="btn btn-outline-primary me-2">Login</Link>
              <Link to="/register" className="btn btn-primary">Register</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}

      <Header/>

      <header className="text-white text-center py-5 mb-4">
        <Container>
          <h1>Got a sick koi fish?</h1>
          <p>Our mobile veterinary service is here to help pet fish in Ho Chi Minh City.</p>
          <Button variant="light" size="lg">REQUEST APPOINTMENT</Button>
        </Container>
      </header>

      <Container className="articles-section">
        <h2 className="text-center mb-4">Latest Articles on Fish Care</h2>
        <Row>
          {['Common Koi Diseases', 'Proper Pond Maintenance', 'Nutrition for Koi Fish'].map((title, index) => (
            <Col md={4} key={index}>
              <Card className="mb-4">
                <Card.Img variant="top" src={`/api/placeholder/300/200`} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.
                  </Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Homepage;