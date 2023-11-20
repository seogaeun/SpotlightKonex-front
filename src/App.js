import "./styles/reset.css";
import "./styles/global.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main";
import { Company } from "./pages/Company";
import { PostCompany } from "./pages/PostCompany";
import { ManageCompany } from "./pages/ManageCompany/ManageCompany";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;