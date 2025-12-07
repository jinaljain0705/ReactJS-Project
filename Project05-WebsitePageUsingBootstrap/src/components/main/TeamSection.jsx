import { Container, Row, Col, Card } from "react-bootstrap";

import RonImg from "../../assets/TeamSection/Ron.jpg";
import AliceImg from "../../assets/TeamSection/Alice.jpg";
import NevilImg from "../../assets/TeamSection/Nevil.jpg";
import DoraImg from "../../assets/TeamSection/Dora.jpg";

const teamMembers = [
  { name: "Ron Hatson", activity: "Cycling", img: RonImg },
  { name: "Alice Potter", activity: "Running", img: AliceImg },
  { name: "Nevil Cruise", activity: "Running", img: NevilImg },
  { name: "Dora Yunis", activity: "Jogging", img: DoraImg },
];

export default function TeamSection() {
  return (
    <Container className="text-center my-5">
      <h2 className="fw-bold">OUR TEAM</h2>
      <p className="text-muted mb-4">MEET OUR TEAM</p>

      <Row className="g-4">
        {teamMembers.map((member, idx) => (
          <Col key={idx} md={3} sm={6}>
            <Card className="shadow-sm border-0">
              <Card.Img
                variant="top"
                src={member.img}
                style={{ height: "250px", objectFit: "fit" }}/>
              <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Text className="text-secondary">
                  {member.activity}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
