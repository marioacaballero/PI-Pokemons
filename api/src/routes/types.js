const { Router } = require("express");
const axios = require("axios");
const { Type } = require("../db");

const router = Router();

// Routes for pokemons types

router.get("/", async (req, res) => {
  const apiResp = await axios.get(`https://pokeapi.co/api/v2/type`);
  const types = apiResp.data.results.map((typ) => typ.name);
  types.map((typ) =>
    Type.findOrCreate({
      where: {
        name: typ,
      },
    })
  );

  const typesForDb = await Type.findAll();
  // console.log(typesForDb);
  // res.send("rdy");
  res.status(200).json(typesForDb);
});

module.exports = router;
