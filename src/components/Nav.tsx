import Link from "next/link";
import React from "react";
const Nav: React.FC = () => {
  return (
    <nav className="fixed top-0 z-20 h-[75px] w-full bg-secondary">
      <div className="flex h-full items-center">
        <Link
          href="/"
          className="ml-2 flex h-2/3 items-center justify-center rounded-xl bg-base-100 p-2 text-xl text-primary shadow-2xl lg:text-3xl"
        >
          The Dev Blog
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
