import React from "react";
import "./Beranda.css";

function HomePage() {
  return (
    <div>
     
      <header className="hero-section">
        <div className="hero-content">
          <img
            src="depan pedal.jpg" //
            alt="SMA Negeri 1 Siantar Narumonda"
            className="school-logo"
          />
          <h1 className="school-title">SMA Negeri 1 Siantar Narumonda</h1>
          <p className="school-address">
            Jl.SMA Narumonda, Narumonda I, Kec. Siantar Narumonda, Toba, Sumatera Utara 22384
          </p>
          <p className="school-contact">Telp: 0287-381820</p>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
