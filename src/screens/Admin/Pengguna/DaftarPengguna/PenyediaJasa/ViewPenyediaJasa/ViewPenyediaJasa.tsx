import React from "react";
import { Link, useParams, useRoutes } from "react-router-dom";
import { EditBrgImg, LoginImg, LogoImg, LogoImg2 } from "../../../../../../asset";
import "./ViewPenyediaJasa.css";

const ViewPenyediaJasa: React.FC = () => {
  const route = useParams();
  console.log("params", route);

  return (
    <div className="vpj">
      <h2 className="title">Pengguna</h2>
      <div className="vpj-content">
        <div className="vpj-left">
          <i className="fa-solid fa-chevron-left"></i>
          <h3>Pengguna Penyedia Jasa</h3>
          <div className="vpj-data">
            <div className="vpj-user">
              <div className="left">
                <p className="pengguna">Pengguna</p>
                <div className="vpj-profile">
                  <img src={LogoImg2} alt="" />
                  <p>Indra Setiawan</p>
                </div>
                <div className="vpj-data-left">
                  <div className="vpj-data-box">
                    <p>No Hp</p>
                  </div>
                  <div className="vpj-data-box">
                    <p>Email</p>
                  </div>
                  <div className="vpj-data-box">
                    <p>NIK</p>
                  </div>
                  <div className="vpj-image-box ktp">
                    <p>KTP</p>
                    <img className="img1" src={LogoImg} alt="" />
                  </div>
                  <div className="vpj-image-box foto">
                    <p>FOTO</p>
                    <img className="img2" src={LogoImg} alt="" />
                  </div>
                </div>
              </div>

              <div className="right">
                <p className="penyedia">Pengguna Sebagai Penyedia</p>
                <div className="vpj-data-right">
                  <div className="vpj-data-box">
                    <i className="fa-solid fa-building"></i>
                    <p>Nama Perusahaan</p>
                  </div>
                  <div className="vpj-data-box">
                    <i className="fa-solid fa-phone"></i>
                    <p>Nomor Perusahaan</p>
                  </div>
                  <div className="vpj-data-box">
                    <i className="fa-solid fa-envelope"></i>
                    <p>Email Perusahaan</p>
                  </div>
                  <div className="vpj-data-box">
                    <i className="fa-solid fa-credit-card"></i>
                    <p>ATM</p>
                  </div>
                  <div className="vpj-data-box">
                    <i className="fa-solid fa-credit-card"></i>
                    <p>Nomor ATM</p>
                  </div>
                  <div className="vpj-data-box">
                    <i className="fa-solid fa-credit-card"></i>
                    <p>Nama Pengguna ATM</p>
                  </div>
                  <div className="vpj-data-box address">
                    <i className="fa-solid fa-location-dot"></i>
                    <p>ALAMAT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="vpj-btn">
          <Link
            to="/admin/daftar-pengguna/view-penyedia-jasa"
            style={{ textDecoration: "none" }}
          >
            <button>Riwayat Penyewaan Barang</button>
          </Link>
          <Link
            to="/admin/daftar-pengguna/barang-penyedia-jasa"
            style={{ textDecoration: "none" }}
          >
            <button>Lihat Barang Sewa Penyedia</button>
          </Link>
        </div>

        <div className="vpj-right">
          <img src={EditBrgImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ViewPenyediaJasa;
