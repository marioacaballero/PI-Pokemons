import React from "react";
import { Link } from "react-router-dom";
import { capFirstLet } from "../Auxiliaries/Auxiliaries";
import style from "./Card.module.css";

function Card({ name, img, id, types }) {
  return (
    <div className={style.card}>
      <h2>#{id}</h2>
      <img alt={name} src={img} style={{ width: 150, height: 150 }} />
      <div>
        <Link to={`/home/pokemon/${id}`}>{capFirstLet(name)}</Link>
        {types.map((typ, i) => (
          <img
            /*style={{
              border: "solid gray",
              backgroundColor: "red",
              borderRadius: 50,
              color: "white;",
              width: 150,
            }}*/
            key={i}
            alt={typ.name}
            src={typ.img}
          />
        ))}
      </div>
    </div>
  );
}

export default Card;
