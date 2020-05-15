import React from "react";
import { ScrollView } from "react-native";
import { Container } from "../common/Container";
import { Title } from "../common/Title";
import { data } from "../../mockData";
import { ProgressChart } from "../common/ProgressChart";

export const Dashboard = () => {
  return (
    <ScrollView style={{ backgroundColor: "transparent" }}>
      <Container style={{ paddingBottom: 100 }}>
        <Title category="h1">Progress</Title>
        <ProgressChart
          chartTitle="Bench Press"
          emptyData={data.emptyData}
          data={data.benchPress}
        />
        <ProgressChart
          chartTitle="Squat"
          emptyData={data.emptyData}
          data={data.squat}
        />
        <ProgressChart
          chartTitle="Deadlift"
          emptyData={data.emptyData}
          data={data.deadlift}
        />
        <ProgressChart
          chartTitle="Overhead Press"
          emptyData={data.emptyData}
          data={data.overheadPress}
        />
      </Container>
    </ScrollView>
  );
};
