import { IS_FINISHED_SETUP } from "../actionTypes";

const initialState = {
  isFinishedSetup: false,
};

const setup = (state = initialState, action) => {
  switch (action.type) {
    case IS_FINISHED_SETUP:
      return {
        isFinishedSetup: action.payload,
      };

    default:
      return state;
  }
};

export default setup;
