import React from "react";
import { Photo } from "../../types/Photo";
import "./ViewImagePotrait.css";

interface ImagePotraitProps {
  visible: boolean;
  data?: Photo;
  onClose: () => void;
}

const ViewImagePotrait: React.FC<ImagePotraitProps> = (props) => {
  const { visible, onClose } = props;
  const data = props;

  console.log("props", props);

  if (!visible) return <></>;

  return (
    <div className="vip">
      <div className="vip-box">
        <i
          className="fa-solid fa-rectangle-xmark"
          onClick={() => onClose()}
        ></i>
        <img src={props.data?.url} alt="gambar" />
      </div>
    </div>
  );
};

export default ViewImagePotrait;
