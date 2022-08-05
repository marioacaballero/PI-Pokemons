import axios from "axios";

//Here I've got the actions when need the types from the back-end
export const SET_TYPES = "SET_TYPES";

//action to set types on redux state
export const setTypes = (data) => {
  return {
    type: SET_TYPES,
    payload: data,
  };
};

//function to get all types from api and dispatch setTypes
export const getTypes = () => {
  return async (dispatch) => {
    try {
      const types = await axios.get("http://localhost:3001/types");
      dispatch(setTypes(types.data));
    } catch (error) {
      console.log(error);
    }
  };
};
