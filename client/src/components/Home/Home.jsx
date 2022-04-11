import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getAllDogs,
  getTemperaments,
  FilterByTemperament,
  OrderByName,
  OrderByWeight,
} from "../../redux/actions";
import Card from "../Card/Card";
import Paginate from "../Paginate/Paginate";
import SearchBar from "../SearchBar/SearchBar"

import style from "../Home/Home.module.css"

function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector(state => state.dogs); //valores del estado global de redux que requiero
  const allTemperaments = useSelector(state => state.temperaments);

  const [currentPage, setCurrentPage] = useState(1);
  const dogsPerPage = 8;
  const lastIndex = currentPage * dogsPerPage; 
  const firstIndex = lastIndex - dogsPerPage;
  const currentDogs = allDogs.slice(firstIndex, lastIndex);//elementos a renderizar en la pagina, segun el valor de paginado

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
  };

  // eslint-disable-next-line
  const [orden, setOrden] = useState("");

  useEffect(() => {
    //acciones a depachar luego de montar el componente
    dispatch(getAllDogs());
    dispatch(getTemperaments());
  }, [dispatch]);

  const handleFilterByTemperament = (e) => {
    e.preventDefault();    
    console.log(e.target.value);//valor elegido correctamente
    dispatch(FilterByTemperament(e.target.value));
  };

  const handleOrderByName = (e) => {
    e.preventDefault();
    dispatch(OrderByName(e.target.value));
    setOrden(`Ordenado ${e.target.value}`);
  };

  const handleOrderByWeight = (e) => {
    e.preventDefault();
    dispatch(OrderByWeight(e.target.value));
    setOrden(`Ordenado ${e.target.value}`);
  };

  console.log("inicio")
  console.log(currentDogs)
  console.log("inicio-cierre");

  // ***************** renderizado ***********
  // ***************** renderizado ***********
  return (
    <>
      <header className={`${style.header}`}>
        <div className={`${style.header_container_left}`}>
          <SearchBar />
          <div className={`${style.header_left}`}>
            <select onChange={handleOrderByName}>
              <option disabled defaultValue>
                Alphabetical order
              </option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
            </select>

            <select onChange={handleOrderByWeight}>
              <option disabled defaultValue>
                Filter by weight
              </option>
              <option value="max_weight">Max</option>
              <option value="min_weight">Min</option>
            </select>

            <select onChange={handleFilterByTemperament}>
                <option disabled defaultValue>Temperaments</option>
                <option value="Todos">All</option>
                {
                  allTemperaments?.map(temp => (
                      <option value={temp.name}  key={temp.id}>{temp.name}</option>
                  ))
                }
            </select>
          </div>
        </div>
        
        <div className={`${style.header_right}`}>
          <Link to="/dog">CREATE DOG</Link>
        </div>
      </header>
    <div className={style.main_container}>
      
      <div className={style.container_cards}>
        {currentDogs?.map((el) => {//validacion que existan los datos
          return(
            <div className={`${style.container_card}`}>
              <Link to={"/dog-detail/"+el.id} key={el.id}>
              {
                !el.temperaments[0] //en caso de no tener temperamentos establecidos
                ? el.temperaments[0] = "no-temperaments"
                : <Card key={el.id} image={el.image} name={el.name} temperaments={el.temperaments[0].name ? el.temperaments.map(el => el.name) : el.temperaments}/>
                //si temperaments viene en un formato distinto desde la BD
              }
            </Link>
            </div>      
          )
        })}
        </div>

      <Paginate dogsPerPage={dogsPerPage} allDogs={allDogs.length} paginado={paginado}/> {/*el valor de la funcion de paginado aumenta segun el bucle for en el componente Paginate*/}
    </div>
    </>
  );
}

export default Home;
