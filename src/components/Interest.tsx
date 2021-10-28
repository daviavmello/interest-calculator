import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";
import { RootState } from "../state/store";

export const Interest: React.FC = () => {
  const interest = useSelector((state: RootState) => state.total_interest.interest);

  console.log(interest);

  return <>{interest && <Result>{interest}</Result>}</>;
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Result = styled.h3`
  font-size: 6rem;
`;
