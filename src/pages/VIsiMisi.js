import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos"; // Import AOS Library


function VisiMisi() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi
      once: true, // Animasi hanya muncul sekali
    });
  }, []);

  return (
    <div className="container py-5">
      <div className="text-center mb-5" data-aos="fade-down">
        <h1 className="display-4 fw-bold text-primary-black">Visi dan Misi</h1>
        <p className="lead text-secondary">
          Membentuk generasi yang unggul, berkarakter, dan mampu bersaing di tingkat global.
        </p>
      </div>

      <div className="row">
        {/* Visi Section */}
        <div className="col-md-6 mb-4" data-aos="fade-right">
          <div className="card shadow border-0">
            <div className="card-body">
              <h2 className="card-title text-success">Visi</h2>
              <p className="card-text">
                Menjadi sekolah unggulan yang menghasilkan peserta didik yang cerdas, berintegritas, kreatif,
                inovatif, dan peduli lingkungan dengan berlandaskan nilai-nilai Pancasila.
              </p>
            </div>
          </div>
        </div>

        {/* Misi Section */}
        <div className="col-md-6 mb-4" data-aos="fade-left">
          <div className="card shadow border-0">
            <div className="card-body">
              <h2 className="card-title text-info">Misi</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  Menyediakan lingkungan belajar yang kondusif untuk pengembangan potensi akademik dan
                  non-akademik.
                </li>
                <li className="list-group-item">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  Mengembangkan nilai-nilai kejujuran, kedisiplinan, dan tanggung jawab pada peserta didik.
                </li>
                <li className="list-group-item">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  Mendorong kreativitas dan inovasi melalui kegiatan ekstrakurikuler.
                </li>
                <li className="list-group-item">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  Menanamkan rasa cinta lingkungan melalui program "Go Green School."
                </li>
                <li className="list-group-item">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  Membangun kolaborasi dengan masyarakat untuk mendukung pengembangan karakter peserta didik.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer-section text-center mt-5" data-aos="fade-up">
        <p className="school-address">
          Jl.SMA Narumonda, Narumonda I, Kec. Siantar Narumonda, Toba, Sumatera Utara 22384
        </p>
        <p className="school-contact">Telp: 0882-6218-2143</p>
      </footer>
    </div>
  );
}

export default VisiMisi;
