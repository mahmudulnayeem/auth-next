"use client";

import LogOutButton from "@/components/auth/logout-btn";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCurrentUser } from "@/hooks/use-current-user";
import { ExitIcon } from "@radix-ui/react-icons";
import { FaUser } from "react-icons/fa";

const UserButton = () => {
  const user = useCurrentUser();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user?.image || ""} />
          <AvatarFallback className="bg-sky-500">
            <FaUser className="text-white" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="end">
        <LogOutButton>
          <DropdownMenuItem>
            <ExitIcon className="w-4 h-4 mr-2" />
            Log Out
          </DropdownMenuItem>
        </LogOutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
