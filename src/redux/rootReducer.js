import { combineReducers } from "redux";

import crudReducer from "./Counter/counter.reducer";

const rootReducer = combineReducers({
  crudReducer,
});

export default rootReducer;
