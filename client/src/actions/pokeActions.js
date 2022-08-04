import axios from "axios";

//Here I've got the actions when I need/create one Pokemon from the back-end
export const SET_POKEMON_DETAIL = "SET_POKEMON_DETAIL";
export const CLEAN_POKE_DETAIL = "CLEAN_POKE_DETAIL";
export const NEW_POKEMON = "NEW_POKEMON";

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

export const newPokemon = (data) => {
  let types;

  if (data.firstT || data.secondT) {
    types = [data.firstT, data.secondT];
  } else {
    types = ["unknown"];
  }

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
