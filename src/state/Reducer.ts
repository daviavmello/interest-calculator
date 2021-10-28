import { ActionType } from "../variables";
import { Action } from "./InterestAction";

// NOT BEING USED
export interface IChat {
  chat: [];
}

// Define the initial state using that type
const initialState: Array<string> = [];

export const chatReducer = (state = initialState, action: Action) => {
  const id = action.payload?.id;
  const message = action.payload?.message;
  console.log(`Reducer message: ${message} id: ${id}`);

  switch (action.type) {
    case ActionType.SEND_MESSAGE:
      return [...state, { id, message }];
    default:
      return state;
  }
};