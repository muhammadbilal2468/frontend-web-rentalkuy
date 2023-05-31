import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Alert2_2Btn.css";

interface Alert2_2BtnProps {
  visible: boolean;
  title?: "Ingin Keluar ?";
  link?: "";
  textBtn1?: "Tidak";
  textBtn2?: "Keluar";
  onBtn1: () => void;
  onBtn2: () => void;
}

const Alert2_2Btn: React.FC<Alert2_2BtnProps> = (props) => {
  const { visible, onBtn1, onBtn2 } = props;
  const title = props.title;
  const link = props.link;
  const textBtn1 = props.textBtn1;
  const textBtn2 = props.textBtn2;

  if (!visible) return <></>;

  return (
    <div className="alert">
      <div className="alert-box">
        <h3>{title}</h3>
        <div className="button">
          <Button color="primary" size="alert" onClick={() => onBtn1()}>
            {textBtn1}
          </Button>
          <Button color="primary" size="alert" onClick={() => onBtn2()}>
            {textBtn2}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Alert2_2Btn;
