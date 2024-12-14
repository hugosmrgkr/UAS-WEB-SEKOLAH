import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Impor Navbar
import Login from "./pages/Login";
import Register from "./pages/Register";
import Beranda from "./pages/Beranda";
import Profil from "./pages/Profil";
import Fasilitas from "./pages/Fasilitas";
import VIsiMisi from "./pages/VIsiMisi";

function App() {
  return (
    <Router>
      {/* Navbar selalu ada di atas setiap halaman */}
      <Navbar />

      {/* Routes untuk halaman konten */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/beranda" element={<Beranda />} />
        <Route path="/visi-misi" element={<VIsiMisi />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/fasilitas" element={<Fasilitas />} />
      </Routes>
    </Router>
  );
}

export default App;
