import React, { useEffect, useState } from "react";
import { Container } from "../common/Container";
import { Title } from "../common/Title";
import { Layout, Text as UiKittenText } from "@ui-kitten/components";
import { Path, Circle, G, Text } from "react-native-svg";
import { AreaChart } from "react-native-svg-charts";
import * as shape from "d3-shape";
import styled from "styled-components";
import { PRIMARY_COLOR_RGB, PRIMARY_COLOR_RGBA_02 } from "../../constants";

const emptyData = [
  {
    id: 0,
    weight: 0,
    date: null,
    week: 0,
  },
  {
    id: 1,
    weight: 0,
    date: null,
    week: 1,
  },
  {
    id: 2,
    weight: 0,
    date: null,
    week: 2,
  },
  {
    id: 3,
    weight: 0,
    date: null,
    week: 3,
  },
  {
    id: 4,
    weight: 0,
    date: null,
    week: 4,
  },
  {
    id: 5,
    weight: 0,
    date: null,
    week: 5,
  },
];

const data = [
  {
    id: 0,
    weight: 135,
    date: null,
    week: 0,
  },
  {
    id: 1,
    weight: 135,
    date: "2020-05-05",
    week: 1,
  },
  {
    id: 2,
    weight: 155,
    date: "2020-05-10",
    week: 2,
  },
  {
    id: 3,
    weight: 185,
    date: "2020-05-15",
    week: 3,
  },
  {
    id: 4,
    weight: 195,
    date: "2020-05-20",
    week: 4,
  },
  {
    id: 5,
    weight: 195,
    date: null,
    week: 5,
  },
];

const StyledLayout = styled(Layout)`
  height: 225px;
  border-radius: 10px;
  border: 0;
  box-shadow: 0 3px 18px #dae0eb;
`;

const ChartTitle = styled(UiKittenText)`
  padding: 16px;
`;

const ChartContainer = styled(Layout)`
  height: 200px
  overflow: hidden;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const Dashboard = () => {
  const [chartData, setChartData] = useState(emptyData);

  useEffect(() => {
    setDataForChart();
  });

  const setDataForChart = () => {
    setTimeout(() => {
      setChartData(data);
    }, 1000);
  };

  const Line = ({ line }) => (
    <Path key={"line"} d={line} stroke={PRIMARY_COLOR_RGB} fill={"none"} />
  );

  const ChartPoints = ({ x, y }) => {
    return chartData
      .filter((item) => item.week !== 0 && item.week !== 5)
      .map((item, index) => (
        <Circle
          key={index}
          cx={x(item.week)}
          cy={y(item.weight)}
          r={4}
          stroke={PRIMARY_COLOR_RGB}
          fill={"white"}
        />
      ));
  };

  const ChartTooltips = ({ x, y }) => {
    return chartData
      .filter((item) => item.week !== 0 && item.week !== 5)
      .map((item) => (
        <G key={item.id} x={x(item.week) - 40} y={y(item.weight)}>
          <G y={-30} x={4}>
            <Text
              x={item.week + 30}
              dy={10}
              alignmentBaseline={"middle"}
              textAnchor={"middle"}
              stroke={"#222b45"}
              fontWeight={"100"}
              fontSize={"12"}
            >
              {`${item.weight} lbs`}
            </Text>
          </G>
        </G>
      ));
  };

  return (
    <Container>
      <Title category="h1">Progress</Title>
      <StyledLayout>
        <ChartTitle category="s1">Bench Press</ChartTitle>
        <ChartContainer>
          <AreaChart
            style={{ height: 200 }}
            data={chartData}
            yAccessor={({ item }) => item.weight}
            xAccessor={({ item }) => item.week}
            contentInset={{ top: 30, bottom: 10 }}
            curve={shape.curveNatural}
            svg={{ fill: PRIMARY_COLOR_RGBA_02 }}
            showGrid={false}
            xMin={0.65}
            xMax={4.35}
            animate={true}
            animationDuration={500}
          >
            <Line />
            <ChartPoints />
            {chartData[0].weight === 0 ? null : <ChartTooltips />}
          </AreaChart>
        </ChartContainer>
      </StyledLayout>
    </Container>
  );
};
