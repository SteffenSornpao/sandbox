import React from "react";
import Content from "./components/Content";
import Profile from "./components/Profile";
import configureUserStore from "./store/user-store";

configureUserStore();

export default function App() {
  return (
    <Content>
      <Profile />
    </Content>
  );
}
