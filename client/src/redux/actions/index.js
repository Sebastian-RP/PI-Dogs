import axios from "axios";
import {    
    GET_ALL_DOGS, GET_TEMPERAMENTS, GET_FILTER_TEMPERAMENTS, 
    GET_BREED, GET_AZ, GET_ZA, GET_DESC_WEIGHT, GET_ASC_WEIGHT 
} from "../types/index";

const urlMyApi = "http://localhost:3001";

export function getAllDogs() {
    return async function (dispatch) {
        var json = await axios.get(`${urlMyApi}/dogs`, {

        });
        return dispatch({//necesario para despachar la accion
            type: GET_ALL_DOGS,
            payload: json.data,
        });
    }
};

export function getTemperaments() {
  return async function (dispatch) {
      var json = await axios.get(`${urlMyApi}/temperament`);
      return dispatch({
          type: GET_TEMPERAMENTS,
          payload: json.data,
      });
    }  
};

export function FilterByTemperament(payload) {
    return{
        type: GET_FILTER_TEMPERAMENTS,
        payload
    }
};

export function getBreed() {//dogs by name
    return{
        type: GET_BREED,
    }
};

export function getAz() {
    return{
        type: GET_AZ
    }
};

export function getZa() {
    return{
        type: GET_ZA
    }
};



