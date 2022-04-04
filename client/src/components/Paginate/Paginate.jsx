import React from "react";

export default function Paginate({ dogsPerPage, allDogs, paginado }) {
    const pageNumbers =[];

    for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) {
        pageNumbers.push(i);
    }

    return(
        <nav>
            <ul>
                { pageNumbers && pageNumbers.map(number => (
                    <li onClick={() => paginado(number)} key={number}>
                        <a>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}