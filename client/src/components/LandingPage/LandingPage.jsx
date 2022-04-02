import React from "react";
import { Link } from "react-router-dom";
import style from "../LandingPage/LandingPage.module.css";

function LandingPage() {
  return (
    <>
      <div className={`${style.producto}`}>
      <Link to="/home">Go home</Link>
        <h1 className="" >A DOGPEDIA</h1>
        <h3>aplication about man's best friend</h3>
      </div>
    </>
  );
}

export default LandingPage;
