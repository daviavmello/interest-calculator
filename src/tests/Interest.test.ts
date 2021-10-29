import { newInterestAction } from "../state/InterestAction";
import { ActionType } from "../state/variables";

// Using the example give as a successful interest calculation:
// 5000 * (1 + (0.025 * 5)) = 5625

it("should return the correct interest amount", () => {
  const rates = { principal: 5000, rate: 0.025, years: 5, interest: 5625 };
  const expectation = {
    type: ActionType.TOTAL_INTEREST,
    payload: rates,
  };

  expect(newInterestAction(5000, 0.025, 5, 5625)).toEqual(expectation);
});
