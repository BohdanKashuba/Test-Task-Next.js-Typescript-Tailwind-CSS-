import React from "react";

interface IContainerProps {
  children: JSX.Element[] | JSX.Element;
}

const Container: React.FC<IContainerProps> = ({ children }) => {
  return <div className="max-w-[1280px] px-1 mx-auto">{children}</div>;
};

export default Container;
