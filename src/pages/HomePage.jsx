import React, { useState } from "react";
import style from "./HomePage.module.css";
import info from "../data/datos.json";

import logo from "../assets/logo.png";
import hand from "../assets/hand.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";

import { Button } from "../components/Button/Button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";

import { agregarContacto } from "../helpers/agregarContacto";

export const HomePage = () => {
	const [data, setData] = useState(info);
	const [modalVisible, setModalVisible] = useState(false);

	const [newLead, setNewLead] = useState({
		name: "",
		phone: "",
	});

	const handleChangeInput = (e) => {
		setNewLead({
			...newLead,
			[e.target.name]: e.target.value,
		});
	};

	const onNavigateRoute = (url) => {
		window.open(url, "_blank", "noopener,noreferrer");
	};

	return (
		<>
			<div className={style.section__container}>
				<div className={style.data__container}>
					<div className={style.data__logo__container}>
						<img className={style.data__logo} src={logo} />
					</div>
					<div className={style.data__info}>
						<h2 className={style.data__nombre}>
							{data.name} {data.lastname}
						</h2>
						<h3 className={style.data__cargo}>{data.description}</h3>
					</div>

					<Button
						text="Guardar contacto"
						onClick={() => agregarContacto(data.name, data.lastname, data.email, data.phone)}
					/>
					<Button text="Sitio web" onClick={() => onNavigateRoute(data.urlWeb)} />
					<Button
						text="Déjame tus datos"
						outlined={true}
						icon={hand}
						onClick={() => setModalVisible(true)}
					/>

					<div className={style.data__social__container}>
						<a href={data.urlTel} target="_blank" rel="noopener noreferrer">
							<BsFillTelephoneFill size={25} color="#D43371" />
						</a>
						<a href={data.urlWeb} target="_blank" rel="noopener noreferrer">
							<AiFillLinkedin size={35} color="#D43371" />
						</a>
						<a href={data.urlAddress} target="_blank" rel="noopener noreferrer">
							<FaLocationDot size={28} color="#D43371" />
						</a>
					</div>
				</div>
			</div>

			<Dialog
				header="Déjame tus datos"
				visible={modalVisible}
				className={style.modal__contain}
				onHide={() => setModalVisible(false)}
				draggable={false}
			>
				<div className={style.form__container}>
					<div className={style.form__input__container}>
						<label>Registra tu nombre / Enter your name:</label>
						<InputText
							className={style.form__input}
							name="name"
							value={newLead.name}
							placeholder={`Ejm: ${data.name}`}
							autoComplete="off"
							onChange={(e) => handleChangeInput(e)}
						/>
					</div>

					<div className={style.form__input__container}>
						<label>Registra tu número / Enter your number:</label>
						<InputText
							className={style.form__input}
							type="number"
							name="phone"
							value={newLead.phone}
							placeholder="Ejm: +51928927926"
							autoComplete="off"
							onChange={(e) => handleChangeInput(e)}
						/>
					</div>

					<Button text="Enviar / Send" scaleOff={true} onClick={() => console.log(newLead)} />
				</div>
			</Dialog>
		</>
	);
};
