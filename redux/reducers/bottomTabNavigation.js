import { SET_SELECTED_TAB } from "../actionTypes";

const bottomTabNavigation = (state = {}, action) => {
  switch (action.type) {
    case SET_SELECTED_TAB:
      return {
        selectedTab: action.payload,
      };

    default:
      return state;
  }
};

export default bottomTabNavigation;
