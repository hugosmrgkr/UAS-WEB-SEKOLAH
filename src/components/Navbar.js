import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="logo-pedal.png" // Ganti dengan lokasi logo sekolah Anda
          alt="Logo"
          className="navbar-logo"
        />
        <span className="navbar-title">SMA Negeri 1 Siantar Narumonda</span>
      </div>
      <div className="navbar-right">
        <ul className="navbar-links">
          <li>
            <Link to="/beranda">Beranda</Link>
          </li>
          <li>
            <Link to="/visi-misi">Visi dan Misi</Link>
          </li>
          <li>
            <Link to="/profil">Profil</Link>
          </li>
          <li>
            <Link to="/fasilitas">Fasilitas</Link>
          </li>
        </ul>
        
        <Link to="/login" className="navbar-login">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
