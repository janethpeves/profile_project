import React from "react";
import style from "./Button.module.css";

export const Button = ({ icon, text, onClick, outlined }) => {
  return (
    <div
      className={`${style.button__container} ${
        outlined && style.button__outlined
      }`}
      onClick={onClick}
    >
      {icon && 
      <div className={style.icon__container}>
        <img src={icon} alt="icono de saludo" />
        </div>}
      <p className={style.button__text}>{text}</p>
    </div>
  );
};
