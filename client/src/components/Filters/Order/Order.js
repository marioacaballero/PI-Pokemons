import React from "react";
import * as ReactRedux from "react-redux";
import { orderPokemons } from "../../../actions/allPokeActions";

function Order({ setOrder }) {
  const dispatch = ReactRedux.useDispatch();

  const handleOrder = (event) => {
    event.preventDefault();
    dispatch(orderPokemons(event.target.value));
    setOrder(event.target.value);
  };
  return (
    <div>
      <select>
        <option
          value=""
          onClick={(event) => {
            handleOrder(event);
          }}
        >
          #Pokedex ⬆
        </option>
        <option
          value="pokeDown"
          onClick={(event) => {
            handleOrder(event);
          }}
        >
          #Pokedex ⬇
        </option>
        <option
          value="nameAZ"
          onClick={(event) => {
            handleOrder(event);
          }}
        >
          Name A-Z
        </option>
        <option
          value="nameZA"
          onClick={(event) => {
            handleOrder(event);
          }}
        >
          Name Z-A
        </option>
        <option
          value="atkUp"
          onClick={(event) => {
            handleOrder(event);
          }}
        >
          ATK ⬆
        </option>
        <option
          value="atkDown"
          onClick={(event) => {
            handleOrder(event);
          }}
        >
          ATK ⬇
        </option>
      </select>
    </div>
  );
}

export default Order;
