import React from "react";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import pokemon from "../Imgs/pokemon5.png";
import newpoke from "../Imgs/newPokemon.png";
import { paths } from "./Auxiliaries/Auxiliar";

function NavBar(props) {
  return (
    <div className={paths(props.location.pathname)}>
      <Link to={"/home"}>
        <img alt="pokemon" src={pokemon} className={style.pokemon} />
      </Link>
      <Link to={"/home/newpokemon"} className={style.create}>
        <h3 className={style.h3}>NEW</h3>
        <img alt="newPoke" src={newpoke} className={style.newpoke}/>
      </Link>
    </div>
  );
}

export default NavBar;
