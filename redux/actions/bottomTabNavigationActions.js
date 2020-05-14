import { SET_SELECTED_TAB } from "../actionTypes";

const setSelectedTab = (index) => {
  return {
    type: SET_SELECTED_TAB,
    payload: index,
  };
};

export default {
  setSelectedTab,
};
