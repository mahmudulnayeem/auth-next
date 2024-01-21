import { type DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  role: "ADMIN" | "USER" | "DOCTOR" | "PATHOLOGY";
  id: string;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
