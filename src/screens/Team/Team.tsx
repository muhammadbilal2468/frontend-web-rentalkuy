import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ayubImg,
  bgTeamImg,
  bilalImg,
  boskyImg,
  faqIMG,
  indraImg,
  LogoImg,
  riyadhImg,
  teamBottomLeftImg,
  teamBottomRightImg,
  teamTopLeftImg,
  teamTopRightImg,
} from "../../asset";
import "./Team.css";

const Team: React.FC = () => {
  return (
    <div className="team">
      <img src={teamTopLeftImg} alt="" className="team-itl" />
      <img src={teamBottomLeftImg} alt="" className="team-ibl" />
      <img src={teamTopRightImg} alt="" className="team-itr" />
      <img src={teamBottomRightImg} alt="" className="team-ibr" />

      <Link to="/" style={{ textDecoration: "none" }}>
        <i className="fa-solid fa-chevron-left"></i>
      </Link>

      <h2 className="team-title">Tim</h2>

      <div className="person-wrp">
        <div className="person">
          <img src={bgTeamImg} alt="" className="bgperson" />
          <img src={riyadhImg} alt="" className="img-person" />
          <div className="name-person">
            <p className="name">Riyadh Asjad Mulyadi</p>
            <p className="divisi">Mobile Dev</p>
          </div>
        </div>
        <div className="person">
          <img src={bgTeamImg} alt="" className="bgperson" />
          <img src={bilalImg} alt="" className="img-person" />
          <div className="name-person">
            <p className="name">Muhammad Bilal</p>
            <p className="divisi">FrontEnd</p>
          </div>
        </div>
        <div className="person">
          <img src={bgTeamImg} alt="" className="bgperson" />
          <img src={indraImg} alt="" className="img-person" />
          <div className="name-person">
            <p className="name">Indra Setiawan</p>
            <p className="divisi">UI/UX Design</p>
          </div>
        </div>
      </div>

      <div className="person-wrp">
        <div className="person">
          <img src={bgTeamImg} alt="" className="bgperson" />
          <img src={boskyImg} alt="" className="img-person" />
          <div className="name-person">
            <p className="name">Bosky Hutajulu</p>
            <p className="divisi">Beckend</p>
          </div>
        </div>
        <div className="person">
          <img src={bgTeamImg} alt="" className="bgperson" />
          <img src={ayubImg} alt="" className="img-person" />
          <div className="name-person">
            <p className="name">Ayub Agustin</p>
            <p className="divisi">Business Analyst</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
