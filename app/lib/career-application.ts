
import { z } from "zod";

export const careerApplicationSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(3, "Full name must be at least 3 characters.")
    .max(100),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(254),

  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .max(20),

  education: z
    .string()
    .trim()
    .min(2, "Please enter your education.")
    .max(150),

  experience: z
    .string()
    .min(1, "Please select your experience."),

  linkedin: z
    .string()
    .trim()
    .max(500)
    .refine(
      (value) => !value || z.url().safeParse(value).success,
      "Please enter a valid LinkedIn URL."
    ),

  portfolio: z
    .string()
    .trim()
    .max(500)
    .refine(
      (value) => !value || z.url().safeParse(value).success,
      "Please enter a valid portfolio URL."
    ),

  coverLetter: z
    .string()
    .trim()
    .min(20, "Cover letter must be at least 20 characters.")
    .max(3000),

  consent: z.boolean().refine(
    (value) => value === true,
    "Please confirm your application information."
  ),
});

export type CareerApplicationInput = z.infer<
  typeof careerApplicationSchema
>;
