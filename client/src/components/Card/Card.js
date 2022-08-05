import React from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { typ } from "./CSS Types/auxiliar";

function Card({ name, img, id, types }) {
  let newId;

  if (typeof id === "number") {
    newId = id;
  } else {
    newId = "?";
  }

  return (
    <div className={style.card}>
      <div className={typ(types)}>
        <Link className={style.link} to={`/home/pokemon/${id}`}>
          {name.toUpperCase()}
        </Link>
        <h2 className={style.h2}>#{newId}</h2>
      </div>
      <div className={style.divImg}>
        <img alt={name} src={img} className={style.img} />
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
