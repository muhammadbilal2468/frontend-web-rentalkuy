import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AlertSuccessVerImg, LoginImg } from "../../../asset";
import { FormValError } from "../../../components";
import { authService } from "../../../service";
import { RegisterRequest } from "../../../types/Register";
import "./Register.css";
import Alert1Btn from "../../../components/Alert1Btn/Alert1Btn";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showCpassword, setShowCpassword] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone_number: "",
    identity_number: "",
    password: "",
    confPassword: "",
    perusahaan: "",
    number_jasa: "",
    lokasi: "",
    photo_identity: "",
  });
  const [agree, setAgree] = useState<boolean>(false);
  const [btnDisable, setBtnDisable] = useState<boolean>(false);
  const [nikErr, setNikErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);
  const [password, setPassword] = useState<string>("");
  const [isPasswordMatch, setIsPasswordMatch] = useState<boolean>();

  // --------- onSubmit Form --------- //
  const register = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.target as HTMLFormElement);
      const inputObject = Object.fromEntries(formData);

      const register = await authService.register(
        inputObject as any as RegisterRequest
      );

      console.log("msg", register.data.msg);
      console.log("register", register);

      setShowAlert(true);
    } catch (error: any) {
      setEmailErr(false);
      setNikErr(false);
      setPhoneErr(false);

      if (error.response.data.status === 401) {
        setEmailErr(true);
        return;
      }
      if (error.response.data.status === 402) {
        setNikErr(true);
        return;
      }
      if (error.response.data.status === 403) {
        setPhoneErr(true);
        return;
      }
      console.log(error.response.data.message);
    }
  };

  // -------------- BTN disable ---------- //
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const btnStateFn = () => {
    if (
      data.name.length > 0 &&
      data.email.length > 0 &&
      data.phone_number.length > 0 &&
      data.identity_number.length > 0 &&
      data.password.length > 0 &&
      data.confPassword.length > 0 &&
      data.perusahaan.length > 0 &&
      data.number_jasa.length > 0 &&
      data.lokasi.length > 0 &&
      agree
    ) {
      return false;
    } else {
      return true;
    }
  };

  useEffect(() => {
    const state = btnStateFn();
    setBtnDisable(state);
  }, [
    data.name,
    data.email,
    data.phone_number,
    data.identity_number,
    data.password,
    data.confPassword,
    data.perusahaan,
    data.number_jasa,
    data.lokasi,
    agree,
  ]);

  // ------- Hidden Password -------- //
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleCpassword = () => {
    setShowCpassword(!showCpassword);
  };

  // ------ Confirm Password ----------- //
  const isPasswordMatchCheck = (value: string) => {
    if (value !== password) {
      setIsPasswordMatch(false);
    } else {
      setIsPasswordMatch(true);
    }
  };

  return (
    <div className="register">
      <div className="register-left">
        <img src={LoginImg} alt="" />
      </div>
      <div className="register-right">
        <h2>Daftar</h2>
        <h3>Halo, Selamat Datang</h3>
        <p className="sub-title">Silakan Masukkan data diri anda</p>

        {nikErr ? (
          <FormValError desc=", Nomor Induk Kependuduan anda sudah tersedia." />
        ) : (
          <></>
        )}
        {emailErr ? <FormValError desc=", Email sudah tersedia" /> : <></>}
        {phoneErr ? (
          <FormValError desc=", Nomor Handphone sudah tersedia" />
        ) : (
          <></>
        )}

        <form onSubmit={register}>
          <div className="input_box">
            <input
              type="text"
              placeholder="Masukkan Nama"
              name="name"
              onChange={handleChange}
              autoComplete="off"
              required
            />
            <div className="icon">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <div className="input_box">
            <input
              type="text"
              placeholder="Nomor Telepon"
              name="phone_number"
              onChange={handleChange}
              autoComplete="off"
              required
            />
            <div className="icon">
              <i className="fas fa-phone"></i>
            </div>
          </div>
          <div className="input_box">
            <input
              type="text"
              placeholder="Nomor Induk Kependudukan (NIK)"
              name="identity_number"
              onChange={handleChange}
              autoComplete="off"
              required
            />
            <div className="icon">
              <i className="fas fa-id-card"></i>
            </div>
          </div>
          <div className="input_box">
            <input
              type="email"
              placeholder="Masukkan Email"
              name="email"
              onChange={handleChange}
              autoComplete="off"
              required
            />
            <div className="icon">
              <i className="fas fa-envelope"></i>
            </div>
          </div>
          <div className="input_box">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Kata sandi"
              name="password"
              onChange={(e) => {
                handleChange(e);
                setPassword(e.target.value);
              }}
              autoComplete="off"
              required
            />
            <div className="icon">
              <i className="fas fa-lock"></i>
            </div>
            <div className="icon-show">
              <i
                className={showPassword ? "fas fa-eye" : "fas fa-eye-slash"}
                onClick={togglePassword}
              ></i>
            </div>
          </div>
          <div className="input_box">
            <input
              type={showCpassword ? "text" : "password"}
              placeholder="Konfirmasi Kata sandi"
              name="confPassword"
              onChange={(e) => {
                handleChange(e);
                isPasswordMatchCheck(e.target.value);
              }}
              autoComplete="off"
              required
            />
            <div className="icon">
              <i className="fas fa-lock"></i>
            </div>
            <div className="icon-show">
              <i
                className={showCpassword ? "fas fa-eye" : "fas fa-eye-slash"}
                onClick={toggleCpassword}
              ></i>
            </div>
          </div>

          {isPasswordMatch == false ? (
            <p className="password-match">Password Tidak Cocok</p>
          ) : null}
          <div className="input_box">
            <input
              type="text"
              placeholder="Nama Perusahaan"
              name="perusahaan"
              onChange={handleChange}
              autoComplete="off"
              required
            />
            <div className="icon">
              <i className="fa-solid fa-building"></i>
            </div>
          </div>
          <div className="input_box">
            <input
              type="text"
              placeholder="Nomor Perusahaan"
              name="number_jasa"
              onChange={handleChange}
              autoComplete="off"
              required
            />
            <div className="icon">
              <i className="fa-solid fa-phone"></i>
            </div>
          </div>
          <div className="input_box">
            <input
              type="text"
              placeholder="Alamat Perusahaan"
              name="lokasi"
              onChange={handleChange}
              autoComplete="off"
              required
            />
            <div className="icon">
              <i className="fa-solid fa-map-location"></i>
            </div>
          </div>
          <div className="input_box">
            <input
              type="file"
              placeholder="Upload Foto KTP Anda"
              name="photo_identity"
              onChange={handleChange}
              required
            />
            <div className="icon">
              <i className="fa-sharp fa-solid fa-address-card"></i>
            </div>
          </div>
          <div className="rgister-checkbox">
            <input
              type="checkbox"
              onChange={() => setAgree(!agree)}
              checked={agree}
            />
            <p>
              Dengan ini pengguna setuju untuk mengikuti
              <span> Syarat & ketentuan </span>
            </p>
          </div>
          <button
            type="submit"
            className={`button ${btnDisable ? "" : "button-active"}`}
            disabled={btnDisable}
          >
            Daftar
          </button>
        </form>
      </div>

      {/* <Alert1Btn
        text="Lanjut"
        img={AlertSuccessVerImg}
        visible={showAlert}
        title="Berhasil Registrasi"
        desc="Selamat akun anda telah terdaftar silahkkan Masuk terlebih dahulu"
        link="/auth/login"
      /> */}
    </div>
  );
};

export default Register;
