import React, { ChangeEvent, useState } from "react";
import { NavLink, Outlet, Link, useNavigate } from "react-router-dom";
import { BgLogoImg, LogoImg, LogoImg2 } from "../../asset";
import { Alert2_2Btn } from "../../components";
import "./Admin.css";

const Admin: React.FC = () => {
  const navigate = useNavigate();

  const [sidebar, setSidebar] = useState(false);
  const [listMenu1, setListMenu1] = useState(false);
  const [alertLogout, setAlertLogout] = useState(false);

  const toggleSidebar = () => {
    sidebar === true ? setSidebar(false) : setSidebar(true);
    setListMenu1(false);
  };

  const togleListMenu1 = (state: boolean) => {
    setListMenu1(!state);
  };

  const toggleAlertLogout = () => {
    alertLogout === true ? setAlertLogout(false) : setAlertLogout(true);
  };

  const toggleLogout = () => {
    localStorage.removeItem("@uid");
    localStorage.removeItem("@role");
    navigate("/auth/login");
  };

  const togleSidebarHide = `${sidebar ? "active" : "passive"}`;

  return (
    <>
      <div className={`admin ${togleSidebarHide}`}>
        <div className="sidebar">
          <div
            className={`togle-sidebar ${togleSidebarHide}`}
            onClick={toggleSidebar}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </div>

          <div className={`logo ${togleSidebarHide}`}>
            <img
              className={`img ${togleSidebarHide}`}
              src={sidebar ? LogoImg2 : LogoImg}
              alt=""
            />
            <img
              src={BgLogoImg}
              alt=""
              className={`bg-logo ${togleSidebarHide}`}
            />
          </div>

          <div className="menu">
            <NavLink to="/admin/dashboard" style={{ textDecoration: "none" }}>
              <div className={`list-menu ${togleSidebarHide}`}>
                <i className="fa-solid fa-home"></i>
                <p className={`p ${togleSidebarHide}`}>Dashboard</p>
              </div>
            </NavLink>
            <NavLink to="/admin/activity" style={{ textDecoration: "none" }}>
              <div className={`list-menu ${togleSidebarHide}`}>
                <i className="fa-regular fa-calendar-days"></i>
                <p className={`p ${togleSidebarHide}`}>Activity</p>
              </div>
            </NavLink>
            <div className={`list-menu ${togleSidebarHide}`}>
              <i className="fa-solid fa-user-group"></i>
              <p className={`p ${togleSidebarHide}`}>Pengguna</p>
              <i
                className={
                  listMenu1
                    ? "fa-solid fa-chevron-up"
                    : "fa-solid fa-chevron-down"
                }
                onClick={(e) => togleListMenu1(listMenu1)}
              ></i>
              {listMenu1 && (
                <div className={`list-menu-drop ${togleSidebarHide}`}>
                  <NavLink
                    to="/admin/daftar-pengguna"
                    style={{ textDecoration: "none" }}
                  >
                    <a>Daftar Pengguna</a>
                  </NavLink>
                  <NavLink
                    to="/admin/riwayat-sewa-barang"
                    style={{ textDecoration: "none" }}
                  >
                    <a>Riwayat sewa barang</a>
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink to="/admin/transaksi" style={{ textDecoration: "none" }}>
              <div className={`list-menu ${togleSidebarHide}`}>
                <i className="fa-solid fa-list-check"></i>
                <p className={`p ${togleSidebarHide}`}>Transaksi</p>
              </div>
            </NavLink>

            <div
              className={`list-menu ${togleSidebarHide}`}
              onClick={toggleAlertLogout}
            >
              <i className="fa-solid fa-right-from-bracket logout"></i>
              <p className={`p logout ${togleSidebarHide}`}>Keluar</p>
            </div>
          </div>
        </div>

        <div className={`content ${togleSidebarHide}`}>
          <Outlet />
        </div>
      </div>
      <Alert2_2Btn
        title="Ingin Keluar ?"
        visible={alertLogout}
        textBtn1="Tidak"
        textBtn2="Keluar"
        onBtn2={() => toggleLogout()}
        onBtn1={toggleAlertLogout}
      />
    </>
  );
};

export default Admin;
