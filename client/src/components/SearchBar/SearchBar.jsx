import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getBreed } from "../../redux/actions/"

export default function SearchBar() {
    const dispatch = useDispatch();
    const [searchDog, setSearchDog] = useState("");

    const handleInput = (e) => {
        e.preventDefault()
        setSearchDog(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getBreed(searchDog));
    }

    return(
        <>
        <input type="text" onChange={handleInput}/>
        <button type="submit" onClick={handleSubmit}>Search</button>
        </>
    )
}