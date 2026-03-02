import prisma from "../prisma";
import {cache} from "react"



export const getUserByEmail = cache(async (email: string) => {
  if (!email) {
    throw new Error("Email is required");
  }
  const user = await prisma.user.findUnique({
    where: { email },

  });

  if (!user) {
    throw new Error("User not found");
  }

  return user;
})