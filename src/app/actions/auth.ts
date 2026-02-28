'use server'


import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().optional(),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});


export type loginData = z.infer<typeof loginSchema>
export type registerData = z.infer<typeof registerSchema>


export type ActionResponse = {
  success: boolean
  message: string
  errors?: Record<string, string[]>
  error?: string
}



export async function Login (){
    
}