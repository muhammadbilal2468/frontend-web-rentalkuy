import React from "react";
import { Photo } from "../../types/Photo";
import "./ViewImageLandscape.css";

interface ImageLandscapeProps {
  visible: boolean;
  data?: Photo;
  // onClose: () => void;
}

const ViewImageLandscape: React.FC<ImageLandscapeProps> = (props) => {
  const { visible } = props;
  const data = props;

  console.log("props", props);

  if (!visible) return <></>;

  return (
    <div className="vil">
      <div className="vil-box">
        <i
          className="fa-solid fa-rectangle-xmark"
          // onClick={() => onClose()}
        ></i>
        <img src={props.data?.url} alt="gambar" />
      </div>
    </div>
  );
};

export default ViewImageLandscape;
