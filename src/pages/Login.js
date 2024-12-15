import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi input: Pastikan email dan password diisi
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // Ambil data pengguna dari localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === email && u.password === password);

    if (!user) {
      setError("Invalid email or password.");
      return;
    }

    // Simpan nama pengguna di localStorage dan reset error
    localStorage.setItem("currentUser", JSON.stringify(user));

    // Reset error dan navigasi ke halaman Beranda
    setError("");
    navigate("/beranda");
  };

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className="login-container" data-aos="fade-up">
      <div className="login-box" data-aos="zoom-in">
        {/* Logo Section */}
        <div className="logo-container" data-aos="fade-down">
          <div className="logo-circle">
            <img src="/logo-pedal.png" alt="School Logo" className="logo-img" />
          </div>
          <h3 className="school-name">SMA Negeri 1 Siantar Narumonda</h3>
          <p className="school-location">Kabupaten Toba</p>
        </div>

        {/* Login Form */}
        <h2 className="login-title" data-aos="fade-up">Login</h2>
        {error && <p className="error-message" data-aos="fade-up">{error}</p>} {/* Notifikasi error */}
        <form onSubmit={handleSubmit} className="login-form" data-aos="fade-up">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              data-aos="fade-right"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              data-aos="fade-left"
            />
          </div>
          <button type="submit" className="btn-primary" data-aos="zoom-in">
            Login
          </button>
        </form>

        {/* Belum punya akun? Daftar sekarang */}
        <div className="register-link" data-aos="fade-up">
          <p>Belum punya akun? 
          <button
  onClick={() => navigate("/register")}
  className="btn-register-now"
  style={{
    backgroundColor: '#007BFF', // Biru
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    marginLeft: '10px',
    transition: 'background-color 0.3s ease',
  }}
  onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
  onMouseLeave={(e) => e.target.style.backgroundColor = '#007BFF'}
>
  Daftar sekarang
</button>

          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
