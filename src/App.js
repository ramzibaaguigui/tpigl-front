import "./App.css";
import Login from "./pages/Login";
import { ReactDOM } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Contact from "./pages/contact";
import ContactCard from "./components/ContactCard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Contact />} />
      {/* <Route path="/" element={<Landing />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
