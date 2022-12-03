import React from "react";
import { useState } from "react";

function Text() {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <h1>{text}</h1>
    </div>
  );
}

export default Text;
