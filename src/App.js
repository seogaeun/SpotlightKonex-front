import "./styles/reset.css";
import "./styles/global.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main";
import { Company } from "./pages/Company";
function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Company />} />
          <Route path="/Company" element={<Main />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;