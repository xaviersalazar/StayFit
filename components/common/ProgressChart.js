import React from "react";
import { Layout, Text as UiKittenText } from "@ui-kitten/components";
import {
  PRIMARY_COLOR_HEX,
  PRIMARY_COLOR_RGBA_06,
  BACKGROUND_COLOR_HEX,
} from "../../constants";
import { Svg, G, Line, Rect, Text } from "react-native-svg";
import * as d3 from "d3";
import styled from "styled-components";

const StyledLayout = styled(Layout)`
  height: 225px;
  background: ${PRIMARY_COLOR_HEX};
  border-radius: 20px;
  border: 0;
  box-shadow: 0 28px 12px ${PRIMARY_COLOR_RGBA_06};
  margin: 0 0 64px 0;
`;

const ChartTitle = styled(UiKittenText)`
  padding: 16px;
  color: #ffffff;
`;

const ChartContainer = styled(Layout)`
  height: 200px
  background: ${PRIMARY_COLOR_HEX};
  overflow: hidden;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const ProgressChart = ({ chartTitle, emptyData, data }) => {
  const GRAPH_MARGIN = 20;
  const GRAPH_BAR_WIDTH = 5;
  const SVGHeight = 200;
  const SVGWidth = 410;
  const graphHeight = SVGHeight - 1.5 * GRAPH_MARGIN;
  const graphWidth = SVGWidth - 2 * GRAPH_MARGIN;
  const xDomain = data.map((item) => item.week);
  const xRange = [0, graphWidth];
  const x = d3.scalePoint().domain(xDomain).range(xRange).padding(1);
  const yDomain = [0, d3.max(data, (d) => d.weight)];
  const yRange = [0, graphHeight];
  const y = d3.scaleLinear().domain(yDomain).range(yRange);

  return (
    <StyledLayout>
      <ChartTitle category="s1">{chartTitle}</ChartTitle>
      <ChartContainer>
        <Svg width={"100%"} height={"100%"}>
          <G y={graphHeight}>
            {data.map((item) => (
              <Rect
                key={item.id}
                x={x(item.week) - GRAPH_BAR_WIDTH / 2}
                y={y(item.weight) * -1}
                rx={2.5}
                width={GRAPH_BAR_WIDTH}
                height={y(item.weight)}
                fill={BACKGROUND_COLOR_HEX}
              />
            ))}
          </G>
        </Svg>
      </ChartContainer>
    </StyledLayout>
  );
};
