import React from "react";
import style from "./LandingPage.module.css";
import charizard from "../Imgs/CharizarRF.png";
import pokemon from "../Imgs/pokemon2.png";
import intro from "../Music/FRIntro.mp3";
import { handleSound } from "../Auxiliaries/Auxiliaries";

function LandingPage(props) {
  function handleClick() {
    props.history.push("/home");
  }

  return (
    <div className={style.land}>
      <audio autoPlay loop>
        <source src={intro} type="audio/mpeg" />{" "}
      </audio>
      <div className={style.divA}>
        <div className={style.divRedTop}></div>
      </div>
      <div className={style.divB}>
        <img alt="pokemon" src={pokemon} className={style.pokemon} />
        <img alt="charizardRF" src={charizard} className={style.char} />
        <span>Pokemon is an amazing world ! Let's check it!</span>
      </div>

      <div className={style.divC}>
        <button
          className={style.start}
          onClick={handleClick}
          onMouseDown={handleSound}
        >
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
