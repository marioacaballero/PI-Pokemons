import axios from "axios";
export const SET_POKEMONS = "SET_POKEMONS";
export const SET_POKEMON_DETAIL = "SET_POKEMON_DETAIL";
export const CLEAN_POKE_DETAIL = "CLEAN_POKE_DETAIL";
export const POKEMON_SEARCH = "POKEMON_SEARCH";
export const CLEAN_POKEMONS = "CLEAN_POKEMONS";

export const pokemonSearch = (data) => {
  return {
    type: POKEMON_SEARCH,
    payload: data,
  };
};

export const getPokeSearch = (name) => {
  return async (dispatch) => {
    const pokemons = await axios.get(
      `http://localhost:3001/pokemons?name=${name}`
    );
    dispatch(pokemonSearch(pokemons.data));
  };
};

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
