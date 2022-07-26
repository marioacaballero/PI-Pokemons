//Here I've got the rootReducer created by combineReducers.
import { combineReducers } from "redux";
import { allPokeReducer } from "./allPokeReducer";
import { pokeReducer } from "./pokeReducer";
import { typesReducer } from "./typesReducer";

export const rootReducer = combineReducers({
  pokemons: allPokeReducer,
  pokemon: pokeReducer,
  types: typesReducer,
});

//Now I have a state with 3 props, each with his props on INITIAL_STATE.
/* state = {
    pokemons: {
      pokemons: []
    },
    pokemon: {
       pokemon: []
    },
    types: {
      types: []
     }
}
*/
