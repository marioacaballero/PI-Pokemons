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
  const allPokes = await allPokemons();

  if (name) {
    const pokemon = allPokes.find(
      (pok) => pok.name.toLowerCase() === name.toLowerCase()
    );
    return pokemon
      ? res.status(200).json(pokemon)
      : res.status(404).send("Pokemon not found");
  }
  res.status(200).json(allPokes);
});

//by id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const allPokes = await allPokemons();

  const pokemon = allPokes.filter((pok) => pok.id == id);
  return pokemon
    ? res.status(200).json(pokemon)
    : res.status(404).send("Pokemon not found");
});

//create new pokemon
router.post("/", async (req, res) => {
  const { name, hp, attack, defense, speed, heigth, weigth, img, types } =
    req.body;

  try {
    if (name) {
      const allPokes = await allPokemons();
      const pokemon = allPokes.find((pok) => pok.name === name.toLowerCase());
      if (!pokemon) {
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

        if (types) {
          const newPokTyp = await Type.findAll({
            where: {
              name: types,
            },
          });

          newPokemon.addType(newPokTyp);
        }
        return res.status(201).json(newPokemon);
      }
      return res.status(404).send("Pokemon name already exist");
    }
    if (!name) return res.status(404).send("Pokemon name is necessary");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
