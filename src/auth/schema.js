import * as z from "zod";

// Phone RegExp
const validPhone = /^(?:\+251|0)9\d{8}$/;

// ============ Common Schemas ============ //
// Phone schema
const phoneSchema = z
    .string()
    .min(1, "Phone is requried!")
    .regex(validPhone, "Invalid phone! Use 09.. or +2519... followed by 8 digits");

// Email schema
const emailSchema = z
    .string()
    .min(1, "Email is requried!")
    .email("Please enter a valid email address!");

// Password schema
const passwordSchema = z
    .string()
    .min(1, "Password is requried!")
    .min(6, "Password must be at leat 6 characters!");

// ============ Login with phone ============ //
export const phoneLoginSchema = z.object({
    phone: phoneSchema,
    password: passwordSchema,
});

// ============ Login with email ============ //
export const emailLoginSchema = z.object({
    email: emailSchema,
    password: passwordSchema,
});

// ============ Registeration schema ============ //
export const registerSchema = z.object({
    name: z
        .string()
        .min(1, "Name is required")
        .min(3, "Name must be at least 3 characters"),
    phone: phoneSchema,
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: z
        .string()
        .min(1, "Confirm your password")

}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
})