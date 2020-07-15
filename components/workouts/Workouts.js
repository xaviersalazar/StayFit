import React from "react";
import { ScrollView } from "react-native";
import { Workout } from "./Workout";
import { Container } from "../common/Container";
import { Title } from "../common/Title";
import { Subtitle } from "../common/Subtitle";

const data = [
  {
    image: require("../../assets/day1.jpg"),
    workoutTitle: "DAY 1",
    workoutSubtitle: {
      first: "Bench Press",
      second: "Overhead Press",
      assistance: ["Chest", "Arms", "Back"],
    },
  },
  {
    image: require("../../assets/day2.jpg"),
    workoutTitle: "DAY 2",
    workoutSubtitle: {
      first: "Squat",
      second: "Sumo Deadlift",
      assistance: ["Legs", "Abs"],
    },
  },
  {
    image: require("../../assets/day3.jpg"),
    workoutTitle: "DAY 3",
    workoutSubtitle: {
      first: "Overhead Press",
      second: "Incline Bench Press",
      assistance: ["Shoulders", "Chest"],
    },
  },
  {
    image: require("../../assets/day4.jpg"),
    workoutTitle: "DAY 4",
    workoutSubtitle: {
      first: "Deadlift",
      second: "Front Squat",
      assistance: ["Back", "Abs"],
    },
  },
  {
    image: require("../../assets/day5.jpg"),
    workoutTitle: "DAY 5",
    workoutSubtitle: {
      first: "Bench Press",
      second: "Close Grip Bench Press",
      assistance: ["Arms", "Other"],
    },
  },
];

export const Workouts = () => {
  return (
    <ScrollView style={{ backgroundColor: "transparent" }}>
      <Container style={{ paddingBottom: 80 }}>
        <Title category="h1">Workouts</Title>
        <Subtitle category="c1" appearance="hint">
          nSuns 5/3/1
        </Subtitle>
        {data.map((d) => (
          <Workout
            key={d.workoutTitle}
            image={d.image}
            workoutTitle={d.workoutTitle}
            workoutSubtitle={{
              first: d.workoutSubtitle.first,
              second: d.workoutSubtitle.second,
              assistance: d.workoutSubtitle.assistance,
            }}
          />
        ))}
      </Container>
    </ScrollView>
  );
};
