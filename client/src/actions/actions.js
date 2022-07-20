import axios from "axios";
export const SET_POKEMONS = "SET_POKEMONS";

export const setPokemons = (data) => {
  return {
    type: SET_POKEMONS,
    payload: data,
  };
};

export const getPokemons = () => {
  return async (dispatch) => {
    const pokemons = await axios.get("http://localhost:3001/pokemons");
    dispatch(setPokemons(pokemons.data));
  };
};
