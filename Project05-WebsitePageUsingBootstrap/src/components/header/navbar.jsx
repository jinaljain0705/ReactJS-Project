import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
      <Container>

        <Navbar.Brand href="#" className="fw-bold fs-3 text-uppercase">
          WH<i style={{ color: "#4db2ff" }}>i</i>STLE
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="mainNav" />

        <Navbar.Collapse id="mainNav">
          <Nav className="mx-auto gap-4 fw-bold text-uppercase">

            <Nav.Link href="#" style={{ color: "#4db2ff" }}>Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Blog</Nav.Link>
            <Nav.Link href="#">Gallery</Nav.Link>
            <Nav.Link href="#">Events</Nav.Link>
            <Nav.Link href="#">Pages</Nav.Link>
            <Nav.Link href="#">Shop</Nav.Link>

          </Nav>

          <Nav className="ms-auto">
            <Nav.Link href="#" className="position-relative">

              <FaShoppingCart size={20} />

              <Badge bg="primary" className="position-absolute top-0 start-100 translate-middle">
                0
              </Badge>

            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

