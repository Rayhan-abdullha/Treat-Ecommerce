import { combineReducers } from "redux";
import categoriesReducer from "./actionReducer/categoriesReducer";
import { foodsReducer } from "./actionReducer/foodsReducer";

const rootstore = combineReducers({
  categoriesReducer,
  foodsReducer,
});

export default rootstore;
