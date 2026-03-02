import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ComparePage from "./pages/ComparePage";
import CharacterPage from "./pages/CharacterPage";
import BattlePage from "./pages/BattlePage";
import PowerList from "./pages/PowerList";
import PowerDetail from "./pages/PowerDetail";

import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
      <div className={darkMode ? "dark app-container" : "light app-container"}>

        <button
          style={{ margin: "1rem" }}
          onClick={() => setDarkMode((prev) => !prev)}
        >
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage darkMode={darkMode} />} />
            <Route path="/compare" element={<ComparePage darkMode={darkMode} />} />
            <Route path="/character/:id" element={<CharacterPage darkMode={darkMode} />} />
            <Route path="/battle" element={<BattlePage darkMode={darkMode} />} />
            <Route path="/powers" element={<PowerList darkMode={darkMode} />} />
            <Route path="/powers/:id" element={<PowerDetail darkMode={darkMode} />} />
          </Routes>
        </main>

        <Footer darkMode={darkMode} />
      </div>
  );
}

export default App;