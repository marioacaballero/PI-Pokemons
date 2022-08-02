import React from "react";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={style.nav}>
      <Link to={"/home"}>Pokemons</Link>
      <Link to={"/home/newpokemon"}>Create</Link>
    </div>
  );
}

export default NavBar;
