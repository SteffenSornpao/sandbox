import * as actionTypes from "../actions";

const initialState = {
  history: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOG_TO_HISTORY:
      return {
        ...state,
        history: state.history.concat({
          id: Math.ceil(Math.random() * 10000),
          value: action.count
        })
      };
    case actionTypes.DELETE_FROM_HISTORY:
      return {
        ...state,
        history: state.history.filter(el => el.id !== action.id)
      };
    default:
      return state;
  }
};

export default reducer;
