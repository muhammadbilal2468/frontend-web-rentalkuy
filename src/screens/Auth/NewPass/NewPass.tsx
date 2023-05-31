import React, { useState } from "react";
import { ForgetPassImg, LoginImg } from "../../../asset";
import Button from "../../../components/Button/Button";
import "./NewPass.css";

const NewPass: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showCpassword, setShowCpassword] = useState(false);

  const togglePassword1 = () => {
    setShowPassword(!showPassword);
  };
  const togglePassword2 = () => {
    setShowCpassword(!showCpassword);
  };

  return (
    <div className="new-pass-layout">
      <div className="new-pass-left">
        <img src={ForgetPassImg} alt="" />
      </div>
      <div className="new-pass-right">
        <h2>Halo, Selamat Datang</h2>
        <p className="sub-title">Silakan Masukkan Kata sandi baru anda</p>
        <form action="" method="post">
          <div className="input_box">
            <input
              type={showPassword ? "text" : "password"}
              id="myInput"
              placeholder="Kata sandi Baru"
              required
            />
            <div className="icon">
              <i className="fas fa-lock"></i>
            </div>
            <div className="icon-show">
              <i
                className={showPassword ? "fas fa-eye" : "fas fa-eye-slash"}
                onClick={togglePassword1}
              ></i>
            </div>
          </div>

          <div className="input_box">
            <input
              type={showCpassword ? "text" : "password"}
              id="myInput"
              placeholder="Konfirmasi Kata sandi"
              required
            />
            <div className="icon">
              <i className="fas fa-lock"></i>
            </div>
            <div className="icon-show">
              <i
                className={showCpassword ? "fas fa-eye" : "fas fa-eye-slash"}
                onClick={togglePassword2}
              ></i>
            </div>
          </div>
          <button type="submit">Kirim</button>
        </form>
      </div>
    </div>
  );
};

export default NewPass;
