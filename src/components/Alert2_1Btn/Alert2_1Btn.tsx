import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Alert2_1Btn.css";

interface Alert2_1BtnProps {
  visible: boolean;
  title?: "Berhasil memperbarui";
  desc?: "Data behasil diperbarui";
  link?: "";
  text?: "Selesai";
}

const Alert2_1Btn: React.FC<Alert2_1BtnProps> = (props) => {
  const { visible } = props;
  const title = props.title;
  const desc = props.desc;
  const link = props.link;
  const text = props.text;

  if (!visible) return <></>;

  return (
    <div className="alert">
      <div className="alert-box">
        <h3>{title}</h3>
        <p>{desc}</p>
        <Link to={`${link}`}>
          <Button color="primary" size="alert">
            {text}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Alert2_1Btn;
