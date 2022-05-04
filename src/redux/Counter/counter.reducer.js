import { ADD_USER, EDIT_USER, UPDATE_USER } from "./counter.types";
const INITIAL_STATE = {
  totalUser: [],
  user: [],
  newData: {},
  id: {},
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        totalUser: state.user.push(action.payload),
      };

    case EDIT_USER:
      return {
        ...state,
        id: action.payload,
      };
    case UPDATE_USER:
      return {
        ...state,
        id: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
