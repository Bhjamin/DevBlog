import React from "react";
import type { PropsWithChildren } from "react";

const H3: React.FC<PropsWithChildren & { className?: string }> = ({
  className,
  children,
}) => {
  return (
    <h3 className={`text-4xl font-bold ${className || ""}`}>{children}</h3>
  );
};

export default H3;
