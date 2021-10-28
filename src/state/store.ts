import { createStore } from "redux";
import { interestReducer } from "./Reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  total_interest: interestReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
