import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import rootstore from "./rootstore";

const store = createStore(
  rootstore,
  composeWithDevTools(applyMiddleware(logger))
);
export default store;
