import React from "react";
import { Layout } from "@ui-kitten/components";
import { BACKGROUND_COLOR_HEX } from "../../constants";
import styled from "styled-components";

const StyledContainer = styled(Layout)`
  height: 90%;
  padding: 64px 16px 0 16px;
  background: ${BACKGROUND_COLOR_HEX};
`;

export const Container = ({ ...props }) => {
  return <StyledContainer {...props}>{props.children}</StyledContainer>;
};
