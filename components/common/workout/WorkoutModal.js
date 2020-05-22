import React, { useState } from "react";
import Modal from "react-native-modal";
import {
  BACKGROUND_COLOR_HEX,
  WORKOUT_MODAL_BACKGROUND_COLOR_HEX,
} from "../../../constants";
import { Title } from "../Title";
import { Subtitle } from "../Subtitle";
import { Layout, Button, Tab, TabBar } from "@ui-kitten/components";
import styled from "styled-components";

const WorkoutModalLayout = styled(Layout)`
  margin: 0;
  width: 100%;
  height: 100%;
  background: ${BACKGROUND_COLOR_HEX};
`;

const TopContainer = styled(Layout)`
  background: ${WORKOUT_MODAL_BACKGROUND_COLOR_HEX};
  height: 30%;
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 35px;
  padding: 64px 16px;
  margin-bottom: 16px;
`;

const WorkoutsTabsContainer = styled(Layout)`
  height: 100%;
  background: ${BACKGROUND_COLOR_HEX};
  padding: 0 16px;
`;

const SaveButtonContainer = styled(Layout)`
  position: absolute;
  bottom: 48px;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: ${BACKGROUND_COLOR_HEX};
`;

const SaveButton = styled(Button)`
  width: 80%;
  border-radius: 8px;
`;

export const WorkoutModal = ({
  isVisible,
  setIsVisible,
  workoutTitle,
  workoutSubtitle,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Modal
      isVisible={isVisible}
      animationIn={"slideInDown"}
      animationOut={"slideOutUp"}
      animationInTiming={500}
      animationOutTiming={500}
      style={{ margin: 0 }}
    >
      <WorkoutModalLayout>
        <TopContainer>
          <Title category="h1" inverted={true}>
            Workouts
          </Title>
          <Subtitle category="c1" appearance="hint">
            5/3/1 - {workoutTitle}
          </Subtitle>
        </TopContainer>
        <WorkoutsTabsContainer>
          <TabBar
            selectedIndex={selectedIndex}
            onSelect={(index) => setSelectedIndex(index)}
            style={{ backgroundColor: BACKGROUND_COLOR_HEX }}
          >
            <Tab title={workoutSubtitle.first} />
            <Tab title={workoutSubtitle.second} />
          </TabBar>
        </WorkoutsTabsContainer>
        <SaveButtonContainer>
          <SaveButton size="giant" onPress={() => setIsVisible(false)}>
            Save
          </SaveButton>
        </SaveButtonContainer>
      </WorkoutModalLayout>
    </Modal>
  );
};
