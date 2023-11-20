import "./styles/reset.css";
import "./styles/global.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main";
import { Company } from "./pages/Company";
import { PostCompany } from "./pages/PostCompany";
import { ManageCompany } from "./pages/ManageCompany/ManageCompany";
function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Company />} />
          <Route path="/Company" element={<Main />} />
          <Route path="/PostCompany" element={<PostCompany />} />
          <Route path="/ManageCompany" element={<ManageCompany />} />
          

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;