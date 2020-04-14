import React, { useState } from "react";

export const UserContext = React.createContext({
  user: "",
  updateUser: (user) => {},
});

export default (props) => {
  const [user, setUser] = useState("Apple");

  const updateUser = (user) => {
    setUser(user);
  };

  return (
    <UserContext.Provider value={{ user: user, updateUser: updateUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
