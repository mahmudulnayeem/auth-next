"use server";

import { getUserByEmail } from "@/data/user";
import { getVerificationTokenByToken } from "@/data/verification-token";
import { db } from "@/lib/db";

export const newVerification = async (token: string) => {
  const existingToken = await getVerificationTokenByToken(token);
  if (!existingToken) {
    return {
      error: "Token Does not exist!",
    };
  }
  if (new Date(existingToken.expires) < new Date()) {
    return {
      error: "Token has expired!",
    };
  }

  const user = await getUserByEmail(existingToken.email);
  if (!user) {
    return {
      error: "Email does not exist!",
    };
  }

  await db.user.update({
    where: {
      id: user.id,
    },
    data: {
      emailVerified: new Date(),
      email: existingToken.email,
    },
  });
  await db.verificationToken.delete({
    where: {
      id: existingToken.id,
    },
  });
  return {
    success: "Email verified!",
  };
};
