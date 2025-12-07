import { Container, Row, Col } from "react-bootstrap";
import user1 from "../../assets/jeniffer.jpg";
import user2 from "../../assets/jenniffer.jpg";
import "../../App.css";

export default function Testimonials() {
  const data = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at.",
      img: user1,
      name: "JENIFFER ANISTON",
      role: "Fitness Enthusiast, BELGRAM",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at.",
      img: user2,
      name: "JENIFFER ANISTON",
      role: "Fitness Enthusiast, BELGRAM",
    },
  ];

  return (
    <Container className="my-5 text-center">
      <h2 className="fw-bold">MEMBER THOUGHTS</h2>
      <p className="text-muted">SOME WORDS FROM MEMBERS</p>

      <Row className="mt-5">
        {data.map((item, i) => (
          <Col md={6} key={i}>
            <div className="testimonial-box">

              <p className="testimonial-text">{item.text}</p>

              <div className="bubble-pointer"></div>
            </div>

            <div className="profile-box">
              <img src={item.img} className="profile-img" />
              <div>
                <h5 className="fw-bold m-0">{item.name}</h5>
                <small className="text-muted">{item.role}</small>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
