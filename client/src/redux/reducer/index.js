import {
  GET_ALL_DOGS,
  GET_TEMPERAMENTS,
  GET_FILTER_TEMPERAMENTS,
  GET_BREED,
  ORDER_BY_NAME,
  ORDER_BY_WEIGHT,
} from "../types/index";

const intialState = {
  dogs: [],
  temperaments: [],
  allDogs: [],
  detail: [],
};

const rootReducer = (state = intialState, action) => {
  switch (action.type) {
    case "GET_ALL_DOGS":
      return {
        ...state,
        dogs: action.payload,
        allDogs: action.payload,
      };
    case "GET_TEMPERAMENTS":
      return {
        ...state,
        temperaments: action.payload,
      };
    case "GET_FILTER_TEMPERAMENTS":
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
    case "GET_BREED":
      return {
        ...state,
        dogs: action.payload,
      };
    case "ORDER_BY_NAME":
      const sortedName =
        action.payload === "A-Z"
          ? state.allDogs.sort((a, b) => {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.allDogs.sort((a, b) => {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        dogs: sortedName,
      };

    case "ORDER_BY_WEIGHT":
      const sortedWeight =
        action.payload === "min_weight"
          ? state.allDogs.sort((a, b) => {
              if (parseInt(a.weight[1]) > parseInt(b.weight[1])) {
                return 1;
              }
              if (parseInt(b.weight[1]) > parseInt(a.weight[1])) {
                return -1;
              }
              return 0;
            })
          : state.allDogs.sort((a, b) => {
              if (parseInt(a.weight[1]) > parseInt(b.weight[1])) {
                return -1;
              }
              if (parseInt(b.weight[1]) > parseInt(a.weight[1])) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        dogs: sortedWeight,
      };
    default:
      return state;
    // default: return {dogs: ["hola2", "hola3", "hola4"]}
  }
};

export default rootReducer;
