import React, { useState } from "react";
import style from "./HomePage.module.css";
import { Button } from "../components/Button/Button";

import info from "../data/datos.json";
import logo from "../assets/logo.png";
import hand from "../assets/hand.png"
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";

export const HomePage = () => {
  const [data, setData] = useState(info);
  console.log(data.name);


  const onNavigateRoute = (url) =>{
    window.open(url, '_blank')
  }

  return (
    <div className={style.section__container}>
      <div className={style.data__container}>
        <div className={style.data__logo__container}>
          <img className={style.data_logo} src={logo} />
        </div>
        <div className={style.data__info}>
          <h2 className={style.data__nombre}>{data.name}</h2>
          <h3 className={style.data__cargo}>{data.cargo}</h3>
        </div>

        <Button onClick={() => console.log("click")} text="Guardar contacto" />
        <Button onClick={() => onNavigateRoute("https://sempiterno-group.lat/")} text="Sitio web" />
        <Button
          onClick={() => console.log("click")}
          outlined={true}
          icon={hand}
          text="Déjame tus datos"
        />

        <div className={style.data__social__container}>
          <a
            href="https:www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFillTelephoneFill size={25} color="#D43371" />
          </a>
          <a
            href="https:www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin size={35} color="#D43371" />
          </a>
          <a
            href="https:www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLocationDot size={28} color="#D43371" />
          </a>
        </div>
        <p className={style.aditional__info}>by Contactless</p>
      </div>
    </div>
  );
};
