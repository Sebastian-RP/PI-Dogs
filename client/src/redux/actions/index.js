import axios from "axios";
import {
    GET_ALL_DOGS, GET_TEMPERAMENTS, GET_FILTER_TEMPERAMENTS, 
    GET_BREED, ORDER_BY_NAME, ORDER_BY_WEIGHT 
} from "../types/index";

const urlMyApi = "http://localhost:3001";

export function getAllDogs() {
    return async function (dispatch) {
        var json = await axios.get("http://localhost:3001/dogs", {
        });
        return dispatch({//necesario para despachar la accion
            type: "GET_ALL_DOGS",
            payload: json.data
        });
    }
};

export function getTemperaments() {
  return async function (dispatch) {
      var json = await axios.get(`${urlMyApi}/temperament`);
      return dispatch({
          type: "GET_TEMPERAMENTS",
          payload: json.data,
      });
    }  
};

export function FilterByTemperament(payload) {
    return{
        type: "GET_FILTER_TEMPERAMENTS",
        payload
    }
};

export function getBreed(payload) {//dogs by name
    return async function (dispatch) {//Dispatch que podemos usar gracias a la asincronia provista por el middleware thunk
        try {
            var json = await axios.get("http://localhost:3001/dogs?name=" + payload)
            return dispatch ({
                type: "GET_BREED",
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
};

export function OrderByName(payload) {
    return { 
        type: "ORDER_BY_NAME",
        payload
    }
};

export function OrderByWeight(payload) {
    return { 
        type: "ORDER_BY_WEIGHT",
        payload
    }
};
