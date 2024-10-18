import React from 'react';
import { Navbar, Nav, Container, Button, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/homePage.css';
import Header from '../components/header';

const Homepage = () => {
  return (
    <div className="homepage">

      <Header/>

      <header className="text-white text-center py-5 mb-4">
        <Container>
          <h1>GOT A SICK KOI FISH?</h1>
          <p>Our mobile veterinary service is here to help pet fish in Ho Chi Minh City.</p>
          <Link to="/service">
          <Button variant="light" size="lg">REQUEST APPOINTMENT</Button>
          </Link>
        </Container>
      </header>

      {/* <Container classname="services-introduction">
        <h2 classname="text-center mb-4">Our Services for All Fish</h2>
        <Row>
          {['Common Koi Diseases', 'Proper Pond Maintenance', 'Nutrition for Koi Fish'].map((title, index) => (
            <Col md={4} key={index}>
              <Card className="mb-4">
                <Card.Img variant="top" src="{`/api/placeholder/300/200`}" />
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
      </Container> */}


      <Container className="articles-section">
        <h2 className="text-center mb-4">Latest Articles on Fish Care</h2>
        <Row>
          {['Common Koi Diseases', 'Proper Pond Maintenance', 'Nutrition for Koi Fish'].map((title, index) => (
            <Col md={4} key={index}>
              <Card className="mb-4">
                <Card.Img variant="top" src="{`/api/placeholder/300/200`}" />
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