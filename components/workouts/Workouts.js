import React from "react";
import { ScrollView } from "react-native";
import { Container } from "../common/Container";
import { Title } from "../common/Title";
import { Subtitle } from "../common/Subtitle";
import { WorkoutContainer } from "../common/WorkoutContainer";
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

export const Workouts = () => {
  return (
    <ScrollView style={{ backgroundColor: "transparent" }}>
      <Container style={{ paddingBottom: 80 }}>
        <Title category="h1">Workouts</Title>
        <Subtitle category="c1" appearance="hint">
          5/3/1
        </Subtitle>
        <WorkoutContainer image={require("../../assets/day1.jpg")}>
          <WorkoutTitle category="h1">DAY 1</WorkoutTitle>
          <WorkoutSubtitle category="c1" appearance="hint" order="1">
            Light Bench Press
          </WorkoutSubtitle>
          <WorkoutSubtitle category="c1" appearance="hint" order="2">
            Light Overhead Press
          </WorkoutSubtitle>
          <WorkoutSubtitle category="c1" appearance="hint" order="3">
            Assistance
          </WorkoutSubtitle>
        </WorkoutContainer>
        <WorkoutContainer image={require("../../assets/day2.jpg")}>
          <WorkoutTitle category="h1">DAY 2</WorkoutTitle>
          <WorkoutSubtitle category="c1" appearance="hint" order="1">
            Squat
          </WorkoutSubtitle>
          <WorkoutSubtitle category="c1" appearance="hint" order="2">
            Sumo Deadlift
          </WorkoutSubtitle>
          <WorkoutSubtitle category="c1" appearance="hint" order="3">
            Assistance
          </WorkoutSubtitle>
        </WorkoutContainer>
        <WorkoutContainer image={require("../../assets/day3.jpg")}>
          <WorkoutTitle category="h1">DAY 3</WorkoutTitle>
          <WorkoutSubtitle category="c1" appearance="hint" order="1">
            Overhead Press
          </WorkoutSubtitle>
          <WorkoutSubtitle category="c1" appearance="hint" order="2">
            Incline Bench
          </WorkoutSubtitle>
          <WorkoutSubtitle category="c1" appearance="hint" order="3">
            Assistance
          </WorkoutSubtitle>
        </WorkoutContainer>
        <WorkoutContainer image={require("../../assets/day4.jpg")}>
          <WorkoutTitle category="h1">DAY 4</WorkoutTitle>
          <WorkoutSubtitle category="c1" appearance="hint" order="1">
            Deadlift
          </WorkoutSubtitle>
          <WorkoutSubtitle category="c1" appearance="hint" order="2">
            Front Squat
          </WorkoutSubtitle>
          <WorkoutSubtitle category="c1" appearance="hint" order="3">
            Assistance
          </WorkoutSubtitle>
        </WorkoutContainer>
        <WorkoutContainer image={require("../../assets/day5.jpg")}>
          <WorkoutTitle category="h1">DAY 5</WorkoutTitle>
          <WorkoutSubtitle category="c1" appearance="hint" order="1">
            Bench Press
          </WorkoutSubtitle>
          <WorkoutSubtitle category="c1" appearance="hint" order="2">
            Close Grip Bench Press
          </WorkoutSubtitle>
          <WorkoutSubtitle category="c1" appearance="hint" order="3">
            Assistance
          </WorkoutSubtitle>
        </WorkoutContainer>
      </Container>
    </ScrollView>
  );
};
