import {
  CLEAN_POKE_DETAIL,
  SET_POKEMONS,
  SET_POKEMON_DETAIL,
} from "../actions/actions";

const INITIAL_STATE = {
  pokemons: [],
  pokemonDetail: [],
};

export const rootReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SET_POKEMONS: {
      return {
        ...state,
        pokemons: payload,
      };
    }
    case SET_POKEMON_DETAIL: {
      return {
        ...state,
        pokemonDetail: payload,
      };
    }
    case CLEAN_POKE_DETAIL: {
      return {
        ...state,
        pokemonDetail: payload,
      };
    }
    default: {
      return state;
    }
  }
};
