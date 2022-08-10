import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Types from "./Types/Types";
import CreatedBy from "./CreatedBy/CreatedBy";
import Order from "./Order/Order";
import style from "./Filters.module.css";

function Filters({ setOrder, setCurrentPage }) {
  return (
    <div className={style.filters}>
      <div className={style.search}>
        <SearchBar setCurrentPage={setCurrentPage} />
      </div>
      <div className={style.types}>
        <label>
          <h3 className={style.h3}>FILTERS</h3>
        </label>
        <Types setCurrentPage={setCurrentPage} />
        <CreatedBy setCurrentPage={setCurrentPage} />
      </div>
      <div className={style.order}>
        <label>
          <h3 className={style.h3}>ORDER</h3>
        </label>
        <Order setOrder={setOrder} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
}

export default Filters;
