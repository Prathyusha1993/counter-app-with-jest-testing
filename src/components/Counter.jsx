import React, { useState } from "react";

const Counter = ({ initalCount }) => {
  const [count, setCount] = useState(initalCount);

  const handleInc = () => {
    setCount(count + 1);
  };
  const handleDec = () => {
    setCount(count - 1);
  };
  const handleRestart = () => {
    setCount(0);
  };
  const handleSigns = () => {
    setCount((prev) => prev * -1);
  };
  return (
    <div>
      <h1>
        Count: <h3 data-testid="count">{count}</h3>
      </h1>
      <div>
        <button onClick={handleInc}>Increment</button>
        <button onClick={handleDec}>Decrement</button>
        <button onClick={handleRestart}>Restart</button>
        <button onClick={handleSigns}>Switch Signs</button>
      </div>
    </div>
  );
};

export default Counter;
