import React from "react";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const handleCount = (operator) => {
    if (operator === "sum") {
      return setCounter(counter + 1);
    } else if (operator === "rest") {
      return setCounter(counter - 1);
    } else if (operator === "sum10") {
      return setCounter(counter + 10);
    } else if (operator === "rest10") {
      return setCounter(counter - 10);
    }
  };

  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <>
      <h1>React Counter</h1>

      <div style={{ display: "flex" }}>
        <button onClick={() => handleCount("sum")}>sum</button>
        <button onClick={() => handleCount("rest")}>rest</button>
        <button onClick={() => handleCount("sum10")}>+10</button>
        <button onClick={() => handleCount("rest10")}>-10</button>
        <p>{counter}</p>
      </div>

      <br />
      <br />
      <button onClick={resetCounter}>reset</button>
    </>
  );
}
export default App;
