import React from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const Container = ({ children, className = "" }: Props) => {
  return (
    <div className={`${className && className + " "}max-w-4xl mx-auto`}>
      {children}
    </div>
  );
};

export default Container;
