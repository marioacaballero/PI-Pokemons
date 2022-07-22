import axios from "axios";
export const SET_POKEMONS = "SET_POKEMONS";
export const SET_POKEMON_DETAIL = "SET_POKEMON_DETAIL";
export const CLEAN_POKE_DETAIL = "CLEAN_POKE_DETAIL";

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

export const setPokemonDetail = (data) => {
  return {
    type: SET_POKEMON_DETAIL,
    payload: data,
  };
};

export const getPokemonDetail = (id) => {
  return async (dispatch) => {
    const pokemon = await axios.get(`http://localhost:3001/pokemons/${id}`);
    dispatch(setPokemonDetail(pokemon.data));
  };
};

export const cleanPokeDetail = () => {
  return {
    type: CLEAN_POKE_DETAIL,
    payload: [],
  };
};
