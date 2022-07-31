import {
  CLEAN_POKEMONS,
  FILTER_POKEMONS,
  FILTER_POKEMONS2,
  ORDER_POKEMONS,
  POKEMON_SEARCH,
  SET_POKEMONS,
} from "../actions/allPokeActions";
import { pokeFilter, pokeFilter2, pokeOrder } from "./auxiliaries/auxReducers";

const INITIAL_STATE = {
  pokemons: [],
  allPokemons: [],
  pokeTypes: [],
};

//This is the reducer for actions on All Pokemons
export const allPokeReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SET_POKEMONS: {
      return {
        ...state,
        allPokemons: payload,
        pokemons: payload,
        pokeTypes: payload,
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
        pokeTypes: pokeFilter(state.allPokemons, payload),
      };
    }
    case FILTER_POKEMONS2: {
      return {
        ...state,
        pokemons: pokeFilter2(state.pokeTypes, payload),
      };
    }
    default: {
      return state;
    }
  }
};
