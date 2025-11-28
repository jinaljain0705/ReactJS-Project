import { useState } from "react";
import SectionTitle from "./SectionTitle";

const StateProps = () => {
  const [name, setName] = useState("Thor");

  return (
    <>
      <SectionTitle title="State & Properties" />

      <div className="card">
        <p style={{ fontSize: "22px", margin: "10px 0" }}>{name}</p>
        <p>React Component Developer</p>

        <button className="btn" onClick={() => setName("Iron Man")}>
          Change
        </button>
      </div>
    </>
  );
};

export default StateProps;
