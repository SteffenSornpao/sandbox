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

// const Header = () => {
//   return <header></header>;
// };

// const Content = ({ children }) => {
//   return <main>{children}</main>;
// };

// const Profile = () => {
//   const user = useContext(UserContext);
//   console.log(user);
//   return <div>{user}</div>;
// };
