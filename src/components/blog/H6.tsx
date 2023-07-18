import React from "react";
import type { PropsWithChildren } from "react";

const H6: React.FC<PropsWithChildren & { className?: string }> = ({
  className,
  children,
}) => {
  return <h6 className={`text-xl font-bold ${className || ""}`}>{children}</h6>;
};

export default H6;
