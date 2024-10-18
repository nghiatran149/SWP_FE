import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import '../css/authPages.css';

const LoginPage = () => {
  return (
    <Container className="auth-container">
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="auth-tabs">
            <div className="tab active">LOGIN</div>
            <Link to="/register" className="tab">REGISTER</Link>
          </div>
          <Form className="auth-form">
            <h4 className="text-center mb-4">Sign in with:</h4>
            <div className="social-buttons">
              <Button variant="outline-danger"><FaGoogle /></Button>
            </div>
            <div className="divider">
              <span>or:</span>
            </div>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              SIGN IN
            </Button>
            <div className="text-center mt-3">
              <Link to="/forgot">Forgot password?</Link>
            </div>
          </Form>
          <div className="text-center mt-3">
            Not a member? <Link to="/register">Register</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;