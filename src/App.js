import "./styles/reset.css";
import "./styles/global.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import { Main } from "./pages/Main";
import { Company } from "./pages/Company";
=======



>>>>>>> 6f55e86373be66fd27e4f6a72fa61a12cf423fd7
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Company" element={<Company />} />

          <Route path="/main" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;