import React from "react";
import { Link } from "react-router-dom";
import { AlertVerOtpImg } from "../../asset";
import Button from "../Button/Button";
import "./Alert2Btn.css";

interface Alert2BtnProps {
  visible: boolean;
  img: string;
  title?:
    | "Verifikasi OTP"
    | "Berhasil Verifikasi"
    | "Ingin hapus ?"
    | "Ingin keluar ?"
    | "Hapus barang ?"
    | "Hapus Barang Pembatalan ?";
  desc?:
    | "Kode OTP telah di kirim ke email anda, Cek imail anda"
    | "Selamat akun anda telah terdaftar silahkkan Masuk terlebih dahulu"
    | "Apakah anda ingin menghapus barang sewaan anda ?"
    | "Memperbarui barang dan simpan untuk melanjutkan"
    | "Barang yang sudah di hapus tidak bisa kembali lagi, Benar ingin menghapus ?"
    | "Daftar barang pembatalan yang sudah dihapus tidak bisa kembali lagi, Benar ingin menghapus ?";
  link1?:
    | "/auth/verifikasi-regis"
    | "/auth/login"
    | "/partner/barang-saya"
    | "/partner/dashboard";
  link2?:
    | "/auth/verifikasi-regis"
    | "/auth/login"
    | "/partner/barang-saya"
    | "/partner/dashboard";
  button1?: "Hapus" | "Tidak";
  button2?: "Hapus" | "Tidak" | "Simpan";
}

const Alert2Btn: React.FC<Alert2BtnProps> = (props) => {
  const { visible } = props;
  const img = props.img;
  const title = props.title;
  const desc = props.desc;
  const link1 = props.link1;
  const link2 = props.link2;
  const button1 = props.button1;
  const button2 = props.button2;
  if (!visible) return <></>;
  return (
    <div className="alert">
      <div className="alert-box">
        <img src={img} alt="" />
        <h3>{title}</h3>
        <p>{desc}</p>
        <div className="button">
          <Link to={`${link1}`}>
            <Button color="white" size="alert">
              {button1}
            </Button>
          </Link>
          <Link to={`${link2}`}>
            <Button color="primary" size="alert">
              {button2}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Alert2Btn;
