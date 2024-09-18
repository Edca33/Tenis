import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/">Tienda de tenis</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <NavDropdown title="Marcas" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Nike">Nike</NavDropdown.Item>
              <NavDropdown.Item href="/Vans">
                Vans
              </NavDropdown.Item>
              <NavDropdown.Item href="/Adidas">Adidas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Puma">Puma</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/Marcas">Todas las Marcas</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;