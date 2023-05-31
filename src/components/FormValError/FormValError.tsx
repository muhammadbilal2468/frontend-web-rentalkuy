import React from "react";
import "./FormValError.css";

export interface FormValErrorProps {
  desc:
    | ", Kata sandi yang anda masukkan salah, Masukkan kembali kata sandi anda."
    | ", akun email anda belum terdaftar."
    | ", Email tidak ditemukan"
    | ", Password Anda Yang Anda Masukkan Salah"
    // register -----
    | ", Email sudah tersedia"
    | ", Nomor Induk Kependuduan anda sudah tersedia."
    | ", Nomor Handphone sudah tersedia"
    | ", Upload Gambar Gagal"
    | ", Tidak ada upload file";
}

const FormValError: React.FC<FormValErrorProps> = (props) => {
  const desc = props.desc;
  return (
    <div className="form-validation">
      <i className="fa-solid fa-triangle-exclamation"></i>{" "}
      <p>
        <span>Maaf</span>
        {desc}
      </p>
    </div>
  );
};

export default FormValError;
