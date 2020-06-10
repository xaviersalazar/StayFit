import React from "react";
import { ImageBackground } from "react-native";
import { Layout } from "@ui-kitten/components";
import styled from "styled-components";

const StyledLayout = styled(Layout)`
  height: 250px;
  border-radius: 20px;
  border: 0;
  box-shadow: 0 10px 12px rgba(45, 52, 54, 0.7);
  margin: 0 0 48px 0;
`;

export const WorkoutContainer = ({ ...props }) => {
  return (
    <StyledLayout {...props}>
      <ImageBackground
        source={props.image}
        style={{
          flex: 1,
          width: "100%",
          borderRadius: 20,
          backgroundColor: "rgba(0,0,0,.9)",
        }}
        imageStyle={{ opacity: 0.8, borderRadius: 20 }}
      >
        {props.children}
      </ImageBackground>
    </StyledLayout>
  );
};
