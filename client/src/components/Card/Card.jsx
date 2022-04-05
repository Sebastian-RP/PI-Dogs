import React from "react";
import CardS from "./Card.module.css";

export default function Card({ image, name, temperament }) {
  return (
    <div className={CardS.mainContainer}>
      <div className={CardS.imageContainer}>
        <img className={CardS.img} src={`${image}`} alt={`imagen de: ${name}`}/>
      </div>
      <h3>{name}</h3>
      <h3>{temperament}</h3>
    </div>
  );
}
