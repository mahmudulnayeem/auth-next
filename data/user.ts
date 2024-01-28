import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  } catch (error) {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        id,
      },
    });
    return user;
  } catch (error) {
    return null;
  }
};

export const makeAdmin = async (id: string) => {
  try {
    const newAdmin = await db.user.update({
      where: {
        id,
      },
      data: {
        role: "ADMIN",
      },
    });
    return newAdmin;
  } catch (error) {
    return null;
  }
};

export const getAllUserWithOutAdmin = async () => {
  try {
    const allUsers = await db.user.findMany({
      where: {
        role: {
          not: "ADMIN",
        },
      },
    });
    return allUsers;
  } catch (error) {
    return null;
  }
};
