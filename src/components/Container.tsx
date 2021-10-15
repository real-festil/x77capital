import React from "react";
import Header from "./Header";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";

interface IProps {
  children: JSX.Element[] | JSX.Element;
}

const Container: React.FC<IProps> = ({ children }) => {
  return (
    <div className="container-organism">
      <LeftSideBar />
      {children}
      <RightSideBar />
    </div>
  );
};

export default Container;
