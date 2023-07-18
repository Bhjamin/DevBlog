import React from "react";
import type { PropsWithChildren } from "react";

const H4: React.FC<PropsWithChildren & { className?: string }> = ({
  className,
  children,
}) => {
  return (
    <h4 className={`text-3xl font-bold ${className || ""}`}>{children}</h4>
  );
};

export default H4;
