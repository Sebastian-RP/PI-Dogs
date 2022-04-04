import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs, getTemperaments, FilterByTemperament, getBreed, getAz, getDescWeight, getAscWeight } from "../../redux/actions"
// import style from "../Home/Home.modules.css";


function Home() {

  const dispatch = useDispatch();
  const allDogs =  useSelector((state) => state.dogs); //valores del estado global de redux que requiero
  const allTemperaments = useSelector((state) => state.temperaments);

  useEffect(() => {//acciones a depachar
    dispatch(getAllDogs());
    dispatch(getTemperaments());
  }, [dispatch]); //renderizar tras cada dispatch

    return (
      <>
        <div>botones</div>
        <div className="container-cards">
          <h3>hola yyyy</h3>
        </div>
      </>
    );
  }
  
  export default Home;
  