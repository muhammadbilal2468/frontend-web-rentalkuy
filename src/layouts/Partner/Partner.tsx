import React, { useEffect, useState } from "react";
import {
  NavLink,
  Outlet,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { BgLogoImg, LogoImg, LogoImg2 } from "../../asset";
import { Notification } from "../../components";
import Alert2_2Btn from "../../components/Alert2_2Btn/Alert2_2Btn";
import AlertChat from "../../components/Chat/Chat";
import Profile from "../../components/Profile/Profile";
import { userService } from "../../service";
import { JasaResponse } from "../../types/Jasa";
import { UserResponse } from "../../types/User";
import "./Partner.css";

const Partner: React.FC = () => {
  const navigate = useNavigate();

  const [dataJasa, setdataJasa] = useState<JasaResponse>();
  const [dataUser, setdataUser] = useState<UserResponse>();

  const [sidebar, setSidebar] = useState(false);
  const [chat, setChat] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);

  // ----- AURO LOGOUT TANPA TOKEN ---- //
  // if (localStorage.getItem("@uid") === undefined) {
  //   navigate("/auth/login");
  // }

  // --------------- DATA USER ------------------ //
  const profileUser = async () => {
    try {
      const respUser = await userService.getUser();
      console.log(respUser, "resp User");

      setdataUser(respUser.data);
    } catch (e) {
      //
    }
  };
  useEffect(() => {
    profileUser();
  }, []);

  // --------------- DATA JASA ------------------ //
  const profileJasa = async (uid: any) => {
    if (uid === null) return;
    try {
      const respJasa = await userService.getJasa(uid);
      console.log(respJasa, "resp Jasa");

      setdataJasa(respJasa.data);
    } catch (e) {
      console.log(e, "eror dari Jasa");
    }
  };
  useEffect(() => {
    profileJasa(localStorage.getItem("@uid"));
  }, [localStorage.getItem("@uid")]);

  // ------------------- //

  const toggleSidebar = () => {
    sidebar === true ? setSidebar(false) : setSidebar(true);
  };

  const toggleChat = () => {
    chat === true ? setChat(false) : setChat(true);
  };
  const toggleNotification = () => {
    notification === true ? setNotification(false) : setNotification(true);
  };
  const toggleProfile = () => {
    profile === true ? setProfile(false) : setProfile(true);
  };

  const togleSidebarHide = `${sidebar ? "active" : "passive"}`;
  return (
    <>
      <div className={`partner ${togleSidebarHide}`}>
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
            <img src={BgLogoImg} alt="" className="bg-logo" />
          </div>

          <div className="menu">
            <NavLink
              className={(navData) => (navData.isActive ? "linkactive" : "")}
              to={`/partner/dashboard`}
              style={{ textDecoration: "none" }}
            >
              <div className={`list-menu ${togleSidebarHide}`}>
                <i className="fa-solid fa-home"></i>
                <p className={`p ${togleSidebarHide}`}>Dashboard</p>
              </div>
            </NavLink>
            <NavLink
              className={(navData) => (navData.isActive ? "linkactive" : "")}
              to="/partner/barang-saya"
              style={{ textDecoration: "none" }}
            >
              <div className={`list-menu ${togleSidebarHide}`}>
                <i className="fa-solid fa-bag-shopping"></i>
                <p className={`p ${togleSidebarHide}`}>Barang Saya</p>
              </div>
            </NavLink>
            <NavLink
              className={(navData) => (navData.isActive ? "linkactive" : "")}
              to="/partner/barang-arsip"
              style={{ textDecoration: "none" }}
            >
              <div className={`list-menu ${togleSidebarHide}`}>
                <i className="fa-solid fa-cart-arrow-down"></i>
                <p className={`p ${togleSidebarHide}`}>Barang Arsip</p>
              </div>
            </NavLink>
            <NavLink
              className={(navData) => (navData.isActive ? "linkactive" : "")}
              to="/partner/tambah-barang"
              style={{ textDecoration: "none" }}
            >
              <div className={`list-menu ${togleSidebarHide}`}>
                <i className="fa-solid fa-cart-plus"></i>
                <p className={`p ${togleSidebarHide}`}>Tambah Barang</p>
              </div>
            </NavLink>
            <NavLink
              className={(navData) => (navData.isActive ? "linkactive" : "")}
              to="/partner/saldo"
              style={{ textDecoration: "none" }}
            >
              <div className={`list-menu ${togleSidebarHide}`}>
                <i className="fa-solid fa-wallet icon"></i>
                <p className={`p ${togleSidebarHide}`}>Saldo</p>
              </div>
            </NavLink>
          </div>
        </div>

        <div className="header">
          <div className="toko">
            <h3>Selamat Datang</h3>
            <h2>{dataJasa?.company_name || "Toko"}</h2>
          </div>
          <div className="right">
            <i className="fa-solid fa-bell" onClick={toggleNotification}></i>
            <i
              className="fa-sharp fa-solid fa-comment-dots"
              onClick={toggleChat}
            ></i>
            <div className="profil" onClick={toggleProfile}>
              <img src={dataUser?.url} alt="" />
            </div>
          </div>
        </div>

        <div className={`content ${togleSidebarHide}`}>
          <Outlet />
        </div>
      </div>

      <AlertChat visible={chat} onClose={toggleChat} />

      <Notification visible={notification} onClose={toggleNotification} />

      <Profile
        dataUser={dataUser}
        visible={profile}
        onClose={toggleProfile}
        editProfile="/partner/edit-profile"
        onProfile={toggleProfile}
      />
      {/* <Alert2_2Btn
        visible={false}
        textBtn1="Tidak"
        textBtn2="Keluar"
        title="Ingin Keluar ?"
      /> */}
    </>
  );
};

export default Partner;
