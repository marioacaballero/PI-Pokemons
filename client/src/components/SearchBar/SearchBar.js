import React, { useState } from "react";
import * as ReactRedux from "react-redux";
import { cleanPokemons, getPokeSearch } from "../../actions/allPokeActions";
import style from "./SearchBar.module.css";
import poke from "../Imgs/pokeball2.png";

function SearchBar() {
  const [search, setSearch] = useState("");
  const dispatch = ReactRedux.useDispatch();

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(cleanPokemons(dispatch));
    dispatch(getPokeSearch(search));
    setSearch("");
  };
  return (
    <form onSubmit={(event) => handleSubmit(event)} className={style.sear}>
      <input
        name="search"
        placeholder="SEARCH POKEMONS BY NAME ....."
        value={search}
        onChange={handleInputChange}
        className={style.input}
      />
      <button type={"submit"} className={style.btn}>
        <img src={poke} alt="pokeball" className={style.find} />
      </button>
    </form>
  );
}

export default SearchBar;
