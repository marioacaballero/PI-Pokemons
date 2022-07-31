import React from "react";
import * as ReactRedux from "react-redux";
import { filterPokemons2 } from "../../../actions/allPokeActions";

function CreatedBy() {
  const dispatch = ReactRedux.useDispatch();
  const handleCreated = (event) => {
    event.preventDefault();
    dispatch(filterPokemons2(event.target.value));
  };
  return (
    <div>
      <select>
        <option> Created by </option>
        <option
          value="all"
          onClick={(event) => {
            handleCreated(event);
          }}
        >
          All
        </option>
        <option
          value="API"
          onClick={(event) => {
            handleCreated(event);
          }}
        >
          API
        </option>
        <option
          value="DB"
          onClick={(event) => {
            handleCreated(event);
          }}
        >
          DB
        </option>
      </select>
    </div>
  );
}

export default CreatedBy;
