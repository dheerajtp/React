import "./App.css";
import { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Nav from "./components/Nav";

export const AppContext = createContext();

function App() {
  const [username, setUserName] = useState("user 1");
  return (
    <div className="App">
      <AppContext.Provider value={{ username, setUserName }}>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
