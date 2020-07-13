import React from "react";
import { useSelector } from "react-redux";
import { NavigationTabs } from "./NavigationTabs";
import { Dashboard } from "../dashboard/Dashboard";
import { Workouts } from "../workouts/Workouts";
import { Settings } from "../settings/Settings";

const renderSelectedTabView = (selectedIndex) => {
  if (selectedIndex === 0) {
    return <Dashboard />;
  } else if (selectedIndex === 1) {
    return <Workouts />;
  } else {
    return <Settings />;
  }
};

export const NavigationView = () => {
  const selectedIndex = useSelector(
    (state) => state.bottomTabNavigation.selectedTab
  );

  return (
    <React.Fragment>
      {renderSelectedTabView(selectedIndex)}
      <NavigationTabs />
    </React.Fragment>
  );
};
