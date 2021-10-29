import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";
import { RootState } from "../state/store";

export const Interest: React.FC = () => {
  const interest = useSelector(
    (state: RootState) => state.total_interest.interest
  );

  const amountInUsd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol'}).format(interest);

  return (
    <>
      {interest !== 0 && (
        <Wrapper>
          <h3>{amountInUsd}</h3>
        </Wrapper>
      )}
    </>
  );
};
const Wrapper = styled.div`
  text-align: center;
  margin: 4rem;
`;
