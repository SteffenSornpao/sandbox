import * as actionTypes from "../actions";

const initialState = {
  count: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return { ...state, count: state.count + action.value };
    case actionTypes.INCREMENT:
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};

export default reducer;
