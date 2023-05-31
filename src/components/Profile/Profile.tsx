import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogoImg2 } from "../../asset";
import { UserResponse } from "../../types/User";
import Alert2_2Btn from "../Alert2_2Btn/Alert2_2Btn";
import "./Profile.css";

interface ProfileProps {
  dataUser?: UserResponse;
  visible: boolean;
  onClose: () => void;
  editProfile: string;
  onProfile: () => void;
}

const Profile: React.FC<ProfileProps> = (props) => {
  const navigate = useNavigate();
  const [alertLogout, setAlertLogout] = useState(false);

  const toggleAlertLogout = () => {
    alertLogout === true ? setAlertLogout(false) : setAlertLogout(true);
  };

  const toggleLogout = () => {
    localStorage.removeItem("@uid");
    localStorage.removeItem("@role");
    navigate("/auth/login");
  };

  const { visible, onClose, editProfile, onProfile } = props;
  if (!visible) return <></>;

  return (
    <div className="profile">
      <div className="profile-box">
        <div className="header">
          <i
            className="fa-solid fa-rectangle-xmark"
            onClick={() => onClose()}
          ></i>
          <img src={props.dataUser?.url} alt="" />
          <h3>{props.dataUser?.name}</h3>
        </div>
        <div className="content">
          <Link
            to={editProfile}
            style={{ textDecoration: "none" }}
            onClick={() => onProfile()}
          >
            <p>Edit Profile</p>
          </Link>
          <p onClick={toggleAlertLogout}>Keluar</p>
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
    </div>
  );
};

export default Profile;
