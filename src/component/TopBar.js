import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
class TopBar {
  render() {
    return (
      <>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Home</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Pesan</Nav.Link>
              <Nav.Link href="#features">Status</Nav.Link>
              <Nav.Link href="#pricing">Panggilan</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default TopBar;
