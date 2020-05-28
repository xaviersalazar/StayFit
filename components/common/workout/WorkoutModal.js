import React, { useState } from "react";
import { ScrollView } from "react-native";
import Modal from "react-native-modal";
import {
  BACKGROUND_COLOR_HEX,
  TEXT_COLOR_HINT_HEX,
  PRIMARY_COLOR_HEX,
} from "../../../constants";
import { Title } from "../Title";
import { Row } from "../Row";
import { Column } from "../Column";
import { Layout, Button, Tab, TabBar, Text, Icon } from "@ui-kitten/components";
import styled from "styled-components";
import { data } from "../../../mockData";
import { WorkoutSets } from "./WorkoutSets";

const ExitIcon = (props) => (
  <Icon {...props} style={{ color: "#8f9bb3", fontSize: 18 }} name="x" />
);

const WorkoutModalLayout = styled(Layout)`
  margin: 0;
  width: 100%;
  height: 100%;
  background: ${BACKGROUND_COLOR_HEX};
`;

const TopContainer = styled(Layout)`
  background: #ffffff;
  box-shadow: 0 18px 12px #c9cfda;
  height: 30%;
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 35px;
  padding: 64px 16px 0 16px;
  margin-bottom: 32px;
  z-index: 99;
`;

const ExitButton = styled(Button)`
  position: absolute;
  top: 64px;
  right: 28px;
  height: 45px;
  width: 45px;
  border-radius: 15px;
  background: ${BACKGROUND_COLOR_HEX};
  z-index: 100;
`;

const WorkoutsTabsContainer = styled(Layout)`
  position: relative;
  top: 32px;
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
  bottom: 22px;
  width: 80%;
  border-radius: 50px;
`;

const WorkoutSetsContainer = styled(Layout)`
  height: 65%;
  overflow: hidden;
  background: ${BACKGROUND_COLOR_HEX};
  padding-bottom: 74px;
  padding-right: 4px;
`;

export const WorkoutModal = ({
  isVisible,
  setIsVisible,
  workoutTitle,
  workoutSubtitle,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const renderWorkoutsIncluded = (workout1, workout2, assistance) => {
    return (
      <React.Fragment>
        <Row>
          <Column col={1}>
            <Icon
              name="package"
              style={{ height: 12, marginTop: 1, color: PRIMARY_COLOR_HEX }}
            />
          </Column>
          <Column col={20}>
            <Text category="c1" appearance="hint">
              {workout1} x9
            </Text>
          </Column>
        </Row>
        <Row>
          <Column col={1}>
            <Icon
              name="package"
              style={{ height: 12, marginTop: 1, color: PRIMARY_COLOR_HEX }}
            />
          </Column>
          <Column col={20}>
            <Text category="c1" appearance="hint">
              {workout2} x8
            </Text>
          </Column>
        </Row>
        <Row>
          <Column col={1}>
            <Icon
              name="package"
              style={{ height: 12, marginTop: 1, color: PRIMARY_COLOR_HEX }}
            />
          </Column>
          <Column col={20}>
            <Text category="c1" appearance="hint">
              Assistance:{" "}
              {assistance.map((a, i) =>
                i !== assistance.length - 1 ? `${a}, ` : a
              )}
            </Text>
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
          <ExitButton
            appearance="ghost"
            accessoryLeft={ExitIcon}
            onPress={() => setIsVisible(false)}
          />
          <Title category="h1">{workoutTitle}</Title>
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
          <ScrollView style={{ backgroundColor: "transparent" }}>
            {data.setData.map((set) => {
              return <WorkoutSets key={set.set} set={set} />;
            })}
          </ScrollView>
        </WorkoutSetsContainer>
        <StartButtonContainer>
          <StartButton size="giant" onPress={() => setIsVisible(false)}>
            Start
          </StartButton>
        </StartButtonContainer>
      </WorkoutModalLayout>
    </Modal>
  );
};
