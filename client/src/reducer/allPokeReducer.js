import {
  CLEAN_POKEMONS,
  FILTER_POKEMONS,
  ORDER_POKEMONS,
  POKEMON_SEARCH,
  SET_POKEMONS,
} from "../actions/allPokeActions";
import { pokeFilter, pokeOrder } from "./auxiliaries/auxReducers";

const INITIAL_STATE = {
  pokemons: [],
  allPokemons: [],
};

//This is the reducer for actions on All Pokemons
export const allPokeReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SET_POKEMONS: {
      return {
        ...state,
        allPokemons: payload,
        pokemons: payload,
      };
    }
    case CLEAN_POKEMONS: {
      return {
        ...state,
        pokemons: payload,
      };
    }
    case POKEMON_SEARCH: {
      return {
        ...state,
        pokemons: payload,
      };
    }
    case ORDER_POKEMONS: {
      return {
        ...state,
        pokemons: pokeOrder(state.pokemons, payload),
      };
    }
    case FILTER_POKEMONS: {
      return {
        ...state,
        pokemons: pokeFilter(state.allPokemons, payload),
      };
    }
    default: {
      return state;
    }
  }
};
