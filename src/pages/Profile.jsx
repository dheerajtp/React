import React, { useContext } from "react";
import ChangeProfile from "../components/ChangeProfile";
import { AppContext } from "../App";

function Profile() {
  const { username, setUserName } = useContext(AppContext);
  return (
    <div>
      Profile {username}
      <ChangeProfile setUserName={setUserName} />
    </div>
  );
}

export default Profile;
