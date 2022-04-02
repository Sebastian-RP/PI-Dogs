import {
  GET_ALL_DOGS,
  GET_TEMPERAMENTS,
  GET_FILTER_TEMPERAMENTS,
  GET_BREED,
  GET_AZ,
  GET_ZA,
  GET_DESC_WEIGHT,
  GET_ASC_WEIGHT,
} from "../types/index";

const intialState = {
  dogs: [],
  temperaments: [],
  allDogs: [],
  detail: [],
};

const rootReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_ALL_DOGS:
      return {
        ...state,
        dogs: action.payload,
        allDogs: action.payload,
      };
    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };
    case GET_FILTER_TEMPERAMENTS:
      const allDogs = state.allDogs;
      let filteredDogs = [];
      if (action.payload === "Todos") {
        filteredDogs = allDogs;
      } else {
        for (let i = 0; i < allDogs.length; i++) {
          let found = allDogs[i].temperaments.find(
            (t) => t.name === action.payload
          );
          if (found) filteredDogs.push(allDogs[i]);
        }
      }
      return {
        ...state,
        dogs: filteredDogs,
      };

    case GET_BREED:
      return {};
    case GET_AZ:
      return {};
    case GET_ZA:
      return {};
    case GET_DESC_WEIGHT:
      return {};
    case GET_ASC_WEIGHT:
      return {};
    default:
      break;
  }
};

export default rootReducer;
