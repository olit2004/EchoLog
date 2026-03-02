'use server'


import { PassThrough } from "stream";
import { z } from "zod";
import { getUserByEmail } from "@/lib/dal/User";
import { verifyPassword } from "@/lib/auth";
import { cookies } from "next/headers";
import { generateTokens, type SessionPayload} from "@/lib/auth";
import {createUser} from "@/lib/auth"



export const registerSchema = z
  .object({
    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email format")
      .trim()
      .toLowerCase(),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(100, "Password too long")
      .regex(/[A-Z]/, "Must include at least one uppercase letter")
      .regex(/[a-z]/, "Must include at least one lowercase letter")
      .regex(/[0-9]/, "Must include at least one number"),

    confirmPassword: z
      .string()
      .min(1, "Please confirm your password"),

    name: z
      .string()
      .min(2, "Name too short")
      .max(50, "Name too long")
      .optional(),

    avatar: z
      .string()
      .url("Avatar must be a valid URL")
      .optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })


export const loginSchema = z.object({
      email: z.string().min(1, 'Email is required').email('Invalid email format'),
      password: z.string().min(1,'password is required '),
});


export type loginData = z.infer<typeof loginSchema>
export type registerData = z.infer<typeof registerSchema>


export type ActionResponse = {
  success: boolean
  message: string
  errors?: Record<string, string[]>
  error?: string
}


export async  function createSession(payload:SessionPayload) {

        const {accessToken,refreshToken}=generateTokens(payload);

        const cookieStore = await cookies()
        cookieStore.set('access_token', accessToken, {
                                                    httpOnly: true,
                                                    secure: process.env.NODE_ENV === 'production',
                                                    path: '/',
                                                    maxAge: 60 * 15,
});
      
        cookieStore.set('refresh_token', refreshToken, {
                                                          httpOnly: true,
                                                          secure: process.env.NODE_ENV === 'production',
                                                          path: '/',
                                                          maxAge: 60 * 60 * 24 * 7,
});
                                          
}


export async function Login (formData:FormData):Promise<ActionResponse>{
  try{

    const data= {
      email: formData.get('email') as string,
      password :formData.get('password') as string
    }

    //validate the incoming data 
    const validatedData = loginSchema.safeParse(data);
    if (!validatedData.success){
      return {
         success: false,
        message: "validation failed",
        errors: validatedData.error.flatten().fieldErrors

      }
    }
    // get the user 
    const user= await getUserByEmail(data.email)
    if (!user) 
      return {
        success: false,
        message: 'Invalid email or password',
        errors: {
          email: ['Invalid email or password'],
        },
      }
    

    // verify password 
    const isValid= await verifyPassword(data.password,user.password)
    if (!isValid) {
      return {
        success: false,
        message: 'Invalid email or password',
        errors: {
          password: ['Invalid email or password'],
        },
      }
    }
    // Create session
    await createSession({userId:user.id,role:"user"})

    return {
      success: true,
      message: 'Signed in successfully',
    }
  }

  catch (error) {
    console.error('Sign in error:', error)
    return {
      success: false,
      message: 'An error occurred while signing in',
      error: 'Failed to sign in',
    }
  }
}

export async function Register (formData:FormData):Promise<ActionResponse>{
  
  
  try{

    const data= {
      email: formData.get('email') as string,
      confirmPassword:formData.get('confirmPassword') as string,
      password :formData.get('password') as string,
      name: formData.get("name") as string,
      avatar: formData.get("avatar") as string
      
    }

    //validate the incoming data 
    const validatedData = registerSchema.safeParse(data);
    if (!validatedData.success){
      return {
         success: false,
        message: "validation failed",
        errors: validatedData.error.flatten().fieldErrors

      }
    }
    // get the user 
    const existingUser= await getUserByEmail(data.email)
    if (existingUser) 
      return {
        success: false,
        message: 'TRY ANOTHER EMAIL',
        errors: {
          email: ["try another email"],
        },
      }
    
    const user = await createUser(data);


   if (!user) {
      return {
        success: false,
        message: 'Failed to create user',
        error: 'Failed to create user',
      }
    }

    // Create session for the newly registered user
    await createSession({userId:user.id,role:"user"})

    return {
      success: true,
      message: 'Account created successfully',
    }
  } catch (error) {
    console.error('Sign up error:', error)
    return {
      success: false,
      message: 'An error occurred while creating your account',
      error: 'Failed to create account',
    }
  }
}




    
