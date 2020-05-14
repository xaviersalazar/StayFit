import React from "react";
import { Layout } from "@ui-kitten/components";
import styled from "styled-components";

const StyledContainer = styled(Layout)`
  height: 90%;
  padding: 64px 16px 0 16px;
`;

export const Container = ({ ...props }) => {
  return <StyledContainer {...props}>{props.children}</StyledContainer>;
};
