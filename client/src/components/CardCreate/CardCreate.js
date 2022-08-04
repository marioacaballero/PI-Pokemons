import React, { useEffect, useState } from "react";
import * as ReactRedux from "react-redux";
import { cleanPokemons } from "../../actions/allPokeActions";
import { newPokemon } from "../../actions/pokeActions";
import { getTypes } from "../../actions/typeActions";
import { capFirstLet } from "../Auxiliaries/Auxiliaries";
import style from "./CardCreate.module.css";

function CardCreate() {
  const dispatch = ReactRedux.useDispatch();
  //some validator to prevent post on db with errors
  let notNull = /\S+/;
  let notNumber = /[a-z]/;

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

  let [error, setError] = useState("");
  const [pokemon, setPokemon] = useState(initialState);

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const allTypes = ReactRedux.useSelector((state) => state.types.types);

  //create a handle validator to set erros
  const handleValidate = (pokemon) => {
    if (!notNull.test(pokemon.name)) {
      error = "Name cannot be null";
    }
    if (!notNumber.test(pokemon.name)) {
      error = "Name must be a string";
    }
    return error;
  };

  const handleInputChange = (event) => {
    setPokemon({
      ...pokemon,
      [event.target.name]: event.target.value,
    });
    setError(
      handleValidate({
        ...pokemon,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!error) {
      dispatch(newPokemon(pokemon));
      setPokemon(initialState);
      dispatch(cleanPokemons);
    } else {
      alert(error); //show alert if error validate exist and set errors to ''
      setError("");
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
            type={"text"}
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
                <option>FIRST TYPE</option>
                {allTypes &&
                  allTypes.map((typ) => (
                    <option key={typ.id} name={typ.name} value={typ.name}>
                      {capFirstLet(typ.name)}
                    </option>
                  ))}
              </select>
              <select name="secondT" onChange={(e) => handleInputChange(e)}>
                <option>SECOND TYPE</option>
                {allTypes &&
                  allTypes.map((typ) => (
                    <option key={typ.id} name={typ.name} value={typ.name}>
                      {capFirstLet(typ.name)}
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
              type={"number"}
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
              type={"number"}
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
              type={"number"}
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
              type={"number"}
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
              type={"number"}
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
              type={"number"}
              value={pokemon.height}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
      </div>
      <div className={style.divButton}>
        <button type={"submit"} className={style.btn}><h4>
                <h4>LET'S GO!</h4>
                <h5></h5>
              </h4></button>
      </div>
    </form>
  );
}

export default CardCreate;
