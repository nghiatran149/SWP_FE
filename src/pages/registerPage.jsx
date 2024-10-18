import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import '../css/authPages.css';

// const RegisterPage = () => {
//   return (
//     <Container className="auth-container">
//       <Row className="justify-content-center">
//         <Col md={6}>
//           <div className="auth-tabs">
//             <Link to="/login" className="tab">LOGIN</Link>
//             <div className="tab active">REGISTER</div>
//           </div>
//           <Form className="auth-form">
//             <h4 className="text-center mb-4">Sign up with:</h4>
//             <div className="social-buttons">
//               <Button variant="outline-danger"><FaGoogle /></Button>
//             </div>
//             <div className="divider">
//               <span>or:</span>
//             </div>
//             <Form.Group className="mb-3">
//               <Form.Control type="email" placeholder="Email" />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Control type="password" placeholder="Password" />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Control type="password" placeholder="Confirm Password" />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Control type="text" placeholder="Full Name" />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Control type="text" placeholder="Address" />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Control type="text" placeholder="Country" />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Select name="gender">
//                 <option value="">Select Gender</option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//                 <option value="other">Other</option>
//               </Form.Select>
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Control type="date" placeholder="Birth Date" />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Control type="number" placeholder="Phone Number" />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Check type="checkbox" label="I have read and agree to the terms" />
//             </Form.Group>
//             <Button variant="primary" type="submit" className="w-100">
//               SIGN UP
//             </Button>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default RegisterPage;


const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    address: '',
    country: '',
    gender: '',
    birthDate: '',
    phoneNumber: '',
  });

  const [phoneError, setPhoneError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handlePhoneChange = (e) => {
    const { value } = e.target;
    // Chỉ cho phép nhập số
    const numericValue = value.replace(/\D/g, '');
    
    // Kiểm tra regex cho số điện thoại Việt Nam
    const phoneRegex = /^(0|84)(3|5|7|8|9)[0-9]{8}$/;
    
    if (numericValue === '' || phoneRegex.test(numericValue)) {
      setPhoneError('');
    } else {
      setPhoneError('Please enter a valid Vietnamese phone number');
    }

    setFormData(prevState => ({
      ...prevState,
      phoneNumber: numericValue
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phoneError) {
      console.log(formData);
      // Xử lý gửi form
    }
  };

  return (
    <Container className="auth-container">
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="auth-tabs">
            <Link to="/login" className="tab">LOGIN</Link>
            <div className="tab active">REGISTER</div>
          </div>
          <Form className="auth-form" onSubmit={handleSubmit}>
            <h4 className="text-center mb-4">Sign up with:</h4>
            <div className="social-buttons">
              <Button variant="outline-danger"><FaGoogle /></Button>
            </div>
            <div className="divider">
              <span>or:</span>
            </div>
            <Form.Group className="mb-3">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Full Name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Address" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Country" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Select 
                name="gender" 
                value={formData.gender} 
                onChange={handleInputChange}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="date" placeholder="Birth Date" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handlePhoneChange}
                isInvalid={!!phoneError}
              />
              <Form.Control.Feedback type="invalid">
                {phoneError}
              </Form.Control.Feedback>
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