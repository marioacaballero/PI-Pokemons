import React from "react";
import * as ReactRedux from "react-redux";
import { orderPokemons } from "../../../actions/allPokeActions";
import { handleSound } from "../../Auxiliaries/Auxiliaries";
import style from "./Order.module.css";

function Order({ setOrder, setCurrentPage }) {
  const dispatch = ReactRedux.useDispatch();

  const handleOrder = (event) => {
    event.preventDefault();
    dispatch(orderPokemons(event.target.value));
    setOrder(event.target.value);
    setCurrentPage(0);
  };
  return (
    <div className={style.mainDiv}>
      <select onMouseDown={handleSound} onMouseEnter={handleSound}>
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
