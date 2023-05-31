import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Alert1Btn.css";

interface Alert1BtnProps {
  visible: boolean;
  img: string;
  title?:
    | "Verifikasi OTP"
    | "Berhasil Verifikasi"
    | "Berhasil Registrasi"
    | "Ingin hapus ?"
    | "Berhasil memperbarui"
    | "Berhasil Menambahkan Barang"
    | "Menuggu Pembayaran";
  desc?:
    | "Kode OTP telah di kirim ke email anda, Cek imail anda"
    | "Selamat akun anda telah terdaftar silahkkan Masuk terlebih dahulu"
    | "Apakah anda ingin menghapus barang sewaan anda ?"
    | "Barang berhasil Diperbarui "
    | "Anda berhasil menambahkan Daftar barang sewaan anda"
    | "Menunggu penyewa malakukan pembayaran";
  link?:
    | "/auth/verifikasi-regis"
    | "/auth/login"
    | "/partner/barang-saya"
    | "/partner/dashboard";
  text?: "Hapus" | "Tidak" | "Selesai" | "Lanjut";
}

const Alert1Btn: React.FC<Alert1BtnProps> = (props) => {
  const { visible } = props;
  const img = props.img;
  const title = props.title;
  const desc = props.desc;
  const link = props.link;
  const text = props.text;

  if (!visible) return <></>;

  return (
    <div className="alert">
      <div className="alert-box">
        <img src={img} alt="" />
        <h3>{title}</h3>
        <p>{desc}</p>
        <Link to={`${link}`}>
          <Button color="primary" size="alert">
            {text}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Alert1Btn;
