import React from "react";
import { useSelector } from "react-redux";
import { NavigationView } from "./navigation/NavigationView";
import { Setup } from "./setup/Setup";

export const Main = () => {
  const isFinishedSetup = useSelector((state) => state.setup.isFinishedSetup);

  return (
    <React.Fragment>
      {isFinishedSetup ? <NavigationView /> : <Setup />}
    </React.Fragment>
  );
};
