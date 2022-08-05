import axios from "axios";

// Here I've got the action when I need All Pokemons from the back-end
export const POKEMON_SEARCH = "POKEMON_SEARCH";
export const CLEAN_POKEMONS = "CLEAN_POKEMONS";
export const SET_POKEMONS = "SET_POKEMONS";
export const ORDER_POKEMONS = "ORDER_POKEMONS";
export const FILTER_POKEMONS = "FILTER_POKEMONS";
export const FILTER_POKEMONS2 = "FILTER_POKEMONS2";

//action to set pokemons to redux state
export const setPokemons = (data) => {
  return {
    type: SET_POKEMONS,
    payload: data,
  };
};

// function to get pokemons from api and dispatch setPokemons
export const getPokemons = () => {
  return async (dispatch) => {
    try {
      const pokemons = await axios.get("http://localhost:3001/pokemons");
      dispatch(setPokemons(pokemons.data));
    } catch (error) {
      console.log(error);
    }
  };
};

//action to clean the pokemon state on redux
export const cleanPokemons = () => {
  return {
    type: CLEAN_POKEMONS,
    payload: [],
  };
};

//action to set pokemon on redux state
export const pokemonSearch = (data) => {
  return {
    type: POKEMON_SEARCH,
    payload: data,
  };
};

//function to find one pokemon on api, if doesn't exist get alls
export const getPokeSearch = (name) => {
  return async (dispatch) => {
    try {
      if (name) {
        const pokemon = await axios.get(
          `http://localhost:3001/pokemons?name=${name}`
        );
        // console.log(pokemon.data);
        if (pokemon.data.length > 0) {
          return dispatch(pokemonSearch(pokemon.data));
        }
        dispatch(getPokemons());
        alert("Sorry!! Pokemon not found on API 😥, but.. YOU CAN ADD IT 😎!");
      } else {
        dispatch(getPokemons());
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//action to set order on pokemon state
export const orderPokemons = (data) => {
  return {
    type: ORDER_POKEMONS,
    payload: data,
  };
};

//action to do the first filter on pokemon state
export const filterPokemons = (data) => {
  return {
    type: FILTER_POKEMONS,
    payload: data,
  };
};

//action to do the second filter on pokemon state
export const filterPokemons2 = (data) => {
  return {
    type: FILTER_POKEMONS2,
    payload: data,
  };
};
