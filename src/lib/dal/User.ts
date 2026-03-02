import prisma from "../prisma";
import {cache} from "react"



export const getUserByEmail = cache(async (email: string) => {
  console.log("this is running")
  if (!email) {
    throw new Error("Email is required");
  }
  const user = await prisma.user.findUnique({
    where: { email },
  });

  console.log("the user is ",user)

  if (!user) {
    throw new Error("User not found");
  }

  return user;
})