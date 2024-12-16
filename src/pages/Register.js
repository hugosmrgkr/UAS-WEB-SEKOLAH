import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [asalSekolah, setAsalSekolah] = useState("");
  const [asalDaerah, setAsalDaerah] = useState("");
  const [nis, setNIS] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [notification, setNotification] = useState(""); // State for notification
  const navigate = useNavigate();

  // Ambil data pengguna dari localStorage saat komponen dimuat
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi form
    if (!username || !email || !password || !confirmPassword || !asalSekolah || !asalDaerah || !nis) {
      setError("Please fill in all fields.");
      return;
    }

    // Validasi password
    const passwordRegex = /^(?=.*\d).{8,}$/; // Harus minimal 8 karakter dan mengandung angka
    if (!passwordRegex.test(password)) {
      setError("Password must be at least 6 characters long and contain at least one number.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (users.length >= 7) {
      setError("Pengguna sudah mencapai batas. Maksimal 7 penguna.");
      return;
    }

    // Tambahkan pengguna baru
    const newUser = { username, email, password };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    // Reset form dan error
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError("");
    setAsalSekolah("");
    setAsalDaerah("");
    setNIS("");

    // Tampilkan notifikasi pop-up setelah registrasi berhasil
    setNotification("Akun kamu sudah dibuat. Silakan login.");

    // Arahkan pengguna ke halaman login setelah registrasi berhasil
    setTimeout(() => {
      navigate("/login");
    }, 2000); // Delay sebelum redirect untuk memberikan waktu membaca notifikasi
  };

  const handleDelete = (index) => {
    const updatedUsers = users.filter((user, i) => i !== index); // Filter out the user to delete
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers)); // Update localStorage
  };

  return (
    <div className="register-container">
      <div className="register-box">
        {/* Logo Section */}
        <div
          className="logo-container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div className="logo-circle">
            <img src="/logo-pedal.png" alt="School Logo" className="logo-img" />
          </div>
          <h3 className="school-name">SMA Negeri 1 Siantar Narumonda</h3>
          <p className="school-location">Kabupaten Toba</p>
        </div>

        {/* Register Form */}
        <div className="form-and-showdata">
          <div className="form-container">
            <h2 className="login-title">Register</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  className="form-control"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="form-control"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="asalSekolah">Asal Sekolah</label>
                <input
                  type="asalSekolah"
                  id="asalSekolah"
                  className="form-control"
                  placeholder="Masukkan Asal Sekolah"
                  value={asalSekolah}
                  onChange={(e) => setAsalSekolah(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="asalDaerah">Asal Daerah</label>
                <input
                  type="asalDaerah"
                  id="asalDaerah"
                  className="form-control"
                  placeholder="Masukkan Asal Daerah"
                  value={asalDaerah}
                  onChange={(e) => setAsalDaerah(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="nis">NIS</label>
                <input
                  type="nis"
                  id="nis"
                  className="form-control"
                  placeholder="Masukkan NIS"
                  value={nis}
                  onChange={(e) => setNIS(e.target.value)}
                />
              </div>
              <button type="submit" className="btn-primary" disabled={users.length >= 7}>
                Register
              </button>
            </form>

            {/* Text with Login button */}
            <div className="login-link" style={{ textAlign: "center", marginTop: "20px" }}>
              <p style={{ fontSize: "16px", color: "#555" }}>
                Already have an account? 
                <button
                  onClick={() => navigate("/login")}
                  style={{
                    backgroundColor: "#007BFF",
                    color: "white",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "5px",
                    fontSize: "16px",
                    cursor: "pointer",
                    marginLeft: "10px",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = "#45a049"}
                  onMouseLeave={(e) => e.target.style.backgroundColor = "#4CAF50"}
                >
                  Login Now
                </button>
              </p>
            </div>

            {/* Notifikasi Pop-up di bawah Form */}
            {notification && (
              <div className="notification" style={notificationStyle}>
                <p>{notification}</p>
              </div>
            )}
          </div>

          {/* Show Data Section */}
          <div className="show-data-container" style={{ overflowX: "auto", marginTop: "20px" }}>
            <h3>Registered Users</h3>
            <table className="table table-bordered" style={{ minWidth: "100%" }}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(index)}
                        style={{
                          backgroundColor: "#f44336",
                          color: "white",
                          border: "none",
                          padding: "5px 10px",
                          borderRadius: "5px",
                          cursor: "pointer",
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {users.length >= 7 && (
              <p className="info-message">Pengguna sudah mencapai batas. Maksimal 7 penguna.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Styling for the notification box
const notificationStyle = {
  backgroundColor: "#4CAF50",
  color: "#fff",
  padding: "10px 20px",
  borderRadius: "5px",
  marginTop: "20px",
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "16px",
  transition: "opacity 0.5s ease",
};

export default Register;
