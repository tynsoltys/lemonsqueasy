import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "../reducers/rootReducer";

const logger = createLogger();

/**
 * Redux store creation, incorporating redux-thunk
 */
export const store = createStore(rootReducer,
  undefined,
  composeWithDevTools(
  applyMiddleware(logger),
));