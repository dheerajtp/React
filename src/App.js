import "./App.css";
import Excercise from "./Excercise";

function App() {
  const name = "Name goes here";
  const tag = <p>An example for p tag</p>;
  const fullName = <h1>Name</h1>;
  const age = <h2>25</h2>;
  const email = <h5>dheerajtp6338@gmail.com</h5>;

  const userFullDetails = (
    <div>
      {fullName}
      {age}
      {email}
    </div>
  );
  return (
    <div className="App">
      {name}
      {tag}
      {userFullDetails}
      {userFullDetails}
      <p>Component goes below</p>
      <User />
      <User />
      <PropComponent name="prop-name" age={18} email="propemail@hi2.in" />
      <Excercise />
    </div>
  );
}

const User = () => {
  return (
    <div>
      <h1> Name : Name</h1>
      <h2> Age : 25 </h2>
      <h4> Email : email@hi2.in </h4>
    </div>
  );
};

const PropComponent = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h3>{props.email}</h3>
    </div>
  );
};

export default App;
