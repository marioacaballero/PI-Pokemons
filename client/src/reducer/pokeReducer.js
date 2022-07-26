import {
  CLEAN_POKE_DETAIL,
  NEW_POKEMON,
  SET_POKEMON_DETAIL,
} from "../actions/pokeActions";

const INITIAL_STATE = {
  pokemon: [],
};

// This is a reducer for actions on one Pokemon
export const pokeReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SET_POKEMON_DETAIL: {
      return {
        ...state,
        pokemon: payload,
      };
    }
    case CLEAN_POKE_DETAIL: {
      return {
        ...state,
        pokemon: payload,
      };
    }

    case NEW_POKEMON: {
      return state;
    }
    default:
      return state;
  }
};
