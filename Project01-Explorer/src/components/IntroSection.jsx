import React from "react";

const IntroSection = () => {
  return (
    <div>
      <div>
        <h1 style={{fontSize:"26px", fontWeight:"bold"} }> 
          <span>React Explorer</span>
        </h1>
      </div>

      <p style={{color:"#555", marginTop:"10px"}}>
        An interactive playground to master React concepts by practicing JSX,
        props, state, events, lifecycle & more.
      </p>

      <div style={{ display: "flex", gap: "14px", marginTop: "18px", justifyContent: "center" }}>
        <div className="card" style={{ width: "140px", boxShadow: "none", border: "1px solid #ddd" }}>
          <h3>Learn by Example</h3>
          <p style={{ fontSize: "12px", color: "#555" }}>
            See real React examples rendered instantly using state updates.
          </p>
        </div>

        <div className="card" style={{ width: "140px", boxShadow: "none", border: "1px solid #ddd" }}>
          <h3>Clean Syntax</h3>
          <p style={{ fontSize: "12px", color: "#555" }}>
            Simple JSX, reusable components & custom styling.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
