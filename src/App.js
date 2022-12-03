import { useState, useEffect } from "react";
import "./App.css";
import Text from "./Text";

function App() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    console.log("use effect call only once");
    return () => {
      console.log("un mounting");
    };
  }, []);
  return (
    <div className="App">
      <button
        onClick={() => {
          setShowText(!showText);
        }}
      >
        Toggle Show Text
      </button>
      {showText && <Text />}
    </div>
  );
}

export default App;
