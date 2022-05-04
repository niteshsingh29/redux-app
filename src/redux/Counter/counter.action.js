import { ADD_USER, EDIT_USER, UPDATE_USER } from "./counter.types";

export const addUser = ({ name, email, number }) => {
  return {
    type: ADD_USER,
    payload: {
      name: name,
      email: email,
      number: number,
    },
  };
};

export const editUser = (index) => {
  return {
    type: EDIT_USER,
    payload: {
      index,
    },
  };
};

export const updateUser = (index) => {
  return {
    type: UPDATE_USER,
  };
};

