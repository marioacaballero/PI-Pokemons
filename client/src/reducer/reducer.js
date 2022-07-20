import { SET_POKEMONS } from "../actions/actions";

const INITIAL_STATE = {
  pokemons: [],
};

export const rootReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SET_POKEMONS: {
      return {
        ...state,
        pokemons: payload,
      };
    }
    default: {
      return state;
    }
  }
};
