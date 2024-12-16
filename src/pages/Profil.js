import React, { useEffect } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link dari react-router-dom
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

function Profil() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a 1-second duration for animations
  }, []);

  return (
    <Container
      className="my-5 d-flex justify-content-center align-items-center"
      style={{
        backgroundColor: "#f4f7fb",
        padding: "40px 0",
        borderRadius: "8px",
        minHeight: "100vh", // Memastikan tinggi container 100% dari tinggi layar
      }}
    >
      <div style={{ maxWidth: "960px", width: "100%" }}> {/* Mengatur lebar maksimal konten */}
        <h1
          className="text-center mb-4"
          style={{ fontSize: "2.5rem", fontWeight: "700", color: "#343a40" }}
          data-aos="fade-up"
        >
          Profil SMA Negeri 1 Siantar Narumonda
        </h1>

        
        <Row className="mb-4">
          <Col data-aos="fade-right">
            <h3
              className="text-center mb-4"
              style={{ fontSize: "1.75rem", fontWeight: "700", color: "#343a40" }}
            >
              Kepala Sekolah
            </h3>
            <Card
              style={{
                marginBottom: "20px",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
              }}
            >
              <Card.Body>
                <Card.Title style={{ fontWeight: "600", fontSize: "1.25rem", color: "#007bff" }}>
                  Jasa Pembangunan Sitorus, S.Pd., M.M.
                </Card.Title>
                <Card.Text>
                  Kepala Sekolah SMA Negeri 1 Siantar Narumonda. Memiliki pengalaman lebih dari 20 tahun dalam dunia pendidikan dan berkomitmen untuk memajukan sekolah dengan pendidikan berkualitas.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Foto Kepala Sekolah*/}
          <Col md={4} className="d-flex justify-content-center" data-aos="fade-left">
            <img
              src="/jp.jpg"
              alt="Kepala Sekolah"
              style={{
                borderRadius: "50%",
                maxWidth: "250px",
                maxHeight: "250px",
                objectFit: "cover",
                border: "4px solid #007bff",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Col>
        </Row>

        {/* Section: Sejarah Sekolah (Bagian di bawah Kepala Sekolah) */}
        <Row className="mb-4">
          <Col md={6} data-aos="fade-up">
            <Card
              style={{
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                backgroundColor: "#ffffff",
              }}
            >
              <Card.Body>
                <Card.Title style={{ fontWeight: "600", fontSize: "1.25rem", color: "#007bff" }}>
                  Sejarah Sekolah
                </Card.Title>
                <Card.Text>
                  SMA Negeri 1 Siantar Narumonda didirikan pada tahun 1970 dengan tujuan untuk memberikan pendidikan yang berkualitas bagi generasi muda. Sejak awal, sekolah ini berkomitmen untuk memajukan pendidikan di Kabupaten Toba.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
        </Row>

        {/* Section: Kontak Sekolah */}
        <Row className="text-center mb-4" data-aos="fade-up" data-aos-delay="400">
          <Col>
            {/* Gunakan Link untuk mengarahkan ke halaman Kontak */}
            <Link to="/kontak">
              <Button
                variant="primary"
                size="lg"
                style={{
                  backgroundColor: "#007bff",
                  border: "none",
                  borderRadius: "50px",
                  padding: "12px 30px",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  transition: "background-color 0.3s ease",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
              >
                Hubungi Kami
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Profil;
