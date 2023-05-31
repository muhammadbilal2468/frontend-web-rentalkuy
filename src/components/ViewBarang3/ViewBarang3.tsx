import React from "react";
import { LogoImg2 } from "../../asset";
import { Photo } from "../../types/Photo";
import "./ViewBarang3.css";

interface ViewBarang3Props {
  visible: boolean;
  data?: Photo;
  onClose: () => void;
  status?: string;
}

const ViewBarang3: React.FC<ViewBarang3Props> = (props) => {
  const { visible, onClose, status } = props;

  console.log("props", props);

  if (!visible) return <></>;

  return (
    <div className="vb3">
      <div className="vb3-box">
        <i
          className="fa-solid fa-rectangle-xmark"
          onClick={() => onClose()}
        ></i>
        <h2>{status}</h2>
        <div className="vb3-user">
          <p className="penyewa">Penyewa</p>
          <div className="vb3-profile">
            <img src={LogoImg2} alt="" />
            <p>Muhammad Bilal</p>
          </div>
        </div>

        <div className="vb3-data">
          <div className="left">
            <i className="fa-solid fa-chevron-left"></i>
            <img src={props.data?.url} alt="" />
            <i className="fa-solid fa-chevron-right"></i>
          </div>
          <div className="right">
            <p className="barang">Laptop Mio JT</p>
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
            <div className="detail">
              <p className="desc">Stok</p>
              <p className="value">2</p>
            </div>
            <div className="detail desc">
              <p className="desc">Deskripsi</p>
              <p className="value desc">{props.data?.title}</p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBarang3;
