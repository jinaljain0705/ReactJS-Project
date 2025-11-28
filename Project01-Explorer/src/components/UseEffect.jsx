import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";

const UseEffectDemo = () => {
  const [count, setCount] = useState(0);

  // Runs only once when mounted
  useEffect(() => {
    console.log("Component Mounted");

    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  // Runs whenever count changes
  useEffect(() => {
    console.log("Count Updated:", count);
  }, [count]);

  return (
    <>
      <SectionTitle title="Component Lifecycle" />

      <div className="card">
        <h3>UseEffect Demo</h3>
        <p style={{fontSize:"22px"}}>{count}</p>

        <button className="btn" onClick={() => setCount(count + 1)}>
          Increase
        </button>
      </div>
    </>
  );
};

export default UseEffectDemo;
