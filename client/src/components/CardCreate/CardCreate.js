import React, { useEffect, useState } from "react";
import * as ReactRedux from "react-redux";
import { cleanPokemons } from "../../actions/allPokeActions";
import { newPokemon } from "../../actions/pokeActions";
import { getTypes } from "../../actions/typeActions";
import {
  handleSound,
  handleValidate /* validators */,
} from "../Auxiliaries/Auxiliaries";
import style from "./CardCreate.module.css";
import pokeCenter from "../Music/FireRedLeafGreen Pokemon Center.mp3";

function CardCreate(props) {
  const dispatch = ReactRedux.useDispatch();

  const initialState = {
    name: "",
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    img: "",
    firstT: "",
    secondT: "",
  };

  // const [errors, setErrors] = useState({});
  const [pokemon, setPokemon] = useState(initialState);

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const allTypes = ReactRedux.useSelector((state) => state.types.types);
  const pokemons = ReactRedux.useSelector((state) => state.pokemons.pokemons);

  const handleInputChange = (event) => {
    event.preventDefault();

    // setErrors(
    //   validators({
    //     ...pokemon,
    //     [event.target.name]: event.target.value,
    //   })
    // );

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
      }, 3000);
    } else {
      alert(handleValidate(pokemon)); //show alert if error validate exist
    }
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)} className={style.main}>
      <audio autoPlay loop>
        <source src={pokeCenter} type="audio/mpeg" />
      </audio>
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
              <div className={style.h4m}>
                <div className={style.h4m}>NAME</div>
                <div className={style.h5m}></div>
              </div>
            </label>
            <input
              name="name"
              value={pokemon.name}
              onChange={(e) => handleInputChange(e)}
            />
            {/* {errors.name && alert(errors.name)} */}
          </div>
          <div>
            <label>
              <div className={style.h4m}>
                <div className={style.h4m}>TYPES</div>
                <div className={style.h5m}></div>
              </div>
            </label>
            <div className={style.divTypes}>
              <select
                name="firstT"
                onChange={(e) => handleInputChange(e)}
                onMouseDown={handleSound}
                onMouseEnter={handleSound}
              >
                <option value="">FIRST TYPE</option>
                {allTypes &&
                  allTypes.map((typ) => (
                    <option key={typ.id} name={typ.name} value={typ.name}>
                      {typ.name.toUpperCase()}
                    </option>
                  ))}
              </select>
              <select
                name="secondT"
                onChange={(e) => handleInputChange(e)}
                onMouseDown={handleSound}
                onMouseEnter={handleSound}
              >
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
              <div className={style.h4m}>
                <div className={style.h4m}>HP</div>
                <div className={style.h5m}></div>
              </div>
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
              <div className={style.h4m}>
                <div className={style.h4m}>ATTACK</div>
                <div className={style.h5m}></div>
              </div>
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
              <div className={style.h4m}>
                <div className={style.h4m}>DEFENSE</div>
                <div className={style.h5m}></div>
              </div>
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
              <div className={style.h4m}>
                <div className={style.h4m}>SPEED</div>
                <div className={style.h5m}></div>
              </div>
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
              <div className={style.h4m}>
                <div className={style.h4m}>WEIGHT</div>
                <div className={style.h5m}></div>
              </div>
            </label>
            <input
              name="weight"
              type="number"
              value={pokemon.weight}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div>
            <label>
              <div className={style.h4m}>
                <div className={style.h4m}>HEIGHT</div>
                <div className={style.h5m}></div>
              </div>
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
        <button
          type={"submit"}
          className={style.btn}
          onMouseDown={handleSound}
          onMouseEnter={handleSound}
        >
          <div className={style.h4m}>
            <div className={style.h4m}>LET'S GO</div>
            <div className={style.h5m}></div>
          </div>
        </button>
      </div>
    </form>
  );
}

export default CardCreate;
