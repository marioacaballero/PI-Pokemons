import React, { useState } from "react";
import * as ReactRedux from "react-redux";
import { cleanPokemons, getPokeSearch } from "../../actions/allPokeActions";

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
    <form onSubmit={(event) => handleSubmit(event)}>
      <label> Search Pokemon </label>
      <input
        name="search"
        placeholder="Name..."
        value={search}
        onChange={handleInputChange}
      />
      <button type={"submit"}>Search</button>
    </form>
  );
}

export default SearchBar;
