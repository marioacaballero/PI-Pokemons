import React, { useEffect } from "react";
import { getTypes } from "../../../actions/typeActions";
import * as ReactRedux from "react-redux";
import { filterPokemons } from "../../../actions/allPokeActions";
import style from "./Types.module.css";

function Types() {
  const dispatch = ReactRedux.useDispatch();

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const allTypes = ReactRedux.useSelector((state) => state.types.types);

  const handleTypes = (event) => {
    event.preventDefault();
    dispatch(filterPokemons(event.target.value));
  };

  return (
    <div className={style.mainDiv}>
      <select>
        <option>TYPES</option>
        <option
          value="all"
          onClick={(event) => {
            handleTypes(event);
          }}
        >
          All
        </option>
        {allTypes &&
          allTypes.map((typ) => (
            <option
              key={typ.id}
              value={typ.name}
              onClick={(event) => {
                handleTypes(event);
              }}
            >
              {typ.name.toUpperCase()}
            </option>
          ))}
      </select>
    </div>
  );
}

export default Types;
