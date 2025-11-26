import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const message =
    count > 0
      ? "Count is increasing"
      : count < 0
      ? "Count is negative"
      : "Count is back to zero";

  return (
    <div style={styles.container}>
      <h2>Simple Counter</h2>
      <h1>{count}</h1>
      <p>{message}</p>

      <div style={styles.btnGroup}>
        <button onClick={() => setCount(count + 1)}>➕ Increment</button>
        <button onClick={() => setCount(count - 1)}>➖ Decrement</button>
        <button onClick={() => setCount(0)}>🔁 Reset</button>
      </div>
    </div>
  );
};

export default Counter;

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    fontFamily: "Arial",
  },
  btnGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "20px",
  },
};
