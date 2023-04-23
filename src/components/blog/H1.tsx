import React from "react";
import type { PropsWithChildren } from "react";

const H1: React.FC<PropsWithChildren> = ({ children }) => {
  return <h2 className="text-7xl">{children}</h2>;
};

export default H1;
