import React from "react";
import pokeHome from "../Imgs/pokehome.png";
import pokeball from "../Imgs/pokeball.png";
import style from "./Loading.module.css";
import surf from "../Music/Surf Theme  Pokémon FireRed  LeafGreen.mp3";

function Loading() {
  return (
    <div className={style.div}>
      <audio autoPlay loop>
        <source src={surf} type="audio/mpeg" />
      </audio>
      <img alt="Loading" src={pokeHome} className={style.img} />
      <div>
        <img alt="Pokeball" src={pokeball} className={style.pokeball} />
        <h1 className={style.h2}>LOADING...</h1>
      </div>
    </div>
  );
}

export default Loading;
