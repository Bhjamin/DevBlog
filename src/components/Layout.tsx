import React from "react";
import type { PropsWithChildren } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout: React.FC<PropsWithChildren & { fullWidth?: boolean }> = ({
  fullWidth = false,
  children,
  ...props
}) => {
  return (
    <>
      <Nav />
      <main
        className={`mx-auto min-h-[calc(100vh-75px)] w-full ${
          fullWidth ? "max-w-full" : "max-w-[1440px]"
        }`}
        {...props}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
