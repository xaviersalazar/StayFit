import React from "react";
import Modal from "react-native-modal";
import { Layout, Text, Button, Icon } from "@ui-kitten/components";
import { Title } from "../Title";
import { PRIMARY_COLOR_HEX, BACKGROUND_COLOR_HEX } from "../../../constants";
import styled from "styled-components";

const PauseIcon = (props) => (
  <Icon {...props} style={{ color: "#8f9bb3", fontSize: 18 }} name="pause" />
);

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

const PauseButton = styled(Button)`
  height: 45px;
  width: 45px;
  border-radius: 15px;
  background: ${BACKGROUND_COLOR_HEX};
`;

const CurrentWorkoutTitle = styled(Title)`
  text-align: center;
`;

export const CurrentWorkout = ({ isVisible, setIsVisible }) => {
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
              <PauseButton
                appearance="ghost"
                accessoryLeft={PauseIcon}
                onPress={() => setIsVisible(false)}
              />
            </PauseButtonContainer>
          </Time>
        </TopContainer>
        <BottomContainer>
          <CurrentWorkoutTitle category="h1">Bench Press</CurrentWorkoutTitle>
          <Button
            style={{ position: "absolute", bottom: 0 }}
            onPress={() => setIsVisible(false)}
          >
            Done
          </Button>
        </BottomContainer>
      </CurrentWorkoutLayout>
    </Modal>
  );
};
