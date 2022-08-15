import React, { useState } from "react";
import * as ReactRedux from "react-redux";
import { cleanPokemons, getPokeSearch } from "../../actions/allPokeActions";
import style from "./SearchBar.module.css";
import poke from "../Imgs/pokeball2.png";
import { handleSound } from "../Auxiliaries/Auxiliaries";

function SearchBar({ setCurrentPage }) {
  const [search, setSearch] = useState("");
  const dispatch = ReactRedux.useDispatch();

  const handleInputChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (search) {
      dispatch(getPokeSearch(search));
      setSearch("");
      setCurrentPage(0);
    }
    if (!search) {
      alert("Please, write a name");
      dispatch(cleanPokemons());
      dispatch(getPokeSearch(search));
    }
  };
  return (
    <form onSubmit={(event) => handleSubmit(event)} className={style.sear}>
      <input
        placeholder="SEARCH POKEMONS BY NAME ....."
        value={search}
        onChange={(e) => handleInputChange(e)}
        className={style.input}
      />
      <button
        type="submit"
        className={style.btn}
        onMouseDown={handleSound}
        onMouseEnter={handleSound}
      >
        <img src={poke} alt="pokeball" className={style.find} />
      </button>
    </form>
  );
}

export default SearchBar;
