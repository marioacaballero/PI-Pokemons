import axios from "axios";

// Here I've got the action when I need All Pokemons from the back-end
export const POKEMON_SEARCH = "POKEMON_SEARCH";
export const CLEAN_POKEMONS = "CLEAN_POKEMONS";
export const SET_POKEMONS = "SET_POKEMONS";
export const ORDER_POKEMONS = "ORDER_POKEMONS";
export const FILTER_POKEMONS = "FILTER_POKEMONS";
export const FILTER_POKEMONS2 = "FILTER_POKEMONS2";

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

export const cleanPokemons = () => {
  return {
    type: CLEAN_POKEMONS,
    payload: [],
  };
};

export const pokemonSearch = (data) => {
  return {
    type: POKEMON_SEARCH,
    payload: data,
  };
};

export const getPokeSearch = (name) => {
  return async (dispatch) => {
    if (name) {
      const pokemons = await axios.get(
        `http://localhost:3001/pokemons?name=${name}`
      );
      dispatch(pokemonSearch(pokemons.data));
    } else {
      dispatch(getPokemons());
    }
  };
};

export const orderPokemons = (data) => {
  return {
    type: ORDER_POKEMONS,
    payload: data,
  };
};

export const filterPokemons = (data) => {
  return {
    type: FILTER_POKEMONS,
    payload: data,
  };
};

export const filterPokemons2 = (data) => {
  return {
    type: FILTER_POKEMONS2,
    payload: data,
  };
};
