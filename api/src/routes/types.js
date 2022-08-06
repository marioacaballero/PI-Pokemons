const { Router } = require("express");
const axios = require("axios");
const { Type } = require("../db");

const router = Router();

// Routes for pokemons types

router.get("/", async (req, res) => {
  try {
    //first get all types from db
    const allTypesDb = await Type.findAll();

    //if no has response create
    if (!allTypesDb.length) {
      const apiResp = await axios.get(`https://pokeapi.co/api/v2/type`);
      const types = apiResp.data.results.map((typ) => typ.name);

      types.map(
        async (typ) =>
          await Type.findOrCreate({
            where: {
              name: typ,
              img: `https://typedex.app/images/ui/types/dark/${typ}.svg`,
            },
          })
      );
      
      const tp = await Type.findAll();
      return res.status(200).json(tp);
    }

    res.status(200).json(allTypesDb);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
