import React, { useState } from "react";
import { ForgetPassImg, LoginImg } from "../../../asset";
import "./ForgetPass.css";

const ForgetPass: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="forget-pass-layout">
      <div className="forget-pass-left">
        <img src={ForgetPassImg} alt="" />
      </div>
      <div className="forget-pass-right">
        <h2>Lupa Kata Sandi</h2>
        <p className="sub-title">Silakan Masukkan Email yang sudah terdaftar</p>
        <form action="" method="post">
          <div className="input_box">
            <input type="email" placeholder="Masukkan Email" required />
            <div className="icon">
              <i className="fas fa-envelope"></i>
            </div>
          </div>
          <button type="submit">Kirim</button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPass;
