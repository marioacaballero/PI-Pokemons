import React from "react";
import { Link } from "react-router-dom";
import { capFirstLet } from "../Auxiliaries/Auxiliaries";

function Card({ name, img, id, types }) {
  return (
    <div style={{ border: "solid gray", borderRadius: 10 }}>
      <h2>#{id}</h2>
      <img alt={name} src={img} style={{ width: 150, height: 150 }} />
      <div>
        <Link to={`/home/pokemon/${id}`}>{capFirstLet(name)}</Link>
        {types.map((typ, i) => (
          <img key={i} alt={typ.name} src={typ.img} />
        ))}
      </div>
    </div>
  );
}

export default Card;
