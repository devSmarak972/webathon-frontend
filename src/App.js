import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SetAvatar from "./components/SetAvatar";
import Loginn from "./components/Loginn";
import Team from "./components/Team";
// import Home from "./components/Home";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import UserDashboard from "./pages/UserDashboard"
import Events from "./pages/events";
import "./assets/css/dashboard/responsive.css";
import "./assets/css/dashboard/ui.css";

// import "./assets/css/fontawesome/all.min.css";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/newdash" exact element={<Home />}/> */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setAvatar" element={<SetAvatar />} />
        <Route path="/" element={<Chat />} />
        <Route path="/dash" element={<Dashboard />} />
        {/* <Route path="loginnew" element={<Loginn />} /> */}
        <Route path="/" exact element={<Chat />} />
        <Route path="/loginnew" exact element={<Loginn />} />
        <Route path="/team" exact element={<Team />} />
        <Route path="/userDash" exact element={<UserDashboard />} />
        <Route path="/events/:id" exact element={<Events/>} />
        {/* <Route path="/newdash" exact element={<Home />}/> */}
      </Routes>
    </BrowserRouter>
  );
}
