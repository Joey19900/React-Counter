import React from "react";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const handleSum = () => {
    setCounter(counter + 1);
  };

  const handleRest = () => {
    setCounter(counter - 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <>
      <h1>React Counter</h1>
      <button onClick={handleSum}> sum</button>
      <p>{counter}</p>
      <button onClick={resetCounter}>reset</button>
      <button onClick={handleRest}>rest</button>
    </>
  );
}

export default App;
