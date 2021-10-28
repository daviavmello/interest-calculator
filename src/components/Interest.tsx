import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";
import { RootState } from "../state/store";

export const Interest: React.FC = () => {
  const interest = useSelector(
    (state: RootState) => state.total_interest.interest
  );

  const amountInUsd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol'}).format(interest);

  console.log(interest);

  return (
    <>
      {interest !== 0 && (
        <Wrapper>
          <Result>{amountInUsd}</Result>
        </Wrapper>
      )}
    </>
  );
};
const Wrapper = styled.div`
  text-align: center;
  margin: 4rem;
`;

const Result = styled.h3`
  font-size: 6rem;
`;
