// auxiliaries functions to simplify the routes models

const axios = require("axios");
const { Pokemon, Type } = require("../db");

// first need to get all pokemons from api

const pokemonsApi = async () => {
  //first take the api response
  try {
    let next = "https://pokeapi.co/api/v2/pokemon";
    let apiPokemons = [];
    do {
      let apiResp = await axios.get(next);
      // console.log(apiResp.data);
      let apiRespModif = await Promise.all(
        apiResp.data.results.map(async (pok) => {
          let pokemon = await axios.get(pok.url);
          return {
            id: pokemon.data.id,
            name: pokemon.data.name,
            img: pokemon.data.sprites.other["official-artwork"].front_default,
            types: pokemon.data.types.map((typ) => {
              return {
                name: typ.type.name,
                img: `https://typedex.app/images/ui/types/dark/${typ.type.name}.svg`,
              };
            }),
            hp: pokemon.data.stats[0].base_stat,
            attack: pokemon.data.stats[1].base_stat,
            defense: pokemon.data.stats[2].base_stat,
            speed: pokemon.data.stats[5].base_stat,
            height: pokemon.data.height,
            weight: pokemon.data.weight,
          };
        })
      );

      apiPokemons.push(...apiRespModif);
      next = apiResp.data.next;
    } while (next != null && apiPokemons.length < 40); //with apiPokemons.length I can take the limits of the pokemons to get with 20 to 20 for time.
    // console.log(apiPokemons);

    return apiPokemons;
  } catch (error) {
    console.log(error);
  }
};

// pokemonsApi();

// 2th need to get all pokemons from db with all types for each

const pokemonsDb = async () => {
  return await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};

// 3rd concat all pokemons in one array

const allPokemons = async () => {
  const api = await pokemonsApi();
  const db = await pokemonsDb();

  return api.concat(db);
};

module.exports = {
  allPokemons,
};