import React from "react";
import { View } from "react-native";
import styled from "styled-components";

const R = styled(View)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: ${(props) => props.height || "auto"};
`;

export const Row = ({ ...props }) => {
  return (
    <R height={props.height} {...props}>
      {props.children}
    </R>
  );
};
