import React from "react";
import { HapusImg, LogoImg2 } from "../../asset";
import { Photo } from "../../types/Photo";
import "./ViewBarang.css";

interface ViewBarangProps {
  visible: boolean;
  data?: Photo;
  onClose: () => void;
}

const ViewBarang: React.FC<ViewBarangProps> = (props) => {
  const { visible, onClose } = props;

  console.log("props", props);

  if (!visible) return <></>;

  return (
    <div className="vb">
      <div className="vb-box">
        <i
          className="fa-solid fa-rectangle-xmark"
          onClick={() => onClose()}
        ></i>

        <div className="left">
          <i className="fa-solid fa-chevron-left"></i>
          <img src={props.data?.url} alt="" />
          <i className="fa-solid fa-chevron-right"></i>
        </div>
        <div className="right">
          <h2>Laptop Mio JT</h2>
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
          <div className="button">
            <button>Tampilkan</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBarang;
