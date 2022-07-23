import React, { useState } from "react";
import * as ReactRedux from "react-redux";
import { cleanPokemons, getPokeSearch } from "../../actions/actions";

function NavBar() {
  const [search, setSearch] = useState("");
  const dispatch = ReactRedux.useDispatch();

  const handleInputChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(cleanPokemons(dispatch));
    dispatch(getPokeSearch(search));
    setSearch("");
  };
  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label> Search Pokemon </label>
        <input
          name="search"
          placeholder="Name..."
          value={search}
          onChange={(event) => handleInputChange(event)}
        />
        <button type={"submit"}>Search</button>
      </form>
      <>
        <label> Types </label>
        <select>
          <option value="Default">All</option>
          <option value="Plant">Plant</option>
          <option value="Normal">Normal</option>
          <option value="Fly">Fly</option>
          <option value="Poison">Poison</option>
        </select>
      </>
      <>
        <label> Order </label>
        <select>
          <option value="Default">A-Z</option>
          <option value="Descendent">Z-A</option>
        </select>
      </>
      <>
        <label> Create At </label>
        <select>
          <option value="Default">All</option>
          <option value="API">API</option>
          <option value="DB">DB</option>
        </select>
      </>
    </div>
  );
}

export default NavBar;
