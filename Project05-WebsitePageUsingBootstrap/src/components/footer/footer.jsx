import { Container, Row, Col, Nav } from "react-bootstrap";
import { FaFacebookF, FaGooglePlusG, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-5">
      <Container>
        <Row className="gy-4">
          {/* Logo & Social */}
          <Col md={3}>
            <h4 className="fw-bold">WHISTLE</h4>
            <p className="small">
              The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
            </p>

            <div className="d-flex gap-3 mt-3 fs-5">
              <FaFacebookF />
              <FaGooglePlusG />
              <FaTwitter />
              <FaYoutube />
            </div>
          </Col>

          {/* Useful Links */}
          <Col md={3}>
            <h5 className="fw-semibold mb-3">USEFUL LINKS</h5>
            <Nav className="flex-column footer-links">
              <Nav.Link href="#">Membership Offers</Nav.Link>
              <Nav.Link href="#">Training Schedule</Nav.Link>
              <Nav.Link href="#">Inter Competitions</Nav.Link>
              <Nav.Link href="#">Awards & Trophies</Nav.Link>
            </Nav>
          </Col>

          {/* Latest Posts */}
          <Col md={3}>
            <h5 className="fw-semibold mb-3">LATEST POSTS</h5>
            <p className="small mb-2">BASKETBALL TEAM - 11 Feb 2015</p>
            <p className="small mb-2">TEE SHOT ZONE - 11 Feb 2015</p>
          </Col>

          {/* About */}
          <Col md={3}>
            <h5 className="fw-semibold mb-3">ABOUT WHISTLE</h5>
            <p className="small mb-1">Mon–Fri: 04:00–12:00</p>
            <p className="small mb-1">Sat: 14:00–21:00</p>
            <p className="small mb-1">Sun: Holiday</p>
          </Col>
        </Row>

        {/* Bottom Line */}
        <hr className="border-secondary mt-4" />
        <p className="text-center small m-0">
          © 2016 - WHISTLE. Design: Design Themes
        </p>
      </Container>

      {/* Custom Footer CSS */}
      <style>{`
        .footer-links .nav-link {
          color: #ccc;
          padding-left: 0;
        }
        .footer-links .nav-link:hover {
          color: white;
        }
      `}</style>
    </footer>
  );
}
