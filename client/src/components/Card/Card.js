import React from "react";
import { Link } from "react-router-dom";

function Card({ name, img, id }) {
  function capFirstLet(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div style={{ border: "solid gray", borderRadius: 10 }}>
      <img alt={name} src={img} style={{ width: 150, height: 150 }} />
      <div>
        <Link to={`/home/${id}`}>{capFirstLet(name)}</Link>
      </div>
    </div>
  );
}

export default Card;
