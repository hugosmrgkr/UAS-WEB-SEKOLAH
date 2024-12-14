import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    navigate("/home");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        {/* Logo Section */}
        <div className="logo-container">
          <div className="logo-circle">
            <img
              src="/logo-pedal.png" 
              alt="School Logo"
              className="logo-img"
            />
          </div>
          <h3 className="school-name">SMA Negeri 1 Siantar Narumonda</h3>
          <p className="school-location">Kabupaten Toba</p>
        </div>

        {/* Login Form */}
        <h2 className="login-title">Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
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
              required
            />
          </div>
          <button type="submit" className="btn-primary">
            Login
          </button>
          <button type="button" className="btn-secondary" onClick={() => navigate("/register")}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
