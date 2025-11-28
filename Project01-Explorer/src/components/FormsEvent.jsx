import { useState } from "react";
import SectionTitle from "./SectionTitle";

const FormsEvent = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  return (
    <>
      <SectionTitle title="Forms & Events" />

      <div>
        <h3>Event Registration 📝</h3>

        <div className="card">
          <input className="input" type="text" placeholder="Enter Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />

          <input className="input" type="email" placeholder="Enter Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />

          <button>
            Register Now
          </button>
        </div>

        <div>
          <p style={{ marginTop: "12px", fontSize: "18px" }}>
            <strong>Name:</strong> 
            {form.name}
          </p>
          <p style={{ marginTop: "12px", fontSize: "18px" }}>
            <strong>Email:</strong> 
            {form.email}
          </p>
        </div>
      </div>
    </>
  );
};

export default FormsEvent;
