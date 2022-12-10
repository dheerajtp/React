import React from "react";
import { useCounter } from "./hooks/useCounter";

function Count() {
  const [currentValue, increment, decrease, reset] = useCounter(1);
  return (
    <div>
      {currentValue}
      <button onClick={increment}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Count;
