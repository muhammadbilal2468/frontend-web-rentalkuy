import React from "react";
import { Photo } from "../../types/Photo";
import "./ViewProofPayment.css";

interface ImageProps {
  visible: boolean;
  onClose: () => void;
}

const ViewProofPayment: React.FC<ImageProps> = (props) => {
  const { visible, onClose } = props;
  const data = props;

  console.log("props", props);

  if (!visible) return <></>;

  return (
    <div className="vpp">
      <div className="vpp-box">
        <i
          className="fa-solid fa-rectangle-xmark"
          onClick={() => onClose()}
        ></i>
        <div className="vpp-time">
          <div className="vpp-hour">
            <p className="title">Jam</p>
            <div className="time">
              <p>10</p>
            </div>
          </div>
          <div className="vpp-minute">
            <p className="title">Menit</p>
            <div className="time">
              <p>10</p>
            </div>
          </div>
          <div className="vpp-second">
            <p className="title">Detik</p>
            <div className="time">
              <p>10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProofPayment;
