import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        justifyContent: "center",
      }}
    >
      <Link to={"/home"}>Pokemons</Link>
      <Link to={"/home/newpokemon"}>Create</Link>
    </div>
  );
}

export default NavBar;
