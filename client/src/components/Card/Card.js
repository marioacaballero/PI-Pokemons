import React from "react";
import { Link } from "react-router-dom";

function Card({ name, img, id, types }) {
  function capFirstLet(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div style={{ border: "solid gray", borderRadius: 10 }}>
      <h2>#{id}</h2>
      <img alt={name} src={img} style={{ width: 150, height: 150 }} />
      <div>
        <Link to={`/home/${id}`}>{capFirstLet(name)}</Link>
        {types.map((typ, i) => (
          <img key={i} alt={typ.name} src={typ.img} />
        ))}
      </div>
    </div>
  );
}

export default Card;
