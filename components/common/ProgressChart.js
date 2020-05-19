import React, { useEffect, useState } from "react";
import { Layout, Text as UiKittenText } from "@ui-kitten/components";
import { AreaChart } from "react-native-svg-charts";
import * as shape from "d3-shape";
import { Path, Circle, G, Text } from "react-native-svg";
import {
  PRIMARY_COLOR_RGB,
  PRIMARY_COLOR_RGBA_02,
  TEXT_COLOR_HEX,
} from "../../constants";
import styled from "styled-components";

const StyledLayout = styled(Layout)`
  height: 225px;
  border-radius: 10px;
  border: 0;
  box-shadow: 0 26px 26px #c9cfda;
  margin: 32px 0;
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

export const ProgressChart = ({ chartTitle, emptyData, data }) => {
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
      .filter((item) => item.id !== 0 && item.id !== 8)
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
      .filter((item) => item.id !== 0 && item.id !== 8)
      .map((item) => (
        <G key={item.id} x={x(item.week) - 40} y={y(item.weight)}>
          <G y={-30} x={4}>
            <Text
              x={item.week + 30}
              dy={10}
              alignmentBaseline={"middle"}
              textAnchor={"middle"}
              stroke={TEXT_COLOR_HEX}
              fontWeight={"100"}
              fontSize={"10"}
            >
              {`${item.weight} lbs`}
            </Text>
          </G>
        </G>
      ));
  };

  return (
    <StyledLayout>
      <ChartTitle category="s1">{chartTitle}</ChartTitle>
      <ChartContainer>
        <AreaChart
          style={{ height: 200 }}
          data={chartData}
          yAccessor={({ item }) => item.weight}
          xAccessor={({ item }) => item.week}
          contentInset={{ top: 70, bottom: 0 }}
          curve={shape.curveNatural}
          svg={{ fill: PRIMARY_COLOR_RGBA_02 }}
          showGrid={false}
          xMin={1 - 0.5}
          xMax={7 + 0.5}
          animate={true}
          animationDuration={500}
        >
          <Line />
          <ChartPoints />
          <ChartTooltips />
        </AreaChart>
      </ChartContainer>
    </StyledLayout>
  );
};
