import React from "react";
import UserContext from "./context/user-context";
import Content from "./components/Content";
import Profile from "./components/Profile";

export default function App() {
  return (
    <UserContext>
      <Content>
        <Profile />
      </Content>
    </UserContext>
  );
}
