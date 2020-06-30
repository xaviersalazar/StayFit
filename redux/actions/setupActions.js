import { IS_FINISHED_SETUP } from "../actionTypes";

const isFinishedSetup = (isFinishedSetup) => {
  return {
    type: IS_FINISHED_SETUP,
    payload: isFinishedSetup,
  };
};

export default {
  isFinishedSetup,
};
