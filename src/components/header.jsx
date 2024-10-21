import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/header.css';
import logoswp from '../assets/logoswp.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { MdAccountCircle } from "react-icons/md";
import Dropdown from 'react-bootstrap/Dropdown';
import { Logout } from '../store/user/action';


export default function Header() {
  const uid = useSelector((state) => state.USER.uid);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem("accessToken")
    dispatch(Logout())
    navigate("/")
  }
  return (
    <div>
      <Navbar bg="light" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <Link to="/">
              <img
                src={logoswp}
                alt="Koi Veterinary Service Center Logo"
                className="logo"
              />
            </Link>
            <span className="ms-3">Koi Veterinary Service Center</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#about">ABOUT US</Nav.Link>
              <Nav.Link href="/service">SERVICES</Nav.Link>
            </Nav>
            <Nav className="auth-buttons">

              {uid ? <div>
                <Dropdown>
                  <Dropdown.Toggle as="div" id="dropdown-basic" style={{ border: 'none', background: 'transparent', padding: 0 }}>
                    <MdAccountCircle
                      style={{
                        fontSize: "1.8rem",
                        color: "#333",
                        cursor: "pointer",
                        transition: "color 0.3s ease",
                        "&:hover": {
                          color: "#007bff",
                        }
                      }}
                    />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={handleLogout}>Log Out</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div> : <><Link to="/login" className="btn-login me-2">Login</Link>
                <Link to="/register" className="btn-register">Register</Link></>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}


// import React from 'react';
// import { Navbar, Nav, Container, Button, Row, Col, Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../css/header.css';
// import logo from '../assets/logoswp.jpg'

// export default function Header() {
//   return (
//     <div>
//       <Navbar bg="light" expand="lg" className="mb-4">
//         <Container>
//           <Navbar.Brand href="/">
//             <Link to="/">
//             <img
//               src={logo}
//               alt="Koi Veterinary Service Center Logo"
//               className="logo"
//             />
//             </Link>
//             {' '}
//             Koi Veterinary Service Center
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link href="#about">ABOUT US</Nav.Link>
//               <Nav.Link href="#faq">FAQ</Nav.Link>
//               <Nav.Link href="/service">SERVICES</Nav.Link>
//             </Nav>
//             <Nav>
//               {/* <Link to="/login" className="btn btn-outline-primary me-2">Login</Link>
//               <Link to="/register" className="btn btn-primary">Register</Link> */}
//                 <Link to="/login" className="btn-login">Login</Link>
//                 <Link to="/register" className="btn-register">Register</Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   )
// }
