import { ActionType } from "../variables";

export const newMessageAction = (msgUpdate: string, id: string) => {
  return {
    type: ActionType.SEND_MESSAGE,
    payload: { id, message: msgUpdate },
  };
};

export type Action = {
  type: string;
  payload: {
    id: string;
    message: string;
  };