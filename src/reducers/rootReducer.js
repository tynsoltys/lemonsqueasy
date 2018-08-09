import { combineReducers } from "redux";
import { pantryReducer } from "./pantryReducer";
import { walletReducer } from "./walletReducer";

/**
 * Root reducer for the app that
 * combines individual reducers
 */

export const rootReducer = combineReducers({
  pantryReducer,
  walletReducer
});
