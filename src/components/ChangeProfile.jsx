import React, { useState, useContext } from "react";
import { AppContext } from "../App";
function ChangeProfile() {
  const [newUserName, setNewUserName] = useState("");
  const { setUserName } = useContext(AppContext);
  return (
    <div>
      ChangeProfile
      <input onChange={(e) => setNewUserName(e.target.value)} />
      <button
        onClick={() => {
          setUserName(newUserName);
        }}
      >
        Change User Name
      </button>
    </div>
  );
}

export default ChangeProfile;
