import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useNavigate} from "react-router-dom";
import { getTemperaments, postDog } from "../../redux/actions";

const validate = (form) => {
    let errors = {}
    if(!form.name) {
        errors.name = "Name is required, it should not contain numbers"
    }
    if(!form.min_height || !form.max_height) {
        errors.height = "Height is required"
    }
    if(!form.min_weight || !form.max_weight) {
        errors.weight = "Weight is required"
    }
    if(!form.life_span) {
        errors.life_span = "Lifespan is required, type only numbers separated by a dash (-)"
    }
    return errors
}

export default function FormAddDog() {
    
    const dispatch = useDispatch();
    const temperaments = useSelector((state) => state.temperaments);

    const [button, setButton] = useState(true);
    // const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const [form, setForm] = useState({
        name: "",
        min_height: "",
        max_height: "",
        min_weight: "",
        max_weight: "",
        life_span:  "",
        image: "",
        temperaments: [],
    })

    useEffect(() => {
        dispatch(getTemperaments());
    }, [dispatch]);

    useEffect(()=>{
        if (form.name.length > 0 && form.min_height.length > 0  && form.max_height.length > 0 && form.min_weight.length > 0 && form.max_weight.length > 0) setButton(false)
        else setButton(true)
    }, [form, setButton]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postDog(form));
        alert("The new dog was added successfully");
        setForm({
            name: "",
            min_height: "",
            max_height: "",
            min_weight: "",
            max_weight: "",
            life_span: "",
            image: "",
            temperaments: []
        });
        // navigate("/home")
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value //el valor del atributo modificado del estado en el form se actualizara con lo escrito en dicho campo
        });
        setErrors(validate({
            ...form,
            [e.target.name] : e.target.value
        }))
    }
    
    const handleSelect = (e) => {
        setForm({
            ...form,
            temperaments: [...form.temperaments, e.target.value]
        })
    }

    const handleDelete = (el) => {
        setForm({
            ...form,
            temperaments: form.temperaments.filter(temp => temp !== el)
        })
    }

    return(
        <>
        <h3>Botton de go to home</h3>
        <h4>agregando perros </h4>
        <form action="" id="form" onSubmit={handleSubmit}>
            <div className="">
                <input type="text" value={form.name} name="name" placeholder="Name..."/>
            </div>
            {/* espacio para agregar error */}

            <div className="height-container">
                <div className="min-height-container">
                    <input type="text" value={form.min_height} name="min_height" placeholder="Min height..." onChange={(e) => handleChange(e)}/>
                </div>
                {/* espacio para agregar error */}
                <div className="min-height-container">
                    <input type="text" value={form.max_height} name="max_height" placeholder="Max height..." onChange={(e) => handleChange(e)}/>
                </div>
                {/* espacio para agregar error */}
            </div>

            <div className="weight-container">
                <div className="min-weight-container">
                    <input type="text" value={form.min_weight} name="min_weight" placeholder="Min weight..." onChange={(e) => handleChange(e)}/>
                </div>
                {/* espacio para agregar error */}

                <div className="max-weight-container">
                    <input type="text" value={form.max_weight} name="max_weight" placeholder="Max weight..." onChange={(e) => handleChange(e)}/>
                </div>
                {/* espacio para agregar error */}
            </div>

            <div className="life-span-container">
                <input type="text" autoComplete="off" name="life_span" value={form.life_span} placeholder="lifespan exam: 10 - 12" onChange={(e) => handleChange(e)}/>
            </div>
            {/* espacio para agregar error */}

            <div className="image-container">
                <input type="text" autoComplete="off" value={form.image} name="image" placeholder="Image URL..." onChange={(e) => handleChange(e)}/>
            </div>

            <div className={""}>
                <h2>Select Temperaments</h2>
            </div>

            <div className={""}>
                    <select className={""} onChange={handleSelect}>
                        <option disabled selected>Temperaments</option>
                        {temperaments.map(d => (
                    
                        <option value={d.name} key={d.name+Math.random()}>{d.name}</option> //key de elementos de temperamentos, eliminar el repetido reserved
                        ))}
                    </select>
                </div>
        </form>

        <div className={""}>
            <button className={""} disabled={button} type="submit" form="form">Create Dog</button>
        </div>

        <div className="">
            <div className="">
                <h1>temperaments</h1>
            </div>

            <div className="">
                {form.temperaments.map(el => 
                <div className="" key={el}>
                    <p onClick={() => handleDelete(el)}>{el}</p>
                    <div className="">
                        <button className="" onClick={() => handleDelete(el)}>Delete X</button>
                    </div>
                </div>    
                )}
            </div>
        </div>
        </>
    )
}