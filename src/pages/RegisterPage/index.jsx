import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGoogle, FaTwitter, FaGithub } from 'react-icons/fa';
import '../../css/authPages.css';

const RegisterPage = () => {
  return (
    <Container className="auth-container">
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="auth-tabs">
            <Link to="/login" className="tab">LOGIN</Link>
            <div className="tab active">REGISTER</div>
          </div>
          <Form className="auth-form">
            <h4 className="text-center mb-4">Sign up with:</h4>
            <div className="social-buttons">
              <Button variant="outline-danger"><FaGoogle /></Button>
            </div>
            <div className="divider">
              <span>or:</span>
            </div>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Username" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="password" placeholder="Repeat password" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check type="checkbox" label="I have read and agree to the terms" />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              SIGN UP
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;