import { initStore } from "./store";

export default () => {
  const actions = {
    UPDATE_USER: (curState, user) => {
      return { user: user };
    },
  };
  initStore(actions, { user: "Apple" });
};
