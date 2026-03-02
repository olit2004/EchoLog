
import {hash, compare} from "bcrypt"
import jwt, { JwtPayload } from 'jsonwebtoken';
import { Prisma, User } from "../generated/prisma/client"
import prisma from "./prisma";
import { cookies } from "next/headers";





export interface SessionPayload {
  userId: string;
  role?: 'user' | 'admin';
}

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}


//handler to check the password is right 

export function  verifyPassword (password:string,hashedPassword:string){
    return compare(password,hashedPassword)
}

export function generateTokens(payload: SessionPayload): Tokens {
            
        const accessToken = jwt.sign(payload, process.env.JWT_SECRET!, {
            expiresIn: '15m',
        });
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET!, {
            expiresIn: '7d',
        });
        return { accessToken, refreshToken };
}

export function verifyAccessToken(token: string): SessionPayload | null {
  try {
    return jwt.verify(token, process.env.JWT_SECRET!) as SessionPayload;
  } catch {
    return null;
  }
}

export function verifyRefreshToken(token: string): SessionPayload | null {
  try {
    return jwt.verify(token, process.env.JWT_REFRESH_SECRET!) as SessionPayload;
  } catch {
    return null;
  }
}

// Define a clear interface for the arguments
interface CreateUserArgs {
  email: string;
  password: string;
  name?: string;   // optional, matches your Prisma schema
  image?: string;
  avatar?: string;
}


export async function createUser(
  args: CreateUserArgs
): Promise<User> {
  console.log("the user is being created *******************");

  const hashedPassword = await hash(args.password, 12);

  try {
    const user = await prisma.user.create({
      data: {
        email: args.email,
        password: hashedPassword,
        name: args.name,
        image: args.image,
        avatar: args.avatar,
      },
    });

    console.log("the user in the creating function", user);
    return user;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}


// get session function takes the access token n  from the incoming request and verifes the access token decode it and return the pay load 

export async function getSession(){

  const cookieStore= await cookies();
  const token= cookieStore.get("access_token")?.value
  if (!token) return null
  return verifyAccessToken(token);
}