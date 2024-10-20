import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import '../css/authPages.css';
import { accountService } from '../services/accountServices';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await accountService.loginUser({ email, password });
      console.log('Login successful', response.data);

      // Assuming the response structure matches your API
      const { token, user } = response.data;

      // Store the token
      localStorage.setItem('authToken', token);

      // Store user info if needed
      localStorage.setItem('user', JSON.stringify(user));

      // Handle "Remember me"
      if (remember) {
        localStorage.setItem('rememberUser', email);
      } else {
        localStorage.removeItem('rememberUser');
      }

      // Navigate to homepage
      navigate('/');

    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred during login');
    }
  };

  return (
    <Container className="auth-container">
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="auth-tabs">
            <div className="tab active">LOGIN</div>
            <Link to="/register" className="tab">REGISTER</Link>
          </div>
          <Form className="auth-form" onSubmit={handleSubmit}>
            <h4 className="text-center mb-4">Sign in with:</h4>
            <div className="social-buttons">
              <Button variant="outline-danger"><FaGoogle /></Button>
            </div>
            <div className="divider">
              <span>or:</span>
            </div>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form.Group className="mb-3">
              <Form.Control 
                type="email" 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check 
                type="checkbox" 
                label="Remember me" 
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              SIGN IN
            </Button>
            <div className="text-center mt-3">
              <Link to="/forgot">Forgot password?</Link>
            </div>
          </Form>
          <div className="text-center mt-3">
            Don't have an account? <Link to="/register">Register</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;