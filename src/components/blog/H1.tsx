import React from "react";
import type { PropsWithChildren } from "react";

const H1: React.FC<PropsWithChildren & { className?: string }> = ({
  className,
  children,
}) => {
  return (
    <h2 className={`text-4xl font-bold ${className || ""}`}>{children}</h2>
  );
};

export default H1;
