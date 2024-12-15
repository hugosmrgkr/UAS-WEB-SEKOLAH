import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css"; // import the AOS styles
import "./Berita.css";

function Berita() {
  // State untuk menyimpan status buka/tutup teks lanjutan
  const [expanded, setExpanded] = useState({
    news1: false,
    news2: false,
    news3: false,
  });

  // Fungsi untuk toggle status
  const toggleExpanded = (key) => {
    setExpanded((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a 1-second duration for animations
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4 display-4 fw-bold text-primary-black" data-aos="fade-up">
        Berita Terbaru
      </h1>
      <div className="row">
        {/* Berita Item 1 */}
        <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="100">
          <Card>
            <Card.Img variant="top" src="/olimpiade.jpg" />
            <Card.Body>
              <Card.Title>Lomba Olimpiade Sains Nasional</Card.Title>
              <Card.Text>
                Siswa SMA Negeri 1 Siantar Narumonda berhasil meraih juara 1 pada Olimpiade Sains Nasional tingkat provinsi.
                {expanded.news1 && (
                  <span>
                    {" "}
                    Keberhasilan ini menjadi kebanggaan bagi seluruh warga sekolah dan memberikan inspirasi bagi siswa lainnya
                    untuk terus berprestasi di berbagai bidang.
                  </span>
                )}
              </Card.Text>
              <Button variant="primary" onClick={() => toggleExpanded("news1")}>
                {expanded.news1 ? "Tutup" : "Baca Selengkapnya"}
              </Button>
            </Card.Body>
          </Card>
        </div>

        {/* Berita Item 2 */}
        <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="200">
          <Card>
            <Card.Img variant="top" src="/hari guru.jpg" />
            <Card.Body>
              <Card.Title>Perayaan Hari Guru</Card.Title>
              <Card.Text>
                Kegiatan Hari Guru Nasional di sekolah berlangsung meriah dengan berbagai acara menarik dan apresiasi kepada guru.
                {expanded.news2 && (
                  <span>
                    {" "}
                    Acara ini melibatkan siswa, guru, dan orang tua dalam mempererat hubungan baik antara seluruh komunitas
                    sekolah. Terima kasih kepada semua pihak yang terlibat!
                  </span>
                )}
              </Card.Text>
              <Button variant="primary" onClick={() => toggleExpanded("news2")}>
                {expanded.news2 ? "Tutup" : "Baca Selengkapnya"}
              </Button>
            </Card.Body>
          </Card>
        </div>

        {/* Berita Item 3 */}
        <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="300">
          <Card>
            <Card.Img variant="top" src="/lab komputer.jpg" />
            <Card.Body>
              <Card.Title>Peningkatan Fasilitas Sekolah</Card.Title>
              <Card.Text>
                Sekolah kini memiliki fasilitas baru, termasuk laboratorium komputer dan perpustakaan modern.
                {expanded.news3 && (
                  <span>
                    {" "}
                    Fasilitas ini diharapkan dapat meningkatkan kualitas belajar mengajar, sehingga siswa lebih termotivasi untuk
                    belajar dan berkembang.
                  </span>
                )}
              </Card.Text>
              <Button variant="primary" onClick={() => toggleExpanded("news3")}>
                {expanded.news3 ? "Tutup" : "Baca Selengkapnya"}
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer-section bg-dark text-white mt-5 py-3" data-aos="fade-up">
        <div className="container text-center">
          <p>
            &copy; {new Date().getFullYear()} SMA Negeri 1 Siantar Narumonda | Jl. SMA Narumonda, Toba, Sumatera Utara
          </p>
          <p>Telp: 0882-6218-2143 | Email: info@sman1narumonda.sch.id</p>
        </div>
      </footer>
    </div>
  );
}

export default Berita;
