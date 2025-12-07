import { Form, Button } from "react-bootstrap";
import athlete from "../../assets/athlete.png";

export default function SignupForm() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        background: "#fff",
        padding: "40px 0",
      }}>
      <div
        style={{
          width: "80%",
          display: "flex",
          background: "#fff",
          borderRadius: "10px",
          overflow: "hidden",
        }}>
        {/* LEFT SIDE FORM */}
        <div
          style={{
            width: "50%",
            background: "#10A8FF",
            padding: "40px",
            color: "#fff",
            backgroundSize: "cover",
          }}>
          {/* Toggle Buttons */}
          <div className="d-flex gap-3 mb-4">
            <Button
              variant="outline-light"
              style={{ borderRadius: "0", padding: "8px 25px" }}>
              FOR MEN
            </Button>
            <Button
              variant="outline-light"
              style={{ borderRadius: "0", padding: "8px 25px" }}>
              FOR WOMEN
            </Button>
          </div>

          <h2>Signup</h2>
          <Form>
            {/* INPUTS */}
            <Form.Control
              type="text"
              placeholder="Name"
              className="mb-3"
              style={{ borderRadius: 0, padding: "12px" }}/>

            <Form.Control
              type="email"
              placeholder="Email"
              className="mb-3"
              style={{ borderRadius: 0, padding: "12px" }}/>

            <Form.Control
              type="tel"
              placeholder="Phone"
              className="mb-3"
              style={{ borderRadius: 0, padding: "12px" }}/>

            <Form.Control
              type="date"
              className="mb-3"
              style={{ borderRadius: 0, padding: "12px" }}/>

            {/* RADIO BUTTONS */}
            <div className="d-flex gap-3 mb-3">
              <Form.Check label="New" type="radio" name="level" />
              <Form.Check label="Trained" type="radio" name="level" />
            </div>

            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Message"
              className="mb-3"
              style={{ borderRadius: 0 }}/>

            <Button
              variant="outline-light"
              type="submit"
              style={{
                width: "100%",
                borderRadius: 0,
                padding: "10px",
                fontWeight: "bold",
              }}>
              SUBMIT
            </Button>
          </Form>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div style={{ width: "50%", background: "#eee" }}>
          <img
            src={athlete}
            alt="signup"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}/>
        </div>
      </div>
    </div>
  );
}
