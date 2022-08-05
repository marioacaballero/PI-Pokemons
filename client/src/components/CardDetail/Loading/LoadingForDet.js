import React from "react";
import pika from "../../Imgs/pikachu.png";
// import pokeball from "../../Imgs/pokeball.png";
import style from "./LoadingForDet.module.css";

function LoadingForDet() {
  return (
    <div className={style.loadfdet}>
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
