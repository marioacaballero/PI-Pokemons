import React from "react";
import style from "./Card.module.css";
import { typ } from "./CSS Types/auxiliar";
import pokeball from "../Imgs/pokeball3.png";
import { handleSound } from "../Auxiliaries/Auxiliaries";

function Card({ name, img, id, types, history }) {
  let newId;

  if (typeof id === "number") {
    newId = id;
  } else {
    newId = "?";
  }

  return (
    <div
      className={style.card}
      onClick={() => history.push(`home/pokemon/${id}`)}
      onMouseDown={handleSound}
    >
      <div className={typ(types)}>
        <div className={style.link}>{name.toUpperCase()}</div>
        <h2 className={style.h2}>#{newId}</h2>
      </div>
      <div className={style.divImg}>
        {img ? (
          <img alt={name} src={img} className={style.img} />
        ) : (
          <img alt="pokeball" src={pokeball} className={style.img} />
        )}
      </div>
      <div className={typ(types)}>
        {types.map((typ, i) => (
          <img key={i} alt={typ.name} src={typ.img} className={style.typeImg} />
        ))}
      </div>
    </div>
  );
}

export default Card;
