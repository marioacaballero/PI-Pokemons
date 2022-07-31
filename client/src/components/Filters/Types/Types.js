import React, { useEffect } from "react";
import { getTypes } from "../../../actions/typeActions";
import * as ReactRedux from "react-redux";
import { filterPokemons } from "../../../actions/allPokeActions";
import { capFirstLet } from "../../Auxiliaries/Auxiliaries";

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
    <div>
      <select>
        <option>Types</option>
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
              {capFirstLet(typ.name)}
            </option>
          ))}
      </select>
    </div>
  );
}

export default Types;
