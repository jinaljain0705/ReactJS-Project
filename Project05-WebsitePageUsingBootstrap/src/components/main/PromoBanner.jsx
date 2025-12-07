import { Container, Row, Col, Button } from "react-bootstrap";
import { FaRunning, FaUserFriends } from "react-icons/fa";
import { MdSportsScore } from "react-icons/md";
import Cyclist from "../../assets/cycleRide.jpg";
import "../../App.css";

export default function PromoBanner() {
  return (
    <div className="promo-wrapper">
      <div className="promo-left">
        <img src={Cyclist} alt="Cyclist" />
      </div>

      <div className="promo-right text-white">
        <Container>
          <Row className="text-center mb-4 icon-row">
            <Col>
              <FaRunning className="promo-icon" />
              <p>CHOOSE YOUR SPORT</p>
            </Col>

            <Col>
              <FaUserFriends className="promo-icon" />
              <p>TRAIN BY PROFESSIONAL</p>
            </Col>

            <Col>
              <MdSportsScore className="promo-icon" />
              <p>BECOME A PRO</p>
            </Col>
          </Row>

          <h2 className="fw-bold mb-3">
            THE BEST SPORTS THEME WITH ALL IN-BUILT FEATURES <br />
            TO MAKE AN AMAZING WEBSITE
          </h2>

          <p className="mb-4">
            WHISTLE is a Trendy Theme with the latest features and stays updated
            to the latest technological equipments.
          </p>

          <Button variant="light" className="me-3 px-4">
            JOIN US
          </Button>
          <Button variant="outline-light" className="px-4">
            VIEW PLANS
          </Button>
        </Container>
      </div>
    </div>
  );
}
