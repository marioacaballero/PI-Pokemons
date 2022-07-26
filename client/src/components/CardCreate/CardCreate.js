import React, { useEffect, useState } from "react";
import * as ReactRedux from "react-redux";
import { cleanPokemons } from "../../actions/allPokeActions";
import { newPokemon } from "../../actions/pokeActions";
import { getTypes } from "../../actions/typeActions";
import { capFirstLet } from "../Auxiliaries/Auxiliaries";

function CardCreate() {
  const dispatch = ReactRedux.useDispatch();
  //some validator to prevent post on db with errors
  let notNull = /\S+/;
  let notNumber = /[a-z]/;
  let checkUrl = /^(ftp|http|https):\/\/[^ "]+$/;

  const initialState = {
    name: "",
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weigth: 0,
    img: "",
    types: [],
  };

  const [errors, setErrors] = useState({
    name: "",
    img: "",
  });
  const [pokemon, setPokemon] = useState(initialState);

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const allTypes = ReactRedux.useSelector((state) => state.types.types);

  //create a handle validator to set erros
  const handleValidate = (pokemon) => {
    if (!notNull.test(pokemon.name)) {
      errors.name = "Name cannot be null";
    }
    if (!notNumber.test(pokemon.name)) {
      errors.name = "Name must be a string";
    }
    if (!checkUrl.test(pokemon.img)) {
      errors.img = "Invalid url for image";
    }
    return errors;
  };

  const handleInputChange = (event) => {
    setPokemon({
      ...pokemon,
      [event.target.name]: event.target.value,
    });
    setErrors(
      handleValidate({
        ...pokemon,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!errors.name && !errors.img) {
      dispatch(newPokemon(pokemon));
      setPokemon(initialState);
      dispatch(cleanPokemons);
    } else if (errors.name) {
      alert(errors.name); //show alert if error validate exist and set errors to ''
      setErrors({
        name: "",
        img: "",
      });
    } else {
      alert(errors.img);
      setErrors({
        name: "",
        img: "",
      });
    }
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <label>Name: </label>
      <input name="name" value={pokemon.name} onChange={handleInputChange} />
      <label>HP: </label>
      <input
        name="hp"
        type={"number"}
        value={pokemon.hp}
        onChange={handleInputChange}
      />
      <label>ATK: </label>
      <input
        name="attack"
        type={"number"}
        value={pokemon.attack}
        onChange={handleInputChange}
      />
      <label>DEF: </label>
      <input
        name="defense"
        type={"number"}
        value={pokemon.defense}
        onChange={handleInputChange}
      />
      <label>SPEED: </label>
      <input
        name="speed"
        type={"number"}
        value={pokemon.speed}
        onChange={handleInputChange}
      />
      <label>Height: </label>
      <input
        name="height"
        type={"number"}
        value={pokemon.height}
        onChange={handleInputChange}
      />
      <label>Weigth: </label>
      <input
        name="weigth"
        type={"number"}
        value={pokemon.weigth}
        onChange={handleInputChange}
      />
      <label>IMG: </label>
      <input
        name="img"
        type={"text"}
        value={pokemon.img}
        onChange={handleInputChange}
      />
      <select>
        {allTypes &&
          allTypes.map((typ) => (
            <option key={typ.id} name={typ.name} value={pokemon.types}>
              {capFirstLet(typ.name)}
            </option>
          ))}
      </select>
      <select>
        <option name="undefined">undefined</option>
        {allTypes &&
          allTypes.map((typ) => (
            <option key={typ.id} name={typ.name} value={pokemon.types}>
              {capFirstLet(typ.name)}
            </option>
          ))}
      </select>
      <button type={"submit"}>Create</button>
    </form>
  );
}

export default CardCreate;
