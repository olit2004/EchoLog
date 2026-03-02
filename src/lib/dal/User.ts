import prisma from "../prisma";
import {cache} from "react"
import { getSession } from "../auth";


export const getCurrentUser = cache(async()=>{

      const session= await getSession()
      if (!session) return null;

      const user = await prisma.user.findUnique({
        where: { id:session.userId },
      });
      return user;
})

export const getUserByEmail = cache(async (email: string) => {
  console.log("this is running")
  if (!email) {
    throw new Error("Email is required");
  }
  const user = await prisma.user.findUnique({
    where: { email },
  });

  console.log("the user is ",user)


  return user;
})

