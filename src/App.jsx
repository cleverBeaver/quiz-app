import { useState } from "react";
import logo from "./logo.svg";
import Start from "./components/Start";
import Quiz from "./components/Quiz";
import "./assets/blob 5.png";
import "./App.css";

function App() {
  const [showMenu, changeMenu] = useState(true);

  function toggleMenu() {
    changeMenu((prevState) => !prevState);
  }

  return (
    <div className="app">
      <div className="top-blob">
        <img src="./src/assets/blob 5.png" alt="blob" />
      </div>
      {showMenu && <Start toggleClick={toggleMenu} />}
      {!showMenu && <Quiz />}
      <div className="bottom-blob">
        <img src="./src/assets/blobs.png" alt="blob" />
      </div>
    </div>
  );
}

export default App;
