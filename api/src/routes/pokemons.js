const { Router } = require("express");
const axios = require("axios");
const { Pokemon, Type } = require("../db");
const { allPokemons } = require("../auxiliaries/auxiliaries");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//Routes for pokemons

//all pokemons or pokemon name
router.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    //get all pokemons from auxiliar
    const allPokes = await allPokemons();

    if (name) {
      //if name exist filter by name and send the correct status
      const pokemon = allPokes.filter(
        (pok) => pok.name.toLowerCase() === name.toLowerCase()
      );
      return pokemon
        ? res.status(200).json(pokemon)
        : res.status(404).send("Pokemon not found");
    }
    //if not just send all pokemons
    res.status(200).json(allPokes);
  } catch (error) {
    console.log(error);
  }
});

//by id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    //get all pokemons from auxiliar
    const allPokes = await allPokemons();

    //then filter by id and send the correct status
    const pokemon = allPokes.filter((pok) => pok.id == id);
    return pokemon
      ? res.status(200).json(pokemon)
      : res.status(404).send("Pokemon not found");
  } catch (error) {
    console.log(error);
  }
});

//create new pokemon
router.post("/", async (req, res) => {
  const { name, hp, attack, defense, speed, height, weight, img, types } =
    req.body;
  try {
    if (
      !name ||
      !hp ||
      !attack ||
      !defense ||
      !speed ||
      !height ||
      !weight ||
      !types
    ) {
      return res.status(404).send("Some dates are missing");
    }

    if (name) {
      //get all pokemons and check if the name passed exist
      const allPokes = await allPokemons();
      const pokemon = allPokes.find((pok) => pok.name === name.toLowerCase());
      if (!pokemon) {
        //if not check the stats
        if (!types.length) {
          return res.status(404).send("One type is required");
        }

        if (types.length === 2) {
          if (types[0] === types[1]) {
            return res.status(404).send("The type cannot repeat");
          }
        }

        if (
          hp >= 150 ||
          hp <= 0 ||
          attack >= 150 ||
          attack <= 0 ||
          defense >= 150 ||
          defense <= 0 ||
          speed >= 150 ||
          speed <= 0
        ) {
          return res
            .status(404)
            .send("HP, ATTACK, DEFENSE AND SPEED must be between 0 and 150");
        }

        if (weight >= 9999 || weight <= 0) {
          return res.status(404).send("WEIGHT must be between 0 and 9999");
        }

        if (height >= 200 || height <= 0) {
          return res.status(404).send("HEIGHT must be between 0 and 200");
        }

        //and then create the pokemon if all pass
        const newPokemon = await Pokemon.create({
          name,
          hp,
          attack,
          defense,
          speed,
          height,
          weight,
          img,
        });

        //then add types the types incoming from body to the new pokemon
        // if (types) {
        const newPokTyp = await Type.findAll({
          where: {
            name: types,
          },
        });

        await newPokemon.addType(newPokTyp);
        // }
        return res.status(201).json(newPokemon); //and send it
      }
      //if name exist send the 404
      return res.status(404).send("Pokemon name already exist");
    }
    //name cannot be null on db, so send the 404
    if (!name) return res.status(404).send("Pokemon name is necessary");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
