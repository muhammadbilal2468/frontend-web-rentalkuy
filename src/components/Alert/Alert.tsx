import { link } from "fs";
import React from "react";
import { Link } from "react-router-dom";
import { AlertVerOtpImg } from "../../asset";
import Button from "../Button/Button";
import "./Alert.css";

interface AlertPorps {
  visible: boolean;
  title?: "Verifikasi OTP" | "Berhasil Verifikasi";
  desc?:
    | "Kode OTP telah di kirim ke email anda, Cek imail anda"
    | "Selamat akun anda telah terdaftar silahkkan Masuk terlebih dahulu";
  link?: "/auth/verifikasi-regis" | "/auth/login";
}

const Alert: React.FC<AlertPorps> = (props) => {
  const { visible } = props;
  const title = props.title;
  const desc = props.desc;
  const link = props.link;
  if (!visible) return <></>;
  return (
    <div className="alert">
      <div className="alert-box">
        <img src={AlertVerOtpImg} alt="" />
        <h3>{title}</h3>
        <p>{desc}</p>
        <Link to={`${link}`}>
          <Button color="primary" size="alert">
            Lanjut
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Alert;
