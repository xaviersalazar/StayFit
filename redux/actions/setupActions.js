import { IS_FINISHED_SETUP } from "../actionTypes";
import api from "../../helper/api";
import math from "../../helper/math";
import TrainingMax from "../../classes/TrainingMax";

// Local helper functions
const saveOneRepMaxes = (oneRepMaxes) => {
  return api.save("oneRepMax", oneRepMaxes);
};

const createTrainingMaxes = (oneRepMaxes) => {
  return oneRepMaxes.map((oneRm) => {
    return new TrainingMax(
      oneRm.exercise,
      oneRm.displayName,
      math.calculateTrainingMax(oneRm.weight)
    );
  });
};

const saveTrainingMaxes = (oneRepMaxes) => {
  return api.save("trainingMaxCurrent", createTrainingMaxes(oneRepMaxes));
};

const saveIsFinishedSetup = (value) => {
  return api.save("isFinishedSetup", value);
};

// Exported actions
export const saveInitialData = (oneRepMaxes) => (dispatch) => {
  saveOneRepMaxes(oneRepMaxes)
    .then(saveTrainingMaxes(oneRepMaxes))
    .then(saveIsFinishedSetup(true))
    .then(dispatch(isFinishedSetup(true)));
};

const isFinishedSetup = (value) => {
  return {
    type: IS_FINISHED_SETUP,
    payload: value,
  };
};

export default {
  isFinishedSetup,
};
