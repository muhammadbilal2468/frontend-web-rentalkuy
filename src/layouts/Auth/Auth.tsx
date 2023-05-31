import React from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthImg, LogoImg } from "../../asset";
import "./Auth.css";

const Auth: React.FC = () => {
  return (
    <div className="auth-layout">
      <div className="auth-header">
        <div className="auth-logo">
          <Link to="/">
            <img src={LogoImg} alt="" />
          </Link>
        </div>
        <div className="auth-menu">
          <ul>
            {/* <Link style={{ textDecoration: "none" }} to="/auth/login">
              <li>Masuk &gt; </li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/auth/register">
              <li>Daftar &gt;</li>
            </Link>{" "} */}
          </ul>
        </div>
      </div>
      <div className="auth-content">
        <Outlet />
      </div>
      <div className="auth-footer">
        <div className="about-team">
          <p>About</p>
          <p>OurTeam</p>
        </div>
        <div className="faq">
          <p>FAQ</p>
        </div>
        <div className="icon">
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-google-play"></i>
        </div>
      </div>
    </div>
  );
};

export default Auth;
