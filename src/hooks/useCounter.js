import { useState } from "react";

export const useCounter = (initialValue = 0) => {
  const [state, setState] = useState(initialValue);

  const count = () => {
    setState((prev) => prev + 1);
  };

  const decrease = () => {
    setState((prev) => prev - 1);
  };

  const resetToInitialValue = () => {
    setState(initialValue);
  };
  return [state, count, decrease, resetToInitialValue];
};
