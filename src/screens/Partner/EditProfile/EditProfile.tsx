import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { LogoImg2 } from "../../../asset";
import Alert2_1Btn from "../../../components/Alert2_1Btn/Alert2_1Btn";
import { userService } from "../../../service";
import { JasaResponse } from "../../../types/Jasa";
import { UserResponse } from "../../../types/User";
import "./EditProfile.css";

const EditProfile: React.FC = () => {
  const [dataJasa, setdataJasa] = useState<JasaResponse>();
  const [dataUser, setdataUser] = useState<UserResponse>();

  // --------------- DATA USER ------------------ //
  const profileUser = async () => {
    try {
      const resp = await userService.getUser();
      // console.log(resp, "berhasil ");

      setdataUser(resp.data);
    } catch (e) {
      //
    }
  };
  useEffect(() => {
    profileUser();
  }, []);

  // --------------- DATA JASA ------------------ //
  const profileJasa = async (uidJasa: any) => {
    try {
      const resp = await userService.getJasa(uidJasa);
      console.log(resp, "data Jasa ");

      setdataJasa(resp.data);
    } catch (e) {
      //
    }
  };
  const uidJasa = localStorage.getItem("@uid");
  console.log(uidJasa, "uidJasa");
  useEffect(() => {
    profileJasa(uidJasa);
  }, []);

  return (
    <div className="edit-profile">
      <div className="header-ep">
        <Link to="/partner/dashboard">
          <i className="fa-solid fa-chevron-left"></i>
        </Link>
        <h2>Edit Profil</h2>
      </div>
      <form action="">
        <div className="data-profile">
          <div className="left">
            <div className="img">
              <img src={dataUser?.url} alt="" />
            </div>
          </div>
          <div className="right">
            <div className="input-box-ep">
              <p className="desc">kontak</p>
              <input type="text" defaultValue={dataJasa?.company_name} />
              <i className="fa-solid fa-building icon"></i>
              <i className="fa-solid fa-pen"></i>
            </div>
            <div className="input-box-ep">
              <input type="text" defaultValue={dataJasa?.company_number} />
              <i className="fa-solid fa-phone icon"></i>
              <i className="fa-solid fa-pen"></i>
            </div>
            <div className="input-box-ep">
              <input type="text" defaultValue={dataJasa?.company_email} />
              <i className="fa-solid fa-envelope icon"></i>
              <i className="fa-solid fa-pen"></i>
            </div>
            <div className="input-box-ep">
              <select className="select">
                <option value={dataJasa?.bank} selected hidden>
                  {dataJasa?.bank}
                </option>
                <option value="bca">BCA</option>
                <option value="bri">BRI</option>
                <option value="bni">BNI</option>
              </select>
              <i className="fa-solid fa-landmark icon"></i>
            </div>
            <div className="input-box-ep">
              <input type="text" defaultValue={dataJasa?.account_name} />
              <i className="fa-solid fa-wallet icon"></i>
              <i className="fa-solid fa-pen"></i>
            </div>
            <div className="input-box-ep">
              <input type="text" defaultValue={dataJasa?.account_number} />
              <i className="fa-solid fa-credit-card icon"></i>
              <i className="fa-solid fa-pen"></i>
            </div>
            <div className="input-box-ep alamat">
              <p className="desc">Alamat</p>
              <input type="text" defaultValue={dataJasa?.address} />
              <i className="fa-solid fa-location-dot icon"></i>
              <i className="fa-solid fa-pen"></i>
            </div>
          </div>
          <div className="button">
            <button>Simpan Perubahan</button>
          </div>
        </div>
      </form>
      <Alert2_1Btn
        visible={false}
        desc="Data behasil diperbarui"
        title="Berhasil memperbarui"
        text="Selesai"
      />
    </div>
  );
};
export default EditProfile;
