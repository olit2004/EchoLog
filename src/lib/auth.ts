
import {hash, compare} from "bcrypt"
import jwt, { JwtPayload } from 'jsonwebtoken';
import { Prisma, User } from "../generated/prisma/client"
import prisma from "./prisma";





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

export async function createUser(
  data: Prisma.UserCreateInput
): Promise<User> {
  const hashedPassword = await hash(data.password, 12)

  const user = await prisma.user.create({
    data: {
      ...data,
      password: hashedPassword,
    },
  })

  return user
}