import React from "react";
const Nav: React.FC = () => {
  return <nav className="h-[75px] w-full bg-secondary z-20 fixed top-0">
    <div className="flex items-center h-full">
      <section className="bg-base-100 h-2/3 p-2 rounded-xl m-2 flex justify-center items-center shadow-2xl">
        <p className="text-xl lg:text-3xl text-primary">The Dev Blog</p>
      </section>
    </div>
  </nav>;
};

export default Nav;
