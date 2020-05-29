import React from "react";
import Modal from "react-native-modal";
import { Layout, Text, Button } from "@ui-kitten/components";
import { Title } from "../Title";
import { BACKGROUND_COLOR_HEX } from "../../../constants";
import styled from "styled-components";

const CurrentWorkoutLayout = styled(Layout)`
  margin: 0;
  width: 100%;
  height: 100%;
  background: ${BACKGROUND_COLOR_HEX};
`;

const TopContainer = styled(Layout)`
  padding: 64px 16px 0 16px;
  background: ${BACKGROUND_COLOR_HEX};
  text-align: center;
`;

const BottomContainer = styled(Layout)`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #ffffff;
  box-shadow: 0 -10px 18px #c9cfda;
  height: 65%;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  padding: 32px;
`;

const CurrentWorkoutTitle = styled(Title)`
  text-align: center;
  margin-top: 48px;
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
          <CurrentWorkoutTitle category="h1">Bench Press</CurrentWorkoutTitle>
        </TopContainer>
        <BottomContainer>
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
