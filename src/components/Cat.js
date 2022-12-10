import React from "react";
import { useGetCat } from "../useGetCat";

function Cat() {
  const { data, refetch, isLoading, error } = useGetCat();
  if (isLoading) {
    return (
      <div>
        <h1>Loading...!</h1>
      </div>
    );
  } else if (error) {
    return (
      <div>
        <h1>Error ${error.message}</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>{data?.fact}</h1>
        <button onClick={refetch}>Another</button>
      </div>
    );
  }
}

export default Cat;
