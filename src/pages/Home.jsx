import React, { useContext } from "react";
import { AppContext } from "../App";

function Home() {
  const { username } = useContext(AppContext);
  return <div>Home {username}</div>;
}

export default Home;
