import React from "react";
import type { PropsWithChildren } from "react";

const H1: React.FC<PropsWithChildren & { className?: string }> = ({
  className,
  children,
}) => {
  return (
    <h1 className={`text-6xl font-bold ${className || ""}`}>{children}</h1>
  );
};

export default H1;
