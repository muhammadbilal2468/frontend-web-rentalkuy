import React from "react";
import { Link } from "react-router-dom";
import { EditBrgImg, LoginImg, LogoImg, LogoImg2 } from "../../../../../../asset";
import {
  ViewImageLandscape,
  ViewImagePotrait,
} from "../../../../../../components";
import "./ViewPenggunaSewa.css";

const ViewPenggunaSewa: React.FC = () => {
  return (
    <div className="vps">
      <h2 className="title">Pengguna</h2>
      <div className="vps-content">
        <i className="fa-solid fa-chevron-left"></i>
        <div className="vps-left">
          <h3>Pengguna Sewa</h3>
          <p className="pengguna">Pengguna</p>
          <div className="vps-profile">
            <img src={LogoImg2} alt="" />
            <p>Indra Setiawan</p>
          </div>
          <div className="vps-data">
            <div className="left">
              <div className="vps-data-box">
                <p>No Hp</p>
              </div>
              <div className="vps-data-box">
                <p>Email</p>
              </div>
              <div className="vps-data-box">
                <p>NIK</p>
              </div>
            </div>
            <div className="right">
              <div className="vps-image-box">
                <p>KTP</p>
                <img className="img1" src={LogoImg} alt="" />
              </div>
              <div className="vps-image-box">
                <p>FOTO</p>
                <img className="img2" src={LogoImg} alt="" />
              </div>
            </div>
          </div>
          <Link
            to="/admin/daftar-pengguna/riwayat-pengguna-sewa"
            style={{ textDecoration: "none" }}
          >
            <button>Riwayat Penyewaan Barang</button>
          </Link>
        </div>
        <div className="vps-right">
          <img src={EditBrgImg} alt="" />
        </div>
      </div>

      <ViewImageLandscape visible={false} />
    </div>
  );
};

export default ViewPenggunaSewa;
