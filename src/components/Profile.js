import React from "react";
import { useStore } from "../store/store";

export default () => {
  const [state, dispatch] = useStore();

  const saveUser = () => {
    const newUser = document.querySelector("#user").value;
    dispatch("UPDATE_USER", newUser);
  };

  return (
    <div>
      <div>{state.user}</div>
      <input type="text" id="user" placeholder="Edit User Name" />
      <input type="submit" value="Save" onClick={saveUser} />
    </div>
  );
};
