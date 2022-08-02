import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Types from "./Types/Types";
import CreatedBy from "./CreatedBy/CreatedBy";
import Order from "./Order/Order";
import style from "./Filters.module.css";

function Filters({ setOrder }) {
  return (
    <div className={style.filters}>
      <SearchBar />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          justifyItems: "center",
          gap: "2rem",
          padding: "2rem",
        }}
      >
        <label> Filters by </label>
        <Types />
        <CreatedBy />
        <label> Order by </label>
        <Order setOrder={setOrder} />
      </div>
    </div>
  );
}

export default Filters;
