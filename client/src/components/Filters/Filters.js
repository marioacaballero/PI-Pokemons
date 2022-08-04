import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Types from "./Types/Types";
import CreatedBy from "./CreatedBy/CreatedBy";
import Order from "./Order/Order";
import style from "./Filters.module.css";

function Filters({ setOrder }) {
  return (
    <div className={style.filters}>
      <div className={style.search}>
        <SearchBar />
      </div>
      <div className={style.types}>
        <label>
          <h3 className={style.h3}>FILTERS</h3>
        </label>
        <Types />
        <CreatedBy />
      </div>
      <div className={style.order}>
        <label>
          <h3 className={style.h3}>ORDER</h3>
        </label>
        <Order setOrder={setOrder} />
      </div>
    </div>
  );
}

export default Filters;
