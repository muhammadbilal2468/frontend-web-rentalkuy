import React from "react";
import { Link } from "react-router-dom";
import { LogoImg2 } from "../../../asset";
import Alert2_1Btn from "../../../components/Alert2_1Btn/Alert2_1Btn";
import "./Saldo.css";

const Saldo: React.FC = () => {
  return (
    <div className="saldo">
      <h2>Minggu Ini</h2>
      <div className="minggu-ini">
        <div className="time">
          <p>Senin</p>
          <p>7-14 Desember 2022</p>
        </div>
        <div className="jumlah-saldo">
          <p className="bold">Saldo anda</p>
          <p>Rp.250.000</p>
        </div>
      </div>

      <h3>Diperoses</h3>
      <Link to="/partner/saldo-diproses" style={{ textDecoration: "none" }}>
        <div className="diproses">
          <div className="left">
            <i className="fa-solid fa-wallet icon"></i>
          </div>
          <div className="right">
            <div className="desc">
              <div className="time">
                <p className="hari">Senin</p>
                <p>7-14 Desember 2022</p>
              </div>
              <p className="bold">Rp.100.000</p>
            </div>
            <div className="status">
              <i className="fa-regular fa-clock"></i>
            </div>
          </div>
        </div>
      </Link>

      <h3>Sudah Ditransfer</h3>
      <Link to="/partner/saldo-ditransfer" style={{ textDecoration: "none" }}>
        <div className="ditransfer">
          <div className="left">
            <i className="fa-solid fa-wallet icon"></i>
          </div>
          <div className="right">
            <div className="desc">
              <div className="time">
                <p className="hari">Senin</p>
                <p>7-14 Desember 2022</p>
              </div>
              <p className="bold">Rp.100.000</p>
            </div>
            <div className="status">
              <i className="fa-regular fa-circle-check"></i>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Saldo;
