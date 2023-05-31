import React from "react";
import { Photo } from "../../types/Photo";
import "./ViewBarang1Btn.css";

interface ViewBarang1BtnProps {
  visible: boolean;
  data?: any;
  onClose: () => void;
  button: string;
}

const ViewBarang1Btn: React.FC<ViewBarang1BtnProps> = (props) => {
  const formatRupiah = (value: any) => {
    if (!value) return;
    return value
      .toString()
      .split("")
      .reverse()
      .join("")
      .match(/\d{1,3}/g)
      .join(".")
      .split("")
      .reverse()
      .join("");
  };

  const { visible, onClose, button } = props;

  console.log("props", props);

  if (!visible) return <></>;

  return (
    <div className="vb1btn">
      <div className="vb1btn-box">
        <i
          className="fa-solid fa-rectangle-xmark"
          onClick={() => onClose()}
        ></i>

        <div className="left">
          <i className="fa-solid fa-chevron-left"></i>
          <img src={props.data?.url} alt="URL Gambar Belum ada di API" />
          <i className="fa-solid fa-chevron-right"></i>
        </div>
        <div className="right">
          <h2>{props.data.name}</h2>
          <div className="rating">
            <i className="fa-sharp fa-solid fa-star"></i>
            <p>4.3</p>
            <p>(20 penilaian) | 20 Tersewa </p>
          </div>
          <div className="price-day">
            <p className="desc">Rp.{formatRupiah(props.data.price)}</p>
            <p className="value">1 Hari</p>
          </div>
          <div className="detail">
            <p className="desc">Kategori</p>
            <p className="value">{props.data.categoryId}</p>
          </div>
          {/* <div className="detail">
            <p className="desc">Kondisi</p>
            <p className="value">Belum ada di API</p>
          </div> */}
          <div className="detail">
            <p className="desc">Stok</p>
            <p className="value">{props.data.quantity}</p>
          </div>
          <div className="detail desc">
            <p className="desc">Deskripsi</p>
            <p className="value desc">{props.data?.description}</p>
          </div>
          <div className="button">
            <button>{button}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBarang1Btn;
