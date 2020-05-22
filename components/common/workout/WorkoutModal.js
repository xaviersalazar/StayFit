import React, { useState } from "react";
import Modal from "react-native-modal";
import {
  BACKGROUND_COLOR_HEX,
  WORKOUT_MODAL_BACKGROUND_COLOR_HEX,
  TEXT_COLOR_HINT_HEX,
  PRIMARY_COLOR_HEX,
} from "../../../constants";
import { Title } from "../Title";
import { Row } from "../Row";
import { Column } from "../Column";
import { Layout, Button, Tab, TabBar, Text, Icon } from "@ui-kitten/components";
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
  padding: 64px 16px 0 16px;
  margin-bottom: 16px;
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
    props.isSelected
      ? WORKOUT_MODAL_BACKGROUND_COLOR_HEX
      : BACKGROUND_COLOR_HEX};
  border-radius: 35px;
  padding: 8px;
  margin: 0 4px;
`;

const WorkoutTabText = styled(Text)`
  color: ${(props) => (props.isSelected ? "#ffffff" : TEXT_COLOR_HINT_HEX)};
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
          <Title category="h1" inverted={true}>
            DAY 1
          </Title>
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
        <SaveButtonContainer>
          <SaveButton size="giant" onPress={() => setIsVisible(false)}>
            Save
          </SaveButton>
        </SaveButtonContainer>
      </WorkoutModalLayout>
    </Modal>
  );
};
