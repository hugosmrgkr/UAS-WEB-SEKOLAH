import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

function Kontak() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [alamat, setalamat] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [notification, setNotification] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setNotification("Semua kolom harus diisi!");
      return;
    }
    setNotification("Pesan telah dikirim!");
  };

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with 1-second duration
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      {/* Kontak Form Section */}
      <div
        style={{
          display: "flex",
          maxWidth: "900px",
          width: "100%",
          backgroundColor: "white",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
        }}
        data-aos="fade-up"
      >
        {/* Bagian Kiri - Tentang Kami */}
        <div
          style={{
            flex: 1,
            backgroundColor: "#343a40",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
          data-aos="fade-right"
        >
          <h2 style={{ color: "white", fontSize: "24px", textAlign: "center" }}>Tentang Kami</h2>
        </div>

        {/* Bagian Kanan - Form Kontak */}
        <div
          style={{
            flex: 1.5,
            padding: "30px",
          }}
          data-aos="fade-left"
        >
          <h3
            style={{
              fontSize: "22px",
              fontWeight: "bold",
              marginBottom: "20px",
              color: "#333",
            }}
          >
            Hubungi Kami
          </h3>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
            <input
              type="text"
              placeholder="Nama"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                padding: "10px",
                marginBottom: "15px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "14px",
              }}
            />
            <input
              type="email"
              placeholder="Alamat Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                padding: "10px",
                marginBottom: "15px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "14px",
              }}
            />
            <input
              type="text"
              placeholder="Alamat"
              value={alamat}
              onChange={(e) => setalamat(e.target.value)}
              style={{
                padding: "10px",
                marginBottom: "15px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "14px",
              }}
            />
            <input
              type="text"
              placeholder="Telepon"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{
                padding: "10px",
                marginBottom: "15px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "14px",
              }}
            />
            <textarea
              placeholder="Pesan"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{
                padding: "10px",
                marginBottom: "15px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "14px",
                height: "100px",
                resize: "none",
              }}
            ></textarea>
            <button
              type="submit"
              style={{
                backgroundColor: "#343a40",
                color: "white",
                border: "none",
                padding: "10px",
                borderRadius: "4px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Kirim
            </button>
          </form>
          {notification && (
            <div
              style={{
                marginTop: "15px",
                padding: "10px",
                backgroundColor: notification === "Pesan telah dikirim!" ? "#28a745" : "#dc3545",
                color: "white",
                borderRadius: "4px",
                textAlign: "center",
              }}
            >
              {notification}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          backgroundColor: "#343a40",
          color: "white",
          padding: "20px",
          marginTop: "30px",
          borderRadius: "8px",
          width: "100%",
          textAlign: "center",
          maxWidth: "900px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        }}
        data-aos="fade-up"
      >
        <h4 style={{ fontSize: "18px", marginBottom: "10px", fontWeight: "700" }}>Alamat Sekolah</h4>
        <p style={{ fontSize: "14px", margin: "5px 0" }}>
          Jl. SMA Narumonda, Narumonda I, Kec. Siantar Narumonda, Toba, Sumatera Utara 22384
        </p>
        <p style={{ fontSize: "14px", margin: "5px 0" }}>Telp: 0882-6218-2143</p>
        <p style={{ fontSize: "14px", margin: "5px 0" }}>
          Email:{" "}
          <a href="mailto:info@sma-siantar.sch.id" style={{ color: "#00bcd4", textDecoration: "none" }}>
            info@sma-siantar.sch.id
          </a>
        </p>
      </div>
    </div>
  );
}

export default Kontak;
