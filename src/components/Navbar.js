import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap"; // Menggunakan Dropdown dari react-bootstrap
import { FaUserAlt, FaSignOutAlt } from "react-icons/fa"; // React Icons
import "./Navbar.css";

function Navbar() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (storedUser) {
      setCurrentUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* Bagian Kiri: Logo dan Nama Sekolah */}
      <div className="navbar-left" style={{ display: "flex", alignItems: "center" }}>
        <img
          src="logo-pedal.png"
          alt="Logo"
          className="navbar-logo"
          style={{ width: "40px", marginRight: "10px" }}
        />
        <span className="navbar-title" style={{ fontSize: "18px", fontWeight: "bold", color: "white" }}>
          SMA Negeri 1 Siantar Narumonda
        </span>
      </div>

      {/* Bagian Tengah: Link Navbar */}
      <div className="navbar-right" style={{ display: "flex", alignItems: "center", marginLeft: "auto" }}>
        <ul className="navbar-links navbar-nav" style={{ display: "flex", marginBottom: "0", listStyle: "none" }}>
          <li className="nav-item" style={{ margin: "0 15px" }}>
            <Link to="/beranda" className="nav-link" style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}>
              Beranda
            </Link>
          </li>

          {/* Dropdown "Tentang" */}
          <li className="nav-item dropdown" style={{ margin: "0 15px" }}>
            <Dropdown>
              <Dropdown.Toggle
                variant="link"
                id="dropdown-tentang"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontWeight: "bold",
                  boxShadow: "none",
                  padding: 0,
                }}
              >
                Tentang
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/visi-misi" style={{ fontWeight: "bold" }}>
                  Visi dan Misi
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/fasilitas" style={{ fontWeight: "bold" }}>
                  Fasilitas
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/berita" style={{ fontWeight: "bold" }}>
                  Berita
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>

          <li className="nav-item" style={{ margin: "0 15px" }}>
            <Link to="/profil" className="nav-link" style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}>
              Profil
            </Link>
          </li>

          <li className="nav-item" style={{ margin: "0 15px" }}>
            <Link to="/kontak" className="nav-link" style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}>
              Kontak
            </Link>
          </li>
        </ul>

        {/* Bagian Login/Logout */}
        {currentUser ? (
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", marginRight: "15px" }}>
              <FaUserAlt style={{ fontSize: "20px", marginRight: "8px", color: "white" }} />
              <span style={{ fontWeight: "bold", fontSize: "16px", color: "white" }}>{currentUser.username}</span>
            </div>
            <button
              className="navbar-logout"
              style={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #dc3545",
                color: "#dc3545",
                backgroundColor: "white",
                padding: "5px 10px",
                fontSize: "14px",
                borderRadius: "25px",
                cursor: "pointer",
                transition: "background-color 0.3s ease, color 0.3s ease",
              }}
              onClick={handleLogout}
            >
              <FaSignOutAlt style={{ marginRight: "5px" }} />
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="navbar-login"
            style={{
              fontSize: "16px",
              border: "1px solid #007bff",
              color: "#007bff",
              padding: "5px 15px",
              borderRadius: "25px",
              textDecoration: "none",
              display: "inline-block",
              fontWeight: "bold",
            }}
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
