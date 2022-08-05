import axios from "axios";

//Here I've got the actions when I need/create one Pokemon from the back-end
export const SET_POKEMON_DETAIL = "SET_POKEMON_DETAIL";
export const CLEAN_POKE_DETAIL = "CLEAN_POKE_DETAIL";
export const NEW_POKEMON = "NEW_POKEMON";

//action to set pokemon details on redux state
export const setPokemonDetail = (data) => {
  return {
    type: SET_POKEMON_DETAIL,
    payload: data,
  };
};

//function to get details from api and dispatch setPokemonDetail
export const getPokemonDetail = (id) => {
  return async (dispatch) => {
    try {
      const pokemon = await axios.get(`http://localhost:3001/pokemons/${id}`);
      dispatch(setPokemonDetail(pokemon.data));
    } catch (error) {
      console.log(error);
    }
  };
};

//action to clean details on the pokemon state
export const cleanPokeDetail = () => {
  return {
    type: CLEAN_POKE_DETAIL,
    payload: [],
  };
};

//action to post a new pokemon on db
export const newPokemon = (data) => {
  let types;

  //first check if data contain the types and set into the types array
  if (data.firstT || data.secondT) {
    types = [data.firstT, data.secondT];
  } else {
    types = ["unknown"];
  }

  //then create the new pokemon with the data
  const newPok = {
    name: data.name,
    hp: data.hp,
    attack: data.attack,
    defense: data.defense,
    speed: data.speed,
    height: data.height,
    weigth: data.weigth,
    img: data.img,
    types,
  };

  //and finally dispatch the action with axios
  return async () => {
    try {
      const pokemon = await axios.post(
        "http://localhost:3001/pokemons",
        newPok
      );
      alert("New pokemon added to database");
      return pokemon;
    } catch (error) {
      alert(error.response.data);
    }
  };
};
