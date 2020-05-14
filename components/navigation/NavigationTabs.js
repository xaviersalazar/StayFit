import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../redux/actions";
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
  Layout,
} from "@ui-kitten/components";
import { PRIMARY_COLOR_HEX, PRIMARY_COLOR_RGBA_04 } from "../../constants";
import styled from "styled-components";

const Container = styled(Layout)`
  position: absolute;
  bottom: 16px;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const StyledBottomNavigation = styled(BottomNavigation)`
  margin-vertical: 8px;
`;

const StyledBottomNavigationTab = styled(BottomNavigationTab)`
  border-radius: 50px;
  box-shadow: ${(props) =>
    props.isSelected
      ? "0 2px 5px " + PRIMARY_COLOR_RGBA_04
      : "0 0 0 rgba(0, 0, 0, 0)"};
  background: ${(props) => (props.isSelected ? PRIMARY_COLOR_HEX : "#ffffff")};
  margin: 0px 32px;
`;

const StyledIcon = styled(Icon)`
  color: ${(props) => (props.isSelected ? "#ffffff" : PRIMARY_COLOR_HEX)};
  font-size: 16px;
`;

export const NavigationTabs = () => {
  const dispatch = useDispatch();
  const selectedIndex = useSelector(
    (state) => state.bottomTabNavigation.selectedTab
  );

  useEffect(() => {
    dispatch(allActions.bottomTabNavigationActions.setSelectedTab(0));
  }, []);

  const onSelect = (index) => {
    dispatch(allActions.bottomTabNavigationActions.setSelectedTab(index));
  };

  const DashboardIcon = () => (
    <StyledIcon
      isSelected={selectedIndex === 0 ? true : false}
      name="bar-chart-2"
    />
  );

  const WorkoutsIcon = () => (
    <StyledIcon
      isSelected={selectedIndex === 1 ? true : false}
      name="package"
    />
  );

  const SettingsIcon = () => (
    <StyledIcon
      isSelected={selectedIndex === 2 ? true : false}
      name="settings"
    />
  );

  return (
    <Container>
      <StyledBottomNavigation
        selectedIndex={selectedIndex}
        onSelect={(index) => onSelect(index)}
        appearance="noIndicator"
      >
        <StyledBottomNavigationTab
          isSelected={selectedIndex === 0 ? true : false}
          icon={DashboardIcon}
        />
        <StyledBottomNavigationTab
          isSelected={selectedIndex === 1 ? true : false}
          icon={WorkoutsIcon}
        />
        <StyledBottomNavigationTab
          isSelected={selectedIndex === 2 ? true : false}
          icon={SettingsIcon}
        />
      </StyledBottomNavigation>
    </Container>
  );
};
