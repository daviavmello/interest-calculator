import { createStore } from "redux";
import { chatReducer } from "./Reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  message: chatReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;