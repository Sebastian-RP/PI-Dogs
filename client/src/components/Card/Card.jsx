import React from "react";
import CardS from "./Card.module.css";
import style from "../Card/Card.module.css";

export default function Card({ image, name, temperaments }) {
  return (
    <div className={CardS.main_container}>
      <div className={CardS.image_container}>
        <img className={CardS.img} src={`${image}`} alt={`imagen de: ${name}`}/>
      </div>
      <h3>{name}</h3>
      <div className={`${style.temperaments_container}`}>
        {
        temperaments.map((temps) => <h3 key={temps+Math.random}>{temps}</h3>)
        }
      </div>
      
    </div>
  );
}
