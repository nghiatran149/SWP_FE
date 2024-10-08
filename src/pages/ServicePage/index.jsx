import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../../css/servicePage.css'
import Header from '../../components/header';
// function ServicePage({ }) {
    // return (
    //     <div>
    //         <Header/>
    //     </div>
    // )
const ServicePage = () => {
      return (
        <>
        <Header/>
        <Container className="aquatic-services">
          <Row className="main-service">
            <Col md={8}>
              <h1>Aquatic Veterinary Services offers a wide-range of services for your aquatic pets.</h1>
              <p>All of our services are delivered tank or pond side. We charge a small mileage fee for clients outside of Santa Cruz County. Estimates are available upon request.</p>
              <p>Our Ideal Client is one who is ready to learn and understands that pet fish deserve the same care and compassion as other pets. Our service strives to provide high level pet fish owner education and instills confidence in keeping pet fish happy and healthy.</p>
            </Col>
            <Col md={4}>
              <img src="https://cafishvet.com/wp-content/uploads/2024/09/Ultrasound-Jessie-Sanders-Fish-Vetranarian-1024x683.jpg" alt="Veterinarian checking fish pond" className="img-fluid" />
            </Col>
          </Row>
    
          <Row className="service-options">
            <Col md={6}>
              <h2>Pond Subscription Service</h2>
              <img src="/path-to-your-image/garden-pond.jpg" alt="Garden pond" className="img-fluid" />
              <p>Sign up and simply enjoy your pond! Our veterinary service will assess your pond twice a year to ensure fish health and wellbeing. Enjoy the savings and peace of mind that your fish are in the best of health without having to call and schedule an appointment.</p>
              <Button variant="outline-primary">SIGN UP FOR SUBSCRIPTION SERVICE</Button>
            </Col>
            <Col md={6}>
              <h2>Pond/Tank Package</h2>
              <img src="/path-to-your-image/koi-fish.jpg" alt="Koi fish in a pond" className="img-fluid" />
              <p>Get the most for your money and get a full pond or tank assessment. All packages include water quality testing and fish physicals under sedation for up to 3 fish of your choosing. This is our most popular and economic option.</p>
              <p>Pricing based on size, tanks ~$200, ponds ~$450-550, + mileage. Bettas are ~$100 + mileage (due to size and limited diagnostics).</p>
              <Button variant="outline-primary">REQUEST APPOINTMENT</Button>
            </Col>
          </Row>
    
          <Row className="telehealth-services">
            <Col md={6}>
              <h2>Aquatic Telehealth Consult</h2>
              <img src="/path-to-your-image/fish-on-screen.jpg" alt="Fish on computer screen" className="img-fluid" />
              <p>Virtual consultations are available to all pet fish owners. Please note, due to state veterinary laws, unless you are a current client seen by our veterinarian within the last year, we cannot give you a diagnosis or treatment options during this appointment. If additional care is required, we will do our best to find you a veterinarian in your area.</p>
              <p>Price $150</p>
              <Button variant="outline-primary">ORDER CONSULTATION</Button>
            </Col>
            <Col md={6}>
              <h2>Aquatic Veterinary Consult</h2>
              <img src="/path-to-your-image/vet-consultation.jpg" alt="Veterinary consultation" className="img-fluid" />
              <p>We offer consultation services to other veterinary professionals looking for guidance and assistance with pet fish cases. We are here to help virtually demonstrate diagnostic techniques, interpret diagnostics, differentiate diagnoses and develop treatment plans. This product is only available to veterinary professionals whose licensing and employment can be verified.</p>
              <p>Price $150</p>
              <Button variant="outline-primary">ORDER CONSULTATION</Button>
            </Col>
          </Row>
        </Container>
        </>
      );
}

export default ServicePage;