import React from "react";
import { Text } from "@ui-kitten/components";
import styled from "styled-components";

const StyledText = styled(Text)`
  font-size: 48px;
`;

export const Title = ({ ...props }) => {
  return <StyledText {...props}>{props.children}</StyledText>;
};
