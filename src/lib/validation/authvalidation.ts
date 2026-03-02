import { z } from "zod";
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