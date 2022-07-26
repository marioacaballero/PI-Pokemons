import axios from "axios";

//Here I've got the actions when need the types from the back-end
export const SET_TYPES = "SET_TYPES";

export const setTypes = (data) => {
  return {
    type: SET_TYPES,
    payload: data,
  };
};

export const getTypes = () => {
  return async (dispatch) => {
    const types = await axios.get("http://localhost:3001/types");
    dispatch(setTypes(types.data));
  };
};
