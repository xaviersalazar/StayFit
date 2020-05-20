import React from "react";
import { WorkoutContainer } from "./WorkoutContainer";
import { Text } from "@ui-kitten/components";
import styled from "styled-components";

const WorkoutTitle = styled(Text)`
  position: absolute;
  bottom: 80px;
  left: 16px;
  color: #ffffff;
`;

const WorkoutSubtitle = styled(Text)`
  position: absolute;
  bottom: ${(props) =>
    props.order === "1" ? "64px" : props.order === "2" ? "48px" : "32px"};
  left: 18px;
  color: rgba(255, 255, 255, 0.8);
`;

export const Workout = ({ image, workoutTitle, workoutSubtitle }) => {
  return (
    <WorkoutContainer image={image}>
      <WorkoutTitle category="h1">{workoutTitle}</WorkoutTitle>
      <WorkoutSubtitle category="c1" appearance="hint" order="1">
        {workoutSubtitle.first}
      </WorkoutSubtitle>
      <WorkoutSubtitle category="c1" appearance="hint" order="2">
        {workoutSubtitle.second}
      </WorkoutSubtitle>
      <WorkoutSubtitle category="c1" appearance="hint" order="3">
        {workoutSubtitle.third}
      </WorkoutSubtitle>
    </WorkoutContainer>
  );
};
