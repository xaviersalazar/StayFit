import React, { useState } from "react";
import { ScrollView } from "react-native";
import Modal from "react-native-modal";
import {
  PRIMARY_COLOR_HEX,
  BACKGROUND_COLOR_HEX,
  TEXT_COLOR_HINT_HEX,
  PRIMARY_COLOR_RGBA_06,
} from "../../../constants";
import { Title } from "../Title";
import { Row } from "../Row";
import { Column } from "../Column";
import { Layout, Button, Tab, TabBar, Text, Icon } from "@ui-kitten/components";
import { data } from "../../../mockData";
import { WorkoutSets } from "./WorkoutSets";
import { CurrentWorkout } from "./CurrentWorkout";
import styled from "styled-components";

const BackIcon = (props) => (
  <Icon
    {...props}
    style={{ color: "#8f9bb3", fontSize: 18 }}
    name="arrow-left"
  />
);

const WorkoutModalLayout = styled(Layout)`
  margin: 0;
  width: 100%;
  height: 100%;
  background: ${BACKGROUND_COLOR_HEX};
`;

const TopContainer = styled(Layout)`
  background: ${PRIMARY_COLOR_HEX};
  box-shadow: 0 4px 12px ${PRIMARY_COLOR_RGBA_06};
  height: 30%;
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 35px;
  padding: 64px 16px 0 16px;
  margin-bottom: 0;
  z-index: 99;
`;

const WorkoutTitle = styled(Title)`
  text-align: center;
  margin-top: 12px;
`;

const WorkoutsText = styled(Text)`
  color: #ffffff;
  text-align: center;
`;

const BackButton = styled(Button)`
  position: absolute;
  top: 48px;
  left: 18px;
  height: 45px;
  width: 45px;
  border-radius: 15px;
  background: ${BACKGROUND_COLOR_HEX};
  z-index: 100;
`;

const WorkoutsTabsContainer = styled(Layout)`
  position: relative;
  top: 18px;
  background: ${BACKGROUND_COLOR_HEX};
  border-radius: 35px;
  padding: 4px;
  margin-top: 16px;
`;

const WorkoutTabs = styled(TabBar)`
  border-radius: 35px;
  background-color: ${BACKGROUND_COLOR_HEX};
`;

const WorkoutTab = styled(Tab)`
  background: ${(props) =>
    props.isSelected ? PRIMARY_COLOR_HEX : BACKGROUND_COLOR_HEX};
  border-radius: 35px;
  padding: 8px;
  margin: 0 4px;
`;

const WorkoutTabText = styled(Text)`
  color: ${(props) => (props.isSelected ? "#ffffff" : TEXT_COLOR_HINT_HEX)};
`;

const StartButtonContainer = styled(Layout)`
  position: absolute;
  bottom: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: ${BACKGROUND_COLOR_HEX};
  height: 75px;
`;

const StartButton = styled(Button)`
  position: relative;
  bottom: 12px;
  width: 80%;
  border-radius: 50px;
`;

const WorkoutSetsContainer = styled(Layout)`
  height: 70%;
  overflow: hidden;
  background: ${BACKGROUND_COLOR_HEX};
  padding-right: 4px;
  padding-top: 36px;
`;

export const WorkoutModal = ({
  isVisible,
  setIsVisible,
  workoutTitle,
  workoutSubtitle,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isCurrentWorkoutVisible, setIsCurrentWorkoutVisible] = useState(false);

  const renderWorkoutsIncluded = (workout1, workout2, assistance) => {
    return (
      <React.Fragment>
        <Row>
          <Column>
            <WorkoutsText category="c1">{workout1} x9</WorkoutsText>
          </Column>
        </Row>
        <Row>
          <Column>
            <WorkoutsText category="c1">{workout2} x8</WorkoutsText>
          </Column>
        </Row>
        <Row>
          <Column>
            <WorkoutsText category="c1">
              Assistance:{" "}
              {assistance.map((a, i) =>
                i !== assistance.length - 1 ? `${a}, ` : a
              )}
            </WorkoutsText>
          </Column>
        </Row>
      </React.Fragment>
    );
  };

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
          <BackButton
            appearance="ghost"
            accessoryLeft={BackIcon}
            onPress={() => setIsVisible(false)}
          />
          <WorkoutTitle category="h1" inverted={true}>
            {workoutTitle}
          </WorkoutTitle>
          {renderWorkoutsIncluded(
            workoutSubtitle.first,
            workoutSubtitle.second,
            workoutSubtitle.assistance
          )}
          <WorkoutsTabsContainer>
            <WorkoutTabs
              selectedIndex={selectedIndex}
              onSelect={(index) => setSelectedIndex(index)}
              indicatorStyle={{ backgroundColor: "transparent", height: 0 }}
            >
              <WorkoutTab
                title={() => (
                  <WorkoutTabText
                    category="c2"
                    isSelected={selectedIndex === 0 ? true : false}
                  >
                    {workoutSubtitle.first}
                  </WorkoutTabText>
                )}
                isSelected={selectedIndex === 0 ? true : false}
              />
              <WorkoutTab
                title={() => (
                  <WorkoutTabText
                    category="c2"
                    isSelected={selectedIndex === 1 ? true : false}
                  >
                    {workoutSubtitle.second}
                  </WorkoutTabText>
                )}
                isSelected={selectedIndex === 1 ? true : false}
              />
            </WorkoutTabs>
          </WorkoutsTabsContainer>
        </TopContainer>
        <WorkoutSetsContainer>
          {data.setData.map((set) => {
            return <WorkoutSets key={set.set} set={set} />;
          })}
        </WorkoutSetsContainer>
        <StartButtonContainer>
          <StartButton
            size="giant"
            onPress={() => setIsCurrentWorkoutVisible(true)}
          >
            Start
          </StartButton>
        </StartButtonContainer>
      </WorkoutModalLayout>
      <CurrentWorkout
        isVisible={isCurrentWorkoutVisible}
        setIsVisible={setIsCurrentWorkoutVisible}
      />
    </Modal>
  );
};
