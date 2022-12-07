import React, { useContext } from "react";
import { AppContext } from "../App";
import Axios from "axios";
import { useQuery } from "@tanstack/react-query";

function Home() {
  let fetchItem = async () => {
    let result = await Axios.get("https://catfact.ninja/fact");
    return result.data;
  };
  const { data, isLoading, isError, refetch } = useQuery(["cat"], fetchItem);
  const { username } = useContext(AppContext);
  if (isLoading) {
    return <h1>Loading</h1>;
  } else if (isError) {
    return <h1>Error</h1>;
  } else {
    return (
      <div>
        {isLoading && "Loading"}
        {isError && "Error occured"}
        {data?.fact} : {username}
        <button onClick={refetch}>Refetch data</button>
      </div>
    );
  }
}

export default Home;
