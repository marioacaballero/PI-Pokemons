import React from "react";
import style from "./LandingPage.module.css";
import charizard from "../Imgs/CharizarRF.png";
import pokemon from "../Imgs/pokemon2.png";

function LandingPage(props) {
  function handleClick() {
    props.history.push("/home");
  }

  return (
    <div>
      <div className={style.divA}>
        <div className={style.divRedTop}></div>
      </div>
      <div className={style.divB}>
        <img alt="pokemon" src={pokemon} className={style.pokemon} />
        <img alt="charizardRF" src={charizard} className={style.char} />
      </div>

      <div className={style.divC}>
        <button className={style.start} onClick={handleClick}>
          PRESS START
        </button>
        <div className={style.divRedBot}>
          <h2>© 2022</h2>
          <h2>MARIO CABALLERO inc.</h2>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
