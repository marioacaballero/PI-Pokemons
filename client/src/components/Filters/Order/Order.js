import React from "react";
import * as ReactRedux from "react-redux";
import { orderPokemons } from "../../../actions/allPokeActions";
import style from './Order.module.css';

function Order({ setOrder }) {
  const dispatch = ReactRedux.useDispatch();

  const handleOrder = (event) => {
    event.preventDefault();
    dispatch(orderPokemons(event.target.value));
    setOrder(event.target.value);
  };
  return (
    <div className={style.mainDiv}>
      <select>
        <option
          value=""
          onClick={(event) => {
            handleOrder(event);
          }}
        >
          #POKEDEX ⬆
        </option>
        <option
          value="pokeDown"
          onClick={(event) => {
            handleOrder(event);
          }}
        >
          #POKEDEX ⬇
        </option>
        <option
          value="nameAZ"
          onClick={(event) => {
            handleOrder(event);
          }}
        >
          NAME ⬆
        </option>
        <option
          value="nameZA"
          onClick={(event) => {
            handleOrder(event);
          }}
        >
          NAME ⬇
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
