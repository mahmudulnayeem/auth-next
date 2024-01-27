"use server";
import { revalidatePath } from "next/cache";

export const invalidPath = (pathName: string) => {
  revalidatePath(pathName);
};
