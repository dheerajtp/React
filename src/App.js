import "./App.css";
import styles from "./style.module.css";
import User from "./User";

function App() {
  const age = 18,
    isGreen = true,
    names = [
      { name: "Kannan", age: 25, display: true },
      { name: "Kunjan", age: 25, display: false },
    ];

  return (
    <div className="App">
      <h1 className={styles.header}>{age > 15 ? "Over Age" : "Under Age"}</h1>
      {isGreen && <button>Shows only if isGreen is true</button>}
      {names.map((user, key) => (
        <User key={key} user={user} />
      ))}
    </div>
  );
}

export default App;
