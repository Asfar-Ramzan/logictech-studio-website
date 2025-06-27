import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import { Home, Info, Briefcase, Layers, FileText, Users, Mail, Sun, Moon } from 'lucide-react';

export default function AppNavbar({ darkMode, toggleDarkMode }) {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);
  const handleClose = () => setShow(false);

  return (
    <Navbar expand="lg" className="shadow-sm" bg={darkMode ? 'dark' : 'light'} variant={darkMode ? 'dark' : 'light'}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold d-flex align-items-center">
          <img src="/logo192.png" alt="Logo" width="30" className="me-2" />
          Logictech Studio
        </Navbar.Brand>
        <Navbar.Toggle onClick={handleToggle} />
        <Navbar.Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="ms-auto text-center text-lg-start d-flex align-items-center gap-3">
              <Nav.Link as={Link} to="/" onClick={handleClose}><Home size={18} className="me-1" /> Home</Nav.Link>
              <Nav.Link as={Link} to="/about" onClick={handleClose}><Info size={18} className="me-1" /> About</Nav.Link>
              <Nav.Link as={Link} to="/services" onClick={handleClose}><Briefcase size={18} className="me-1" /> Services</Nav.Link>
              <Nav.Link as={Link} to="/portfolio" onClick={handleClose}><Layers size={18} className="me-1" /> Portfolio</Nav.Link>
              <Nav.Link as={Link} to="/blog" onClick={handleClose}><FileText size={18} className="me-1" /> Blog</Nav.Link>
              <Nav.Link as={Link} to="/careers" onClick={handleClose}><Users size={18} className="me-1" /> Careers</Nav.Link>
              <Nav.Link as={Link} to="/contact" onClick={handleClose}><Mail size={18} className="me-1" /> Contact</Nav.Link>
              <Nav.Link onClick={toggleDarkMode} title="Toggle Mode">
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
