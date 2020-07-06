import React from "react";
import { Text } from "@ui-kitten/components";
import { TEXT_COLOR_HEX } from "../../constants";
import styled from "styled-components";

const StyledText = styled(Text)`
  font-size: 64px;
  color: ${(props) => (props.inverted ? "#ffffff" : TEXT_COLOR_HEX)};
`;

export const Title = ({ ...props }) => {
  return <StyledText {...props}>{props.children}</StyledText>;
};
