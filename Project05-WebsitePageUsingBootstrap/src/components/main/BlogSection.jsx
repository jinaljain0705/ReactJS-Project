import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import golfImg from "../../assets/golf.jpg";
import cyclingImg from "../../assets/cycling.jpg";
import basketballImg from "../../assets/basketball.jpg";

const blogs = [
  {
    title: "TEE SHOT ZONE",
    date: "11 Feb 2015",
    img: golfImg,
    desc: "Maecenas dapibus quis nisl vitae faucibus...",
    meta: "by ram / Gap Wedge / 1 Comment",
  },
  {
    title: "CYCLING ADVENTURE",
    date: "11 Feb 2015",
    img: cyclingImg,
    desc: "Lorem ipsum dolor sit amet...",
    meta: "by ram / slopes / 1 Comment",
  },
  {
    title: "BASKETBALL TEAM",
    date: "11 Feb 2015",
    img: basketballImg,
    desc: "In efficitur nisi et condimentum mattis...",
    meta: "by ram / outdoor / 5 Comments",
    featured: true,
  },
];

export default function BlogSection() {
  return (
    <Container className="my-5 text-center">
      <h2 className="fw-bold">OUR BLOG</h2>
      <p className="text-muted">WHAT WE DISCUSS MORE ABOUT</p>

      <Row className="mt-4">
        {blogs.map((blog, idx) => (
          <Col key={idx} md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={blog.img} />

              <Card.Body>
                <Card.Title>
                  {blog.title}{" "}
                  {blog.featured && (
                    <Badge bg="warning" text="dark">
                      Featured
                    </Badge>
                  )}
                </Card.Title>

                <Card.Subtitle className="text-muted small mb-2">
                  {blog.date}
                </Card.Subtitle>

                <Card.Text className="small">{blog.desc}</Card.Text>
              </Card.Body>

              <Card.Footer className="text-muted small">{blog.meta}</Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
