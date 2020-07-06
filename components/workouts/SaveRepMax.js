import React, { useState } from "react";
import { Layout, Text, Button, Icon } from "@ui-kitten/components";
import Modal from "react-native-modal";
import { Column } from "../common/Column";
import { Row } from "../common/Row";
import { BACKGROUND_COLOR_HEX } from "../../constants";
import styled from "styled-components";

const PlusIcon = (props) => (
  <Icon {...props} style={{ color: "#8f9bb3", fontSize: 18 }} name="plus" />
);

const MinusIcon = (props) => (
  <Icon {...props} style={{ color: "#8f9bb3", fontSize: 18 }} name="minus" />
);

const CustomButton = styled(Button)`
  height: 45px;
  width: 45px;
  border-radius: 15px;
  background: ${BACKGROUND_COLOR_HEX};
`;

const SaveRepsModal = styled(Modal)`
  margin: 0 auto;
  width: 80%;
`;

const RepsCompletedLayout = styled(Layout)`
  background: ${BACKGROUND_COLOR_HEX};
  border-radius: 20px;
`;

const CompletedRepsText = styled(Text)`
  text-align: center;
  margin-top: 18px;
`;

const CompletedRepsRow = styled(Row)`
  margin-top: 16px;
`;

const CompletedRepsQuantityText = styled(Text)`
  text-align: center;
  padding-top: 8px;
`;

const AddButton = styled(CustomButton)`
  align-self: flex-end;
`;

const MinusButton = styled(CustomButton)`
  align-self: flex-start;
`;

const SaveButtonContainer = styled(Layout)`
  justify-content: center;
  align-items: center;
  width: 100%;
  background: ${BACKGROUND_COLOR_HEX};
  height: 75px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const SaveButton = styled(Button)`
  position: relative;
  bottom: 0px;
  width: 60%;
  border-radius: 50px;
`;

export const SaveRepMax = ({ isSaveRepMaxVisible, setIsSaveRepMaxVisible }) => {
  const [repsCompleted, setRepsCompleted] = useState(0);

  return (
    <SaveRepsModal
      isVisible={isSaveRepMaxVisible}
      animationIn={"slideInUp"}
      animationOut={"slideOutDown"}
      animationInTiming={500}
      animationOutTiming={500}
    >
      <RepsCompletedLayout>
        <Row style={{ paddingLeft: 16, paddingRight: 24 }}>
          <Column>
            <CompletedRepsText category="c1" appearance="hint">
              How many reps did you complete?
            </CompletedRepsText>
          </Column>
        </Row>
        <CompletedRepsRow style={{ paddingLeft: 16, paddingRight: 24 }}>
          <Column>
            <AddButton
              appearance="ghost"
              accessoryLeft={PlusIcon}
              onPress={() => setRepsCompleted(repsCompleted + 1)}
            />
          </Column>
          <Column>
            <CompletedRepsQuantityText category="h4">
              {repsCompleted}
            </CompletedRepsQuantityText>
          </Column>
          <Column>
            <MinusButton
              appearance="ghost"
              accessoryLeft={MinusIcon}
              onPress={() =>
                setRepsCompleted(
                  repsCompleted > 0 ? repsCompleted - 1 : repsCompleted
                )
              }
            />
          </Column>
        </CompletedRepsRow>
        <SaveButtonContainer>
          <SaveButton
            size="small"
            onPress={() => setIsSaveRepMaxVisible(false)}
          >
            Save
          </SaveButton>
        </SaveButtonContainer>
      </RepsCompletedLayout>
    </SaveRepsModal>
  );
};
