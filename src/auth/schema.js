import * as z from "zod";

// Phone RegExp
const validPhone = /^(?:\+251|0)9\d{8}$/;

// Password schema
const passwordSchema = z
    .string()
    .min(1, "Password is requried!")
    .min(6, "Password must be at leat 6 characters!");

// Login with phone
export const phoneLoginSchema = z.object({
    phone: z
        .string()
        .min(1, "Phone is requried!")
        .regex(validPhone, "Invalid phone! Use 09.. or +2519..."),
    password: passwordSchema,
});

// Login with email
export const emailLoginSchema = z.object({
    email: z
        .string()
        .min(1, "Email is requried!")
        .email("Please enter a valid email address!"),
    password: passwordSchema,
});