import { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  let [data, setData] = useState({});

  let fetchData = async () => {
    try {
      let data = await Axios.get(`https://catfact.ninja/fact`);
      setData(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <button onClick={fetchData}>Generate A Fact</button>
      <p>{data?.fact}</p>
    </div>
  );
}

export default App;
