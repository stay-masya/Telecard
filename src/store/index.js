import { createStore, combineReducers } from "redux";
import { contactBookReducer } from "./contactBookReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  contactBookReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
