import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import { newInterestAction } from "../state/InterestAction";

export const Inputs: React.FC = () => {
  const [principal, setPrincipal] = useState<number>();
  const [rate, setRate] = useState<number>();
  const [years, setYears] = useState<number>();

  const dispatch = useDispatch();
  const interestAction = bindActionCreators(newInterestAction, dispatch);

  useEffect(() => {
    if (principal && rate && years) {
      const interestFormula = principal * (1 + rate * years);
      interestAction(principal, rate, years, interestFormula);
    } else {
      interestAction(0, 0, 0, 0);
    }
  }, [dispatch, interestAction, principal, rate, years]);

  return (
    <Wrapper>
      <Input
        type="number"
        placeholder="principal"
        onChange={(e) => setPrincipal(Number(e.target.value))}
      />
      <Input
        type="number"
        placeholder="rate (%)"
        onChange={(e) => setRate(Number(e.target.value))}
      />
      <Input
        type="number"
        placeholder="years"
        onChange={(e) => setYears(Number(e.target.value))}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  gap: 5%;
`;
const Input = styled.input``;
