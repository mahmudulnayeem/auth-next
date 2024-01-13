"use client";

import { signOut } from "next-auth/react";

interface LogOutButtonProps {
  children?: React.ReactNode;
}
const LogOutButton = ({ children }: LogOutButtonProps) => {
  const onClick = () => {
    signOut();
  };
  return (
    <span className="cursor-pointer" onClick={onClick}>
      {children}
    </span>
  );
};

export default LogOutButton;
