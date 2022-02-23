import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewUser from "./Components/NewUser";
import Home from "./Components/Home";
import "./CSS/App.css";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<NewUser />} />
          <Route path="/new/:id" element={<NewUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
