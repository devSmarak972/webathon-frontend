import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SetAvatar from "./components/SetAvatar";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import "./assets/css/dashboard/responsive.css";
import "./assets/css/dashboard/ui.css";
// import "./assets/css/fontawesome/all.min.css";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setAvatar" element={<SetAvatar />} />
        <Route path="/" element={<Chat />} />
        <Route path="/dash" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
