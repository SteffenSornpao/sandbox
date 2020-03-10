import React from "react";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";

const Counter = ({
  add,
  count: { count },
  deleteFromHistory,
  history: { history },
  increment
}) => {
  return [
    count,
    <button key="increment" onClick={() => increment(count)}>
      increment
    </button>,
    <button key="add" onClick={() => add(count)}>
      add
    </button>,
    <div key="history">
      History:
      <ul>
        {history.map(el => (
          <li key={el.id} id={el.id} onClick={() => deleteFromHistory(el.id)}>
            {el.value}
          </li>
        ))}
      </ul>
    </div>
  ];
};

const mapStateToProps = state => {
  return {
    count: state.count,
    history: state.history
  };
};

const mapDispatchToProps = dispatch => {
  return {
    add: count => {
      dispatch({ type: actionTypes.ADD, value: 10 });
      dispatch({ type: actionTypes.LOG_TO_HISTORY, count: count + 10 });
    },
    increment: count => {
      dispatch({ type: actionTypes.INCREMENT });
      dispatch({ type: actionTypes.LOG_TO_HISTORY, count: count + 1 });
    },
    deleteFromHistory: id =>
      dispatch({ type: actionTypes.DELETE_FROM_HISTORY, id: id })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
