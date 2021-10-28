import { ActionType } from "./variables";
import { Action } from "./InterestAction";

interface IInterest {
  principal: number;
  rate: number;
  years: number;
  interest: number;
}

const initialState: {
  principal: number;
  rate: number;
  years: number;
  interest: number;
} = {} as IInterest;

export const interestReducer = (state = initialState, action: Action) => {
  const principal = action.payload?.principal;
  const rate = action.payload?.rate;
  const years = action.payload?.years;
  const interest = action.payload?.interest;

  console.log(
    `Reducer\nprincipal: ${principal}, rate: ${rate}, years: ${years}, interest: ${interest}`
  );

  switch (action.type) {
    case ActionType.TOTAL_INTEREST:
      return { principal, rate, years, interest };
    default:
      return state;
  }
};
