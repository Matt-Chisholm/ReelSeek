import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import { useState } from "react";

function App() {
  const [selectedScreen, setSelectedScreen] = useState("home");

  return (
    <div className='App'>
      {selectedScreen === "home" && (
        <Home
          selectedScreen={selectedScreen}
          setSelectedScreen={setSelectedScreen}
        />
      )}
      {selectedScreen === "about" && (
        <About
          selectedScreen={selectedScreen}
          setSelectedScreen={setSelectedScreen}
        />
      )}
    </div>
  );
}

export default App;
