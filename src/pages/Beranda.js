import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos"; // Import AOS Library
import "./Beranda.css";

function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
      once: true, // Animasi hanya sekali saat scroll
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <header className="hero-section container-fluid" data-aos="fade-down">
        <h1 className="school-title">SMA Negeri 1 Siantar Narumonda</h1>
      </header>

      {/* Gallery Section */}
      <section className="gallery-section">
        <h2 className="section-title" data-aos="fade-up">Galeri Sekolah</h2>
        <div className="gallery-container">
          {/* Gallery Items */}
          {[
            { src: "/olimpiade.jpg", caption: "Lomba Olimpiade Sains" },
            { src: "/hari guru.jpg", caption: "Perayaan Hari Guru" },
            { src: "/lab komputer.jpg", caption: "Fasilitas Laboratorium Komputer" },
            { src: "/perpisahan.webp", caption: "Acara Perpisahan Siswa" },
            { src: "/kegiatan.jpg", caption: "Kegiatan Sosial di Sekolah" },
            { src: "/ekstrakulikuler.jpg", caption: "Kegiatan Ekstrakurikuler" },
          ].map((item, index) => (
            <div
              key={index}
              className="gallery-item"
              data-aos="zoom-in-up"
              data-aos-delay={index * 200} // Delay animasi antar item
            >
              <img src={item.src} alt={item.caption} className="gallery-image" />
              <p className="gallery-caption">{item.caption}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social Media Section */}
      <section className="social-media-section" data-aos="fade-up">
        <h2 className="section-title">Ikuti Kami</h2>
        <div className="social-media-links">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link facebook"
            data-aos="fade-right"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link instagram"
            data-aos="fade-up"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link twitter"
            data-aos="fade-left"
          >
            Twitter
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-section" data-aos="fade-up">
        <p className="school-address">
          Jl.SMA Narumonda, Narumonda I, Kec. Siantar Narumonda, Toba, Sumatera Utara 22384
        </p>
        <p className="school-contact">Telp: 0882-6218-2143</p>
      </footer>
    </>
  );
}

export default HomePage;
