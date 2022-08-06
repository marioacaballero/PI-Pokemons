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
  const { name, hp, attack, defense, speed, heigth, weigth, img, types } =
    req.body;

  try {
    if (name) {
      //get all pokemons and check if the name passed exist
      const allPokes = await allPokemons();
      const pokemon = allPokes.find((pok) => pok.name === name.toLowerCase());
      if (!pokemon) {
        //if not create the new pokemon
        const newPokemon = await Pokemon.create({
          name,
          hp,
          attack,
          defense,
          speed,
          heigth,
          weigth,
          img,
        });

        //then add types the types incoming from body to the new pokemon
        if (types) {
          const newPokTyp = await Type.findAll({
            where: {
              name: types,
            },
          });

          newPokemon.addType(newPokTyp);
        }
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
