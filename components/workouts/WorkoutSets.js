import React from "react";
import { Row } from "../common/Row";
import { Column } from "../common/Column";
import { Text, Icon } from "@ui-kitten/components";
import { TEXT_COLOR_HINT_HEX } from "../../constants";
import styled from "styled-components";

const SetRow = styled(Row)`
  margin: 4px 0;
`;

export const WorkoutSets = ({ set }) => {
  return (
    <SetRow>
      <Column col={2.5}>
        <Text
          category="p1"
          appearance="hint"
          style={{ textAlign: "center", marginVertical: 12, marginLeft: 8 }}
        >
          {set.set}
        </Text>
      </Column>
      <Column col={2}>
        <Text category="h4" style={{ textAlign: "center" }}>
          {set.lbs}
        </Text>
        <Text category="c1" appearance="hint" style={{ textAlign: "center" }}>
          LBS
        </Text>
      </Column>
      <Column col={1}>
        <Icon
          style={{
            height: 16,
            textAlign: "center",
            marginTop: 12,
            marginRight: 6,
            color: TEXT_COLOR_HINT_HEX,
          }}
          name="x"
        />
      </Column>
      <Column col={2}>
        <Text category="h4" style={{ textAlign: "center", marginRight: 32 }}>
          {set.reps}
        </Text>
        <Text
          category="c1"
          appearance="hint"
          style={{ textAlign: "center", marginRight: 32 }}
        >
          REPS
        </Text>
      </Column>
    </SetRow>
  );
};
