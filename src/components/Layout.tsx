import React from "react";
import type { PropsWithChildren } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout: React.FC<
  PropsWithChildren & { fullWidth?: boolean; className?: string }
> = ({ fullWidth = false, className, children, ...props }) => {
  return (
    <>
      <Nav />
      <main
        className={`mx-auto mt-[75px] min-h-[calc(100vh-75px)] w-full overflow-x-hidden p-3 md:p-6 ${
          fullWidth ? "max-w-full" : "max-w-[1440px]"
        }
          ${className || ""}
        `}
        {...props}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
