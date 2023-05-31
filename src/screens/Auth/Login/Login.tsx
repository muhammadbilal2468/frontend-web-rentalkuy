import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginImg } from "../../../asset";
import { FormValError } from "../../../components";
import { authService } from "../../../service";
import { LoginRequest, LoginResponse } from "../../../types/Login";
import "./Login.css";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<LoginResponse>();
  const [showPassword, setShowPassword] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.target as HTMLFormElement);
      const inputObject = Object.fromEntries(formData);

      const resp = await authService.login(inputObject as any as LoginRequest);

      setUser(resp.data);

      if (resp.data.role === "admin") {
        navigate("/admin/dashboard");
        localStorage.setItem("@uid", resp.data.uid);
      } else if (resp.data.provider.role === "jasa") {
        localStorage.setItem("@uid", resp.data.provider.uid);
        navigate(`/partner/dashboard`);
      } else if (resp.data.provider === null) {
        setEmailErr(true);
      }

      alert("login berhasil");
    } catch (error: any) {
      setEmailErr(false);
      setPassErr(false);
      if (error.response.data.msg === "Email tidak ditemukan") {
        setEmailErr(true);
        return;
      }
      if (error.response.data.msg === "Password salah") {
        setPassErr(true);
        return;
      }
    }
  };

  return (
    <div className="login">
      <div className="login-left">
        <img src={LoginImg} alt="" />
      </div>
      <div className="login-right">
        <h2>Halo, Selamat Datang</h2>
        <p className="sub-title">Silakan Masukkan Email dan kata sandi anda</p>

        {emailErr ? <FormValError desc=", Email tidak ditemukan" /> : <></>}
        {passErr ? (
          <FormValError desc=", Password Anda Yang Anda Masukkan Salah" />
        ) : (
          <></>
        )}

        <form onSubmit={login}>
          <div className="input_box">
            <input
              type="email"
              placeholder="Masukkan Email"
              name="email"
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

          <Link style={{ textDecoration: "none" }} to="/auth/forget-pass">
            <p className="lupasandi">Lupa Kata sandi ?</p>
          </Link>

          <button type="submit">Masuk</button>

          <p className="daftar">
            <p>
              Belum punya akun ?{" "}
              <Link style={{ textDecoration: "none" }} to="/auth/register">
                <span>Daftar</span>
              </Link>
            </p>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
