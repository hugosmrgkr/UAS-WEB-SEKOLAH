import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // import the AOS styles

function Fasilitas() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS animations with a 1-second duration
  }, []);

  return (
    <div className="container mt-5">
      {/* Judul Halaman */}
      <div className="text-center mb-5" data-aos="fade-up">
        <h1 className="display-4 fw-bold text-primary-black">Fasilitas</h1>
        <p className="text-muted">
          Fasilitas terbaik yang tersedia di SMA Negeri 1 Siantar Narumonda untuk mendukung kegiatan
          belajar-mengajar.
        </p>
      </div>

      {/* Daftar Fasilitas */}
      <div className="row g-4">
        {/* Fasilitas 1 */}
        <div className="col-md-4" data-aos="fade-right">
          <div className="card shadow-sm h-100 text-center">
            <img
              src="/kelas.jpg"
              alt="Ruang Kelas"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title mt-3">Ruang Kelas Modern</h5>
              <p className="card-text text-muted">
                Ruang kelas yang nyaman dan dilengkapi dengan fasilitas multimedia modern untuk
                mendukung pembelajaran interaktif.
              </p>
            </div>
          </div>
        </div>

        {/* Fasilitas 2 */}
        <div className="col-md-4" data-aos="fade-up">
          <div className="card shadow-sm h-100 text-center">
            <img
              src="perpus.jpg"
              alt="Perpustakaan"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title mt-3">Perpustakaan Lengkap</h5>
              <p className="card-text text-muted">
                Perpustakaan dengan koleksi buku yang lengkap dan area baca yang nyaman untuk siswa.
              </p>
            </div>
          </div>
        </div>

        {/* Fasilitas 3 */}
        <div className="col-md-4" data-aos="fade-left">
          <div className="card shadow-sm h-100 text-center">
            <img
              src="lab komputer.jpg"
              alt="Laboratorium Komputer"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title mt-3">Laboratorium Komputer</h5>
              <p className="card-text text-muted">
                Laboratorium komputer dengan perangkat modern untuk mendukung pembelajaran berbasis
                teknologi.
              </p>
            </div>
          </div>
        </div>

        {/* Fasilitas 4 */}
        <div className="col-md-4" data-aos="fade-right">
          <div className="card shadow-sm h-100 text-center">
            <img
              src="lapangan.jpg"
              alt="Lapangan Olahraga"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title mt-3">Lapangan Olahraga</h5>
              <p className="card-text text-muted">
                Lapangan olahraga yang luas untuk berbagai kegiatan olahraga seperti basket, voli, dan
                sepak bola.
              </p>
            </div>
          </div>
        </div>

        {/* Fasilitas 5 */}
        <div className="col-md-4" data-aos="fade-up">
          <div className="card shadow-sm h-100 text-center">
            <img
              src="studio.jpg"
              alt="Studio Seni"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title mt-3">Studio Seni</h5>
              <p className="card-text text-muted">
                Studio seni untuk mendukung kreativitas siswa dalam seni musik, tari, dan teater.
              </p>
            </div>
          </div>
        </div>

        {/* Fasilitas 6 */}
        <div className="col-md-4" data-aos="fade-left">
          <div className="card shadow-sm h-100 text-center">
            <img
              src="kesehatan.jpg"
              alt="Unit Kesehatan"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title mt-3">Unit Kesehatan Sekolah</h5>
              <p className="card-text text-muted">
                Unit kesehatan sekolah untuk memberikan layanan kesehatan kepada siswa.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>

      {/* Footer */}
      <footer className="footer-section" data-aos="fade-up">
        <p className="school-address">
          Jl.SMA Narumonda, Narumonda I, Kec. Siantar Narumonda, Toba, Sumatera Utara 22384
        </p>
        <p className="school-contact">Telp: 0882-6218-2143</p>
      </footer>
    </div>
  );
}

export default Fasilitas;
