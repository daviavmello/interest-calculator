import { ActionType } from "./variables";

export const newInterestAction = (id: string, interest: string) => {
  return {
    type: ActionType.TOTAL_INTEREST,
    payload: { id, total_interest: interest },
  };
};

export type Action = {
  type: string;
  payload: {
    id: string;
    total_interest: number;
  };
};
