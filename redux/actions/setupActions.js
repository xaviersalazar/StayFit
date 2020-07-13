import { IS_FINISHED_SETUP } from "../actionTypes";
import api from "../../helper/api";

export const saveIsFinishedSetup = (value) => (dispatch) => {
  return api
    .save("isFinishedSetup", value)
    .then(dispatch(isFinishedSetup(value)));
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
