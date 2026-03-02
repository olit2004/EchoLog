'use server'


import { PassThrough } from "stream";
import { z } from "zod";
import { getUserByEmail } from "@/lib/dal/User";
import { verifyPassword } from "@/lib/auth";
import { cookies } from "next/headers";
import { generateTokens, type SessionPayload} from "@/lib/auth";
import {createUser} from "@/lib/auth"



import {registerSchema, loginSchema, type loginData ,type registerData ,type ActionResponse} from "@/lib/validation/authvalidation"

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
    
    console.log(" the login actions started running now" )
    const data= {
      email: formData.get('email') as string,
      password :formData.get('password') as string
    }
   console.log(data)
    //validate the incoming data 
    const validatedData = loginSchema.safeParse(data);
    if (!validatedData.success){
    console.log("input data is invalid")

      return {
         success: false,
        message: "validation failed",
        errors: validatedData.error.flatten().fieldErrors

      }
    }
    console.log("input data is valid")
    // get the user 
    const user= await getUserByEmail(data.email)
    console.log("the user is the user",user)
    if (!user) {
    console.log("user found")

      return {
        success: false,
        message: 'Invalid email or password',
        errors: {
          email: ['Invalid email or password'],
        },
      }
    }
    console.log("user found")
    console.log(user)

    // verify password 
    const isValid= await verifyPassword(data.password,user.password)
    if (!isValid) {
      console.log("password isnot correct")
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
    console.log("loged in success fullty")
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
  console.log("start running the code ")
  
  
  try{

    console.log(formData)

    const data= {
      email: formData.get('email') as string,
      confirmPassword:formData.get('confirmPassword') as string,
      password :formData.get('password') as string,
      name: formData.get("fullName") as string,

    }

    console.log(data,"is data")
    

    //validate the incoming data 
    const validatedData = registerSchema.safeParse(data);
    if (!validatedData.success){
    
      console.log("the data is not validated ",validatedData)
   
      return {
         success: false,
        message: "validation failed",
        errors: validatedData.error.flatten().fieldErrors

      }
    }
    
    // get the user 
    const existingUser= await getUserByEmail(data.email)
    if (existingUser) {
      console.log("the user already exists", existingUser)
      return {
        success: false,
        message: 'TRY ANOTHER EMAIL',
        errors: {
          email: ["try another email"],
        },
      }}
    
const { confirmPassword, ...userData } = data;
const user = await createUser(userData);

    console.log("the user is ",user )

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




    

// 98Olit21!