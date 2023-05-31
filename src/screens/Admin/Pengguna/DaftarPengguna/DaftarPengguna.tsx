import React from "react";
import "./DaftarPengguna.css";
import { NavLink, Outlet } from "react-router-dom";

const DaftarPengguna: React.FC = () => {
  return (
    <div className="dp">
      <h2 className="title">Daftar Pengguna</h2>
      <br />
      <div className="dp-btn">
        <NavLink
          className={(btnData) => (btnData.isActive ? "btn-dp-active" : "")}
          to="/admin/daftar-pengguna/pengguna-sewa"
          style={{ textDecoration: "none" }}
        >
          <div className="btn-ps">
            <p>Pengguna Sewa</p>
          </div>
        </NavLink>
        <NavLink
          className={(btnData) => (btnData.isActive ? "btn-dp-active" : "")}
          to="/admin/daftar-pengguna/penyedia-jasa"
          style={{ textDecoration: "none" }}
        >
          <div className="btn-pj">
            <p>Penyedia Jasa</p>
          </div>
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default DaftarPengguna;
