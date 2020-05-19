import React from "react";
import { Text } from "@ui-kitten/components";
import styled from "styled-components";

const StyledText = styled(Text)`
  font-size: 18px;
  margin-bottom: 48px;
`;

export const Subtitle = ({ ...props }) => {
  return <StyledText {...props}>{props.children}</StyledText>;
};
