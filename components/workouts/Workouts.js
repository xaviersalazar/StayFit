import React from "react";
import { ScrollView } from "react-native";
import { Container } from "../common/Container";
import { Title } from "../common/Title";
import { WorkoutContainer } from "../common/WorkoutContainer";
import { Text } from "@ui-kitten/components";
import styled from "styled-components";

const WorkoutTitle = styled(Text)`
  position: absolute;
  bottom: 32px;
  left: 16px;
  color: #ffffff;
`;

export const Workouts = () => {
  return (
    <ScrollView style={{ backgroundColor: "transparent" }}>
      <Container style={{ paddingBottom: 100 }}>
        <Title category="h1">Workouts</Title>
        <WorkoutContainer image={require("../../assets/day1.jpg")}>
          <WorkoutTitle category="h1">DAY 1</WorkoutTitle>
        </WorkoutContainer>
        <WorkoutContainer image={require("../../assets/day2.jpg")}>
          <WorkoutTitle category="h1">DAY 2</WorkoutTitle>
        </WorkoutContainer>
        <WorkoutContainer image={require("../../assets/day3.jpg")}>
          <WorkoutTitle category="h1">DAY 3</WorkoutTitle>
        </WorkoutContainer>
        <WorkoutContainer image={require("../../assets/day4.jpg")}>
          <WorkoutTitle category="h1">DAY 4</WorkoutTitle>
        </WorkoutContainer>
        <WorkoutContainer image={require("../../assets/day5.jpg")}>
          <WorkoutTitle category="h1">DAY 5</WorkoutTitle>
        </WorkoutContainer>
      </Container>
    </ScrollView>
  );
};
