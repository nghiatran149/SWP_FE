import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/authPages.css';

const ForgotPassword = () => {
    return (
        <Container className="auth-container">
            <Row className="justify-content-center">
                <Col md={6}>
                    <div className="auth-tabs">
                        <div className="tab active">FORGOT PASSWORD</div>
                    </div>
                    <Form className="auth-form">
                        <h4 className="text-center mb-4">Reset your password:</h4>
                        <Form.Group className="mb-3">
                            <Form.Control type="email" placeholder="Enter your account email" />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100">
                            Send reset password email
                        </Button>
                        <div className="text-center mt-3">
                            <Link to="/login">Back to Login</Link>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default ForgotPassword;