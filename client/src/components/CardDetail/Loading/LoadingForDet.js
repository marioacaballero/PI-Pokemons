import React from "react";
import pika from "../../Imgs/pikachu.png";
// import pokeball from "../../Imgs/pokeball.png";
import style from "./LoadingForDet.module.css";
import evolution from "../../Music/Evolution Theme  Pokémon FireRed  LeafGreen.mp3";

function LoadingForDet() {
  return (
    <div className={style.loadfdet}>
      <audio autoPlay loop muted>
        <source src={evolution} type="audio/mpeg" />
      </audio>
      <section className={style.pikachu}>
        <img alt="pikachu" src={pika} className={style.pika} />
        <h1 className={style.h2}>LOADING...</h1>
      </section>
      {/* <section className={style.load}>
        <img alt="pokeball" src={pokeball} className={style.pokeball} />
      </section> */}
    </div>
  );
}

export default LoadingForDet;
