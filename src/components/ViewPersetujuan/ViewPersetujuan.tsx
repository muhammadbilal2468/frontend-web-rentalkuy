import React from "react";
import { HapusImg, LogoImg, LogoImg2 } from "../../asset";
import "./ViewPersetujuan.css";

interface ViewPersetujuanProps {
  visible: boolean;
  onClose: () => void;
}

const ViewPersetujuan: React.FC<ViewPersetujuanProps> = (props) => {
  const { visible, onClose } = props;
  if (!visible) return <></>;

  return (
    <div className="vp">
      <div className="vp-box">
        <div className="close" onClick={() => onClose()}>
          <i className="fa-solid fa-left-long"></i>
        </div>
        <div className="left">
          <h2>Pengajuan Sewa</h2>
          <i className="fa-solid fa-chevron-left"></i>
          <img src={HapusImg} alt="" />
          <i className="fa-solid fa-chevron-right"></i>
        </div>
        <div className="right">
          <div className="profil">
            <img src={LogoImg2} alt="" />
            <h2>Indra Setiawan</h2>
          </div>
          <h2 className="barang">Laptop Asus</h2>
          <div className="rating">
            <i className="fa-sharp fa-solid fa-star"></i>
            <p>4.3</p>
            <p>(20 penilaian) | 20 Tersewa </p>
          </div>
          <div className="price-day">
            <p className="desc">Rp.200.000</p>
            <p className="value">1 Hari</p>
          </div>
          <div className="detail">
            <p className="desc">Kategori</p>
            <p className="value">elektronik</p>
          </div>
          <div className="detail">
            <p className="desc">Kondisi</p>
            <p className="value">Barang Lama</p>
          </div>
          <div className="detail desc">
            <p className="desc">Deskripsi</p>
            <p className="value desc">
              Mobil tahun keluar 2004, dengan surat surat lengkap dan pajak
              aktif. mobil ini menampung maksimal 4 orang. bagasi bisa menampung
              25Kg.
            </p>
          </div>
          <div className="tgl">
            <div className="tgl-sewa">
              <p className="desc">Tanggal Sewa</p>
              <p className="value">02/11/2022</p>
            </div>
            <div className="tgl-pengembalian">
              <p className="desc">Tanggal Pengembalian</p>
              <p className="value">02/11/2022</p>
            </div>
          </div>
          <div className="detail down">
            <p className="desc">Metode Pembayaran</p>
            <p className="value">Down Payment</p>
          </div>
          <div className="detail down">
            <p className="desc">Lama Sewa</p>
            <p className="value">2 Hari</p>
          </div>
          <div className="detail down">
            <p className="desc">Sewa Per Hari</p>
            <p className="value">
              Rp.300.000 <span>x3</span>
            </p>
          </div>
          <div className="detail down">
            <p className="desc">Total Harga Lama Sewa</p>
            <p className="value">Rp.300.000</p>
          </div>
          <div className="button">
            <button className="btn-no">Tolak</button>
            <button className="btn-yes">Terima</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPersetujuan;
