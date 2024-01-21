"use client";

import UserButton from "./auth/user-btn";

export const NavbarRoutes = () => {
  return (
    <>
      <div className="flex gap-x-2 ml-auto">
        <UserButton />
      </div>
    </>
  );
};
