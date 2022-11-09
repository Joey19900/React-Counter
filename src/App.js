import React from "react";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const handleCount = (operator) => {
    switch (operator) {
      case "sum":
        setCounter(counter + 1);
        break;
      case "rest":
        setCounter(counter - 1);
        break;
      case "sum10":
        setCounter(counter + 10);
        break;
      case "rest10":
        setCounter(counter - 10);
        break;
      default:
        setCounter(counter + 0);
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
