import React, { useEffect, useState } from "react";
import * as ReactRedux from "react-redux";
import { cleanPokemons } from "../../actions/allPokeActions";
import { newPokemon } from "../../actions/pokeActions";
import { getTypes } from "../../actions/typeActions";
import { handleValidate } from "../Auxiliaries/Auxiliaries";
import style from "./CardCreate.module.css";

function CardCreate(props) {
  const dispatch = ReactRedux.useDispatch();

  const initialState = {
    name: "",
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weigth: 0,
    img: "",
    firstT: "",
    secondT: "",
  };

  const [pokemon, setPokemon] = useState(initialState);

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const allTypes = ReactRedux.useSelector((state) => state.types.types);
  const pokemons = ReactRedux.useSelector((state) => state.pokemons.pokemons);

  const handleInputChange = (event) => {
    event.preventDefault();

    setPokemon({
      ...pokemon,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const poke = pokemons.filter((pok) => pok.name === pokemon.name);
    if (poke.length > 0) {
      return alert("Pokemon name already exist");
    }

    if (!handleValidate(pokemon)) {
      //check if pokemon pass the validate
      dispatch(newPokemon(pokemon));
      setPokemon(initialState);
      dispatch(cleanPokemons);
      setTimeout(() => {
        props.history.push("/home");
      }, 6000);
    } else {
      alert(handleValidate(pokemon)); //show alert if error validate exist
    }
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)} className={style.main}>
      <div className={style.mainDiv}>
        <section className={style.secImg}>
          <img
            alt="NO AVAILABLE"
            src={pokemon.img}
            onChange={(e) => handleInputChange(e)}
            className={style.img}
          />
          <input
            name="img"
            type="text"
            value={pokemon.img}
            onChange={(e) => handleInputChange(e)}
            placeholder="PUT YOUR URL IMAGE HERE..."
            className={style.inpImg}
          />
        </section>
        <section className={style.secStat}>
          <div>
            <label>
              <h4>
                <h4>NAME</h4>
                <h5></h5>
              </h4>
            </label>
            <input
              name="name"
              value={pokemon.name}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div>
            <label>
              <h4>
                <h4>TYPES</h4>
                <h5></h5>
              </h4>
            </label>
            <div className={style.divTypes}>
              <select name="firstT" onChange={(e) => handleInputChange(e)}>
                <option value="">FIRST TYPE</option>
                {allTypes &&
                  allTypes.map((typ) => (
                    <option key={typ.id} name={typ.name} value={typ.name}>
                      {typ.name.toUpperCase()}
                    </option>
                  ))}
              </select>
              <select name="secondT" onChange={(e) => handleInputChange(e)}>
                <option value="">SECOND TYPE</option>
                {allTypes &&
                  allTypes.map((typ) => (
                    <option key={typ.id} name={typ.name} value={typ.name}>
                      {typ.name.toUpperCase()}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div>
            <label>
              <h4>
                <h4>HP</h4>
                <h5></h5>
              </h4>
            </label>
            <input
              name="hp"
              type="number"
              value={pokemon.hp}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div>
            <label>
              <h4>
                <h4>ATTACK</h4>
                <h5></h5>
              </h4>
            </label>
            <input
              name="attack"
              type="number"
              value={pokemon.attack}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div>
            <label>
              <h4>
                <h4>DEFENSE</h4>
                <h5></h5>
              </h4>
            </label>
            <input
              name="defense"
              type="number"
              value={pokemon.defense}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div>
            <label>
              <h4>
                <h4>SPEED</h4>
                <h5></h5>
              </h4>
            </label>
            <input
              name="speed"
              type="number"
              value={pokemon.speed}
              onChange={(e) => handleInputChange(e)}
            />
          </div>

          <div>
            <label>
              <h4>
                <h4>WEIGHT</h4>
                <h5></h5>
              </h4>
            </label>
            <input
              name="weigth"
              type="number"
              value={pokemon.weigth}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div>
            <label>
              <h4>
                <h4>HEIGHT</h4>
                <h5></h5>
              </h4>
            </label>
            <input
              name="height"
              type="number"
              value={pokemon.height}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
      </div>
      <div className={style.divButton}>
        <button type={"submit"} className={style.btn}>
          <h4>
            <h4>LET'S GO!</h4>
            <h5></h5>
          </h4>
        </button>
      </div>
    </form>
  );
}

export default CardCreate;
