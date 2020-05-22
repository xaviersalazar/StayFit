import React from "react";
import { View } from "react-native";
import styled from "styled-components";

const Col = styled(View)`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: ${(props) => props.col || "1"};
`;

export const Column = ({ ...props }) => {
  return <Col col={props.col}>{props.children}</Col>;
};
