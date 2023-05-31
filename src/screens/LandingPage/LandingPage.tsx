import React from "react";
import { Link } from "react-router-dom";
import {
  LandingImg1,
  LandingImg2,
  LandingImg3,
  LogoImg,
  PhoneLpIMG,
  TestiImg1,
  TestiImg2,
} from "../../asset";
import Button from "../../components/Button/Button";
import "./LandingPage.css";

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      {/* -------------------------- HEADER --------------------------- */}
      <div className="lp-header">
        <div className="logo">
          <img src={LogoImg} alt="" />
        </div>
        <div className="menu">
          {/* <Link to="/auth/register">
            <p>
              Daftar <i className="fas fa-chevron-right"></i>
            </p>
          </Link> */}
        </div>
      </div>

      {/* -------------------------- HOME --------------------------- */}
      <div className="lp-home">
        <div className="lp-home-left">
          <h4>Halo, Selamat Datang </h4>
          <h2>Temukan barang yang ingin anda sewa</h2>
          <p>Gunakanlah barang sewaan anda dengan aman dan nyaman.</p>
          <Link to="/auth/login">
            <Button color="primary" size="md">
              Masuk
            </Button>
          </Link>
        </div>
        <div className="lp-home-right">
          <Link to="">
            <img src={LandingImg1} alt="" />
          </Link>
        </div>
      </div>

      {/* -------------------------- ABOUT --------------------------- */}
      <div className="lp-about">
        <h2>Mengapa memilih kami </h2>
        <p>Cari barang sewa dengan mudah dan cepat</p>
        <div className="lp-about-icon">
          <i className="fa-solid fa-clock"></i> <p>Cepat</p>
          <i className="fa-solid fa-location-dot"></i> <p> Dimana Saja</p>
          <i className="fa-solid fa-rupiah-sign"></i> <p> Terjangkau</p>
        </div>
        <div className="lp-about3">
          <div className="lp-about3-left">
            <img src={LandingImg2} alt="" />
          </div>
          <div className="lp-about3-right">
            <h2>Jasa sewa barang yang aman dan terpercaya</h2>
            <p>
              Menyediakan jasa penyewaan masal yang aman, mudah, cepat diakses,
              dan harga terjangkau.
            </p>
          </div>
        </div>
        <div className="lp-about4">
          <div className="lp-about4-left">
            <h2>Dapatkan Barang sewa di sekitarmu </h2>
            <p>
              Temukan Barang sewa di area terdekatmu agar dapat mengefesienkan
              waktumu dengan baik.
            </p>
          </div>
          <div className="lp-about4-right">
            <img src={LandingImg3} alt="" />
          </div>
        </div>
      </div>

      {/* ------------------------------- DOWNLOAD ------------------------- */}
      <div className="lp-download">
        <div className="left">
          <h2>Download Aplikasi RentalKuy</h2>
          <p>Pilihan terbaik untuk menemukan barang yang ingin anda sewa</p>
          <button>Download</button>
        </div>
        <div className="right">
          <img src={PhoneLpIMG} alt="" />
        </div>
      </div>

      {/* ---------------------------------- VISI MISI -------------------- */}
      <div className="lp-vm">
        <div className="lp-vm-visi">
          <h2>Visi</h2>
          <p>
            Menjadi perusahaan platform digital yang dapat memenuhi kebutuhan
            layanan jasa sewa menyewa dengan layanan terefesien, aman dan
            nyaman.
          </p>
        </div>
        <div className="lp-vm-misi">
          <h2>Misi</h2>
          <p>
            Menyediakan Layanan jasa sewa terbaik yang dirancang dengan pilar
            efesiensi waktu dan keamanan, memberikan kualitas pelayanan terbaik
            kami sehingga sebanyak mungkin masyarakat akan merasa terbantu.
          </p>
        </div>
      </div>

      {/* -------------------------------- TESTIMONI ------------------------ */}
      <div className="lp-testi">
        <div className="lp-testi-title">
          <h2>Testimonial Customer yang sudah puas</h2>
        </div>
        <div className="lp-testi-img">
          <img src={TestiImg1} alt="" />
          <img src={TestiImg2} alt="" />
        </div>
        <div className="lp-testi-desc">
          <p>
            “Sebelum ada platform ini saya kebingungan harus cari barang sewaan
            yang ingin saya gunakan, setelah saya tau platform tersebut kegiatan
            saya makin mudah dan menghemat waktu sekali”
          </p>
          <p>Udin saepudin, Mahasiswa</p>
        </div>
      </div>

      {/* ------------------------------- SEARCH ------------------------- */}
      <div className="lp-search">
        <div className="lp-search-left">
          <h2>
            Temukan barang <br /> yang ingin anda sewa
          </h2>
          <p>
            Kamu bisa mencari barang yang ingin kamu sewa di sekitarmu dengan
            aman dan harga terjangkau
          </p>
        </div>
        <div className="lp-search-right">
          <button>Yuk Cari</button>
        </div>
      </div>

      {/* ------------------------------- FOOTER ------------------------- */}
      <div className="lp-footer">
        <div className="perusahaan">
          <Link to="/" style={{ textDecoration: "none" }}>
            <p className="title">Perusahaan</p>
          </Link>
          <a
            href="https://rentalkuyid.wordpress.com/tentang-kami/"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <p>Tetang</p>
          </a>
          <a
            href="https://docs.google.com/document/d/1kCIHmT-ATq-cvVIZMaUf7rULszBHEoun3w3jG6lI1k8/edit?usp=sharing"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <p>Kebijakan Privasi</p>
          </a>
          <Link to="/syarat-ketentuan" style={{ textDecoration: "none" }}>
            <p>Syarat dan ketentuan penyedia</p>
          </Link>
        </div>
        <div className="gabung">
          <Link to="/" style={{ textDecoration: "none" }}>
            <p className="title">Gabung</p>
          </Link>
          <a
            href="https://drive.google.com/drive/folders/1DqSYTsPX5VEREaLSlEatXXByd4IXFaah?usp=sharing"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <p>Mitra Usaha</p>
          </a>
        </div>
        <div className="hubungi">
          <Link to="/" style={{ textDecoration: "none" }}>
            <p className="title">Hubungi</p>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <p>Bantuan</p>
          </Link>
          <a
            href="https://goo.gl/maps/Jjkp77msiYHGe6B19"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <p>Lokasi</p>
          </a>
        </div>
        <div className="tim-faq">
          <Link to="/team" style={{ textDecoration: "none" }}>
            <p>Tim</p>
          </Link>
          <Link to="/faq" style={{ textDecoration: "none" }}>
            <p>FAQ</p>
          </Link>
        </div>
        <div className="sosmed">
          <p className="title">Cari tau berita terbaru</p>
          <div className="akun-sosmed">
            <a
              href="https://instagram.com/rentalkuy.id?igshid=YmMyMTA2M2Y="
              target="_blank"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://twitter.com/rentalkuy" target="_blank">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a
              href="https://linkedin.com/in/rentalkuy-id-617999255/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
        <a
          href="https://drive.google.com/drive/folders/1DqSYTsPX5VEREaLSlEatXXByd4IXFaah?usp=sharing"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <div className="unduh">
            <i className="fa-brands fa-google-play"></i>
            <p className="title">
              Unduh Aplikasi <br /> Play Store
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
