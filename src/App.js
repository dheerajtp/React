import "./App.css";
import { useState } from "react";

function App() {
  let [age, setAge] = useState(0);
  const increaseAge = () => {
    setAge(age + 1);
  };
  return (
    <div className="App">
      <h1>Age:{age}</h1>
      <button onClick={increaseAge}>Increase</button>
    </div>
  );
}

export default App;
