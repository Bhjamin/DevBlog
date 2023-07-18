import React from "react";
import type { PropsWithChildren } from "react";

const H2: React.FC<PropsWithChildren & { className?: string }> = ({
  className,
  children,
}) => {
  return (
    <h2 className={`text-5xl font-bold ${className || ""}`}>{children}</h2>
  );
};

export default H2;
