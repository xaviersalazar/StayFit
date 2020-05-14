import { SET_SELECTED_TAB } from "../actionTypes";

const bottomTabNavigation = (state = {}, action) => {
  switch (action.type) {
    case SET_SELECTED_TAB:
      return {
        selected_tab: action.payload,
      };

    default:
      return state;
  }
};

export default bottomTabNavigation;
