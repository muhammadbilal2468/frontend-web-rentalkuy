import React from "react";
import "./Button.css";

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  color?: "primary" | "black" | "white";
  size?: "sm" | "md" | "lg" | "form" | "alert";
  type?: "submit";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
  const size = props.size || "md";
  const color = props.color || "primary";
  const type = props.type || "submit";
  return (
    <>
      <button
        className={`btn btn-size-${size} btn-color-${color}`}
        onClick={props.onClick}
        disabled={props.disabled}
        type={type}
      >
        {props.children}
      </button>
    </>
  );
};

export default Button;
