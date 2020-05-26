import React from "react";
import { Row } from "../Row";
import { Column } from "../Column";
import { Text, Icon } from "@ui-kitten/components";
import { TEXT_COLOR_HINT_HEX } from "../../../constants";
import styled from "styled-components";

const SetRow = styled(Row)`
  margin: 16px 0;
`;

export const WorkoutSets = ({ set }) => {
  return (
    <SetRow>
      <Column col={2.5}>
        <Text
          category="p1"
          appearance="hint"
          style={{ textAlign: "center", marginVertical: 12, paddingRight: 12 }}
        >
          {set.set}
        </Text>
      </Column>
      <Column col={2}>
        <Text category="h2" style={{ textAlign: "center" }}>
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
            paddingLeft: 8,
            color: TEXT_COLOR_HINT_HEX,
          }}
          name="x"
        />
      </Column>
      <Column col={2}>
        <Text category="h2" style={{ textAlign: "center" }}>
          {set.reps}
        </Text>
        <Text category="c1" appearance="hint" style={{ textAlign: "center" }}>
          REPS
        </Text>
      </Column>
    </SetRow>
  );
};
