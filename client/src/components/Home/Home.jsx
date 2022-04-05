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
// import style from "../Home/Home.modules.css";

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

  console.log(allDogs);//llegando todos los perros****************

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

  return (
    <>
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
            {allTemperaments.map(temp => (
                <option value={temp.name}  key={temp.id}>{temp.name}</option>
            ))}
      </select>

      <div>botones</div>
      <div className="container-cards">
        
        <div>
          {currentDogs?.map((el) => {//validacion que existan los datos
            return(
              <Link to={"/home/"+el.id} key={el.id}>
                <Card image={el.image} name={el.name} temperament={el.temperament} key={el.id}/>
              </Link>
            )
          })}
        </div>

      </div>

      <Paginate dogsPerPage={dogsPerPage} allDogs={allDogs.length} paginado={paginado}/> {/*el valor de la funcion de paginado aumenta segun el bucle for en el componente Paginate*/}
    </>
  );
}

export default Home;
