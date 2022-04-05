import React from "react";

export default function Paginate({ dogsPerPage, allDogs, paginado }) {
    const pageNumbers =[];

    for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) { //cantidad de elementos totales, dividido limite de elementos por pagina
        pageNumbers.push(i);
    }

    return(
        <nav>
            <ul>
                { pageNumbers && pageNumbers.map(number => (
                    <li onClick={() => paginado(number)} key={number}>
                         <button type="button">{number}</button> 
                    </li>
                ))}
            </ul>
        </nav>
    )
}