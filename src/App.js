import "./styles/reset.css";
import "./styles/global.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main";
import { Company } from "./pages/Company";
import { ChatBox } from "./components/ChatBox";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Company />} />
          <Route path="/Company" element={<Main />} />
          <Route path="/Chat" element={<ChatBox />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;