import React, { useState } from "react";
import { View, Dimensions } from "react-native";
import Modal from "react-native-modal";
import { Layout, Text, Button, Icon } from "@ui-kitten/components";
import { Title } from "../common/Title";
import {
  PRIMARY_COLOR_HEX,
  BACKGROUND_COLOR_HEX,
  TEXT_COLOR_HINT_HEX,
  TEXT_COLOR_HEX,
} from "../../constants";
import { Row } from "../common/Row";
import { Column } from "../common/Column";
import styled from "styled-components";

const PauseIcon = (props) => (
  <Icon {...props} style={{ color: "#8f9bb3", fontSize: 18 }} name="pause" />
);

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

const CurrentWorkoutLayout = styled(Layout)`
  margin: 0;
  width: 100%;
  height: 100%;
  background: ${PRIMARY_COLOR_HEX};
`;

const TopContainer = styled(Layout)`
  padding: 64px 16px 0 16px;
  background: ${PRIMARY_COLOR_HEX};
  text-align: center;
`;

const BottomContainer = styled(Layout)`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: ${BACKGROUND_COLOR_HEX};
  height: 65%;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  padding: 32px;
`;

const Time = styled(Layout)`
  position: relative;
  top: 48px;
  text-align: center;
  background: ${PRIMARY_COLOR_HEX};
`;

const TimeTitle = styled(Title)`
  font-size: 72px;
  text-align: center;
`;

const TimeSubtitle = styled(Text)`
  text-align: center;
  color: #ffffff;
`;

const PauseButtonContainer = styled(Layout)`
  margin-top: 12px;
  align-items: center;
  width: 100%;
  background: ${PRIMARY_COLOR_HEX};
`;

const CurrentWorkoutTitle = styled(Title)`
  text-align: center;
  margin-bottom: 56px;
`;

const SetProgressContainer = styled(Layout)`
  position: absolute;
  bottom: 64px;
  align-items: center;
  height: auto;
  width: ${Dimensions.get("window").width}px;
  padding: 0 16px;
  background: transparent;
`;

const SetDetailsText = styled(Text)`
  text-align: center;
`;

const RepsCompletedLayout = styled(Layout)`
  background: ${BACKGROUND_COLOR_HEX};
`;

const CompletedRepsText = styled(Text)`
  text-align: center;
  margin-top: 52px;
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
`;

const SaveButton = styled(Button)`
  position: relative;
  bottom: 12px;
  width: 60%;
  border-radius: 50px;
`;

const NextButtonContainer = styled(Layout)`
  position: absolute;
  bottom: 88px;
  justify-content: center;
  align-items: center;
  width: ${Dimensions.get("window").width}px;
  background: ${BACKGROUND_COLOR_HEX};
  height: 75px;
`;

const NextButton = styled(Button)`
  position: relative;
  bottom: 12px;
  width: 80%;
  border-radius: 50px;
`;

const SetProgress = styled(View)`
  height: 8px;
  width: 95%;
  background: ${(props) => (props.done ? PRIMARY_COLOR_HEX : TEXT_COLOR_HEX)};
  border-radius: 25px;
`;

export const CurrentWorkout = ({ isVisible, setIsVisible }) => {
  const [repsCompleted, setRepsCompleted] = useState(0);

  return (
    <Modal
      isVisible={isVisible}
      animationIn={"slideInUp"}
      animationOut={"slideOutDown"}
      animationInTiming={500}
      animationOutTiming={500}
      style={{ margin: 0 }}
    >
      <CurrentWorkoutLayout>
        <TopContainer>
          <Time>
            <TimeSubtitle category="p1" inverted={true}>
              TIME
            </TimeSubtitle>
            <TimeTitle category="h1" inverted={true}>
              05:25
            </TimeTitle>
            <PauseButtonContainer>
              <CustomButton
                appearance="ghost"
                accessoryLeft={PauseIcon}
                onPress={() => setIsVisible(false)}
              />
            </PauseButtonContainer>
          </Time>
        </TopContainer>
        <BottomContainer>
          <CurrentWorkoutTitle category="h1">Bench Press</CurrentWorkoutTitle>
          <Row style={{ paddingLeft: 16, paddingRight: 16 }}>
            <Column col={6}>
              <SetDetailsText category="h1">245</SetDetailsText>
              <Text
                category="c1"
                appearance="hint"
                style={{ textAlign: "center" }}
              >
                LBS
              </Text>
            </Column>
            <Column col={1}>
              <Icon
                style={{
                  height: 16,
                  textAlign: "center",
                  marginTop: 12,
                  color: TEXT_COLOR_HINT_HEX,
                }}
                name="x"
              />
            </Column>
            <Column col={6}>
              <SetDetailsText category="h1">1+</SetDetailsText>
              <Text
                category="c1"
                appearance="hint"
                style={{ textAlign: "center" }}
              >
                REPS
              </Text>
            </Column>
          </Row>
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
              <SaveButton size="small" status="success">
                Save
              </SaveButton>
            </SaveButtonContainer>
          </RepsCompletedLayout>
          <NextButtonContainer>
            <NextButton size="giant">Next</NextButton>
          </NextButtonContainer>
          <SetProgressContainer>
            <Row>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
                return (
                  <Column key={i}>
                    <SetProgress done={i <= 3 ? true : false} />
                  </Column>
                );
              })}
            </Row>
          </SetProgressContainer>
        </BottomContainer>
      </CurrentWorkoutLayout>
    </Modal>
  );
};
