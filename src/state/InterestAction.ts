import { ActionType } from "./variables";

export const newInterestAction = (
  principal: number,
  rate: number,
  years: number,
  interest: number
) => {
  return {
    type: ActionType.TOTAL_INTEREST,
    payload: { principal, rate, years, interest },
  };
};

export type Action = {
  type: string;
  payload: {
    principal: number;
    rate: number;
    years: number;
    interest: number;
  };
};
