import { ActionType } from "./variables";
import { Action } from "./InterestAction";

// NOT BEING USED
export interface IChat {
  chat: [];
}

// Define the initial state using that type
const initialState: Array<string> = [];

export const interestReducer = (state = initialState, action: Action) => {
  const id = action.payload?.id;
  const interest = action.payload?.total_interest;
  console.log(`Reducer total_interest: ${interest} id: ${id}`);

  switch (action.type) {
    case ActionType.TOTAL_INTEREST:
      return { id, interest };
    default:
      return state;
  }
};