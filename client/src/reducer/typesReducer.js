import { SET_TYPES } from "../actions/typeActions";

const INITIAL_STATE = {
  types: [],
};

//This is a reducer for actions on Pokemons Types
export const typesReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SET_TYPES: {
      return {
        ...state,
        types: payload,
      };
    }
    default: {
      return state;
    }
  }
};
