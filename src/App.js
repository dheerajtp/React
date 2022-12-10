import "./App.css";
import Person from "./Person";
function App() {
  return (
    <div className="App">
      <Person
        name={10}
        age={15}
        email="email@hi2.in"
        mobile="number"
        friends={["kannan", "kannan2"]}
      />
    </div>
  );
}

export default App;
