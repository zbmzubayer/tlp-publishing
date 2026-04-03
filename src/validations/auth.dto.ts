import { z } from "zod/v3";

export const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email(),
  password: z.string().min(1, "Password is required"),
});
export type LoginDto = z.infer<typeof loginSchema>;

export const registerSchema = z
  .object({
    firstName: z.string().min(1, "First Name is required"),
    lastName: z.string().optional(),
    email: z.string().min(1, "Email is required").email(),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters"),
    confirm_password: z.string().min(1, "Confirm Password is required"),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });
export type RegisterDto = z.infer<typeof registerSchema>;
