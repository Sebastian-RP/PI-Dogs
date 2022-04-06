import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { showDogDetails } from "../../redux/actions";

export default function DogDetails() {
    const dispatch = useDispatch();
    let { id } = useParams();

    useEffect(() => {
        dispatch(showDogDetails(id));
    }, [dispatch, id]);

    const details = useSelector((state) => state.details)


    let nameDog, imageDog, temperamentDog, heightDog, weightDog, lifeSpanDog;
    if (details[0]) { //una vez ya se hayan traido los datos renderizalos
        nameDog = details[0].name;
        imageDog = details[0].image;
        temperamentDog = [...details[0].temperament]
        heightDog = details[0].height;
        weightDog = details[0].weight;
        lifeSpanDog = details[0].life_span;
        console.log(lifeSpanDog);
    }

    return(
        <div>
            <img src={imageDog} alt={`imagen de ${nameDog}`}/>
            <h2>
                {nameDog}
            </h2>
            <ul>
                {temperamentDog?.map(t => <li key={t}>{t}</li>)}
            </ul>
            <h3>{heightDog && heightDog[0]} - {heightDog && heightDog[1]}</h3>
            <h3>{heightDog &&  weightDog[0]} - {weightDog && weightDog[1]}</h3>
            <h4>{lifeSpanDog}</h4>
        </div>
    )
}