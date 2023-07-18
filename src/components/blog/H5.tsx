import React from "react";
import type { PropsWithChildren } from "react";

const H5: React.FC<PropsWithChildren & { className?: string }> = ({
  className,
  children,
}) => {
  return (
    <h5 className={`text-2xl font-bold ${className || ""}`}>{children}</h5>
  );
};

export default H5;
