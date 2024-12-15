import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Beranda from "./pages/Beranda";
import Profil from "./pages/Profil";
import Fasilitas from "./pages/Fasilitas";
import VIsiMisi from "./pages/VIsiMisi";
import Berita from "./pages/Berita";
import Kontak from "./pages/Kontak"; 

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes tanpa Navbar */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Routes dengan Navbar */}
        <Route element={<WithNavbarLayout />}>
          <Route path="/beranda" element={<Beranda />} />
          <Route path="/visi-misi" element={<VIsiMisi />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/fasilitas" element={<Fasilitas />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/kontak" element={<Kontak />} /> 
        </Route>
      </Routes>
    </Router>
  );
}

function WithNavbarLayout() {
  return (
    <>
      <Navbar />
      <div className="container mt-3">
        {/* Outlet digunakan untuk merender komponen anak */}
        <Outlet />
      </div>
    </>
  );
}

export default App;
