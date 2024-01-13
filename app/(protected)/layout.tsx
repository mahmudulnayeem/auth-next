import React from "react";
import NavBar from "./_components/nav-bar";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center gap-y-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <NavBar />
      {children}
    </div>
  );
};

export default ProtectedLayout;
