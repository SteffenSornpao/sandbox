import React, { useContext } from "react";
import { UserContext } from "../context/user-context";

export default () => {
  const { user, updateUser } = useContext(UserContext);

  const saveUser = () => {
    const newUser = document.querySelector("#user").value;
    updateUser(newUser);
  };

  return (
    <div>
      <div>{user}</div>
      <input type="text" id="user" placeholder="Edit User Name" />
      <input type="submit" value="Save" onClick={saveUser} />
    </div>
  );
};
