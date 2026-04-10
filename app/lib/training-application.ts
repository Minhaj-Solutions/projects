import { z } from "zod";
import { TRAINING_COURSE_TITLE } from "@/data/training-program";

/** Must match `TRAINING_PROJECT_OPTIONS` ids in data/training-program.ts */
const PROJECT_IDS = [
  "resume_screening",
  "image_recognition",
  "rag_chatbot",
  "autonomous_agent",
  "computer_vision",
  "generative_ai",
] as const;

const projectIdSchema = z.enum(PROJECT_IDS);

export const PK_CNIC_REGEX = /^(\d{5}-\d{7}-\d{1}|\d{13})$/;
export const PK_PHONE_REGEX = /^(\+92|0)?3\d{2}[-\s]?\d{7}$/;

/** Plain object schema — safe to `.pick()` for step validation (Zod 4). */
export const trainingApplicationFieldsSchema = z.object({
  fullName: z.string().trim().min(2, "Full name is required"),
  fatherName: z.string().trim().min(2, "Father / guardian name is required"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  gender: z.enum(["male", "female"], { message: "Select gender" }),
  cnic: z
    .string()
    .trim()
    .regex(PK_CNIC_REGEX, "Use format XXXXX-XXXXXXX-X or 13 digits"),
  phone: z
    .string()
    .trim()
    .regex(
      PK_PHONE_REGEX,
      "Enter a valid Pakistani mobile (e.g. 03XX-XXXXXXX)",
    ),
  email: z.string().trim().email("Enter a valid email"),
  city: z.string().trim().min(1, "City is required"),
  address: z.string().trim().min(5, "Address is required"),

  qualification: z.enum(
    ["matric", "intermediate", "bachelor", "master", "other"],
    { message: "Select last qualification" },
  ),
  qualificationOther: z.string().optional(),
  fieldOfStudy: z.string().trim().min(1, "Field of study is required"),
  institute: z.string().trim().min(1, "Institute / university is required"),
  passingYear: z
    .string()
    .trim()
    .regex(/^\d{4}$/, "Enter a 4-digit year"),
  computerLevel: z.enum(["beginner", "intermediate", "advanced"], {
    message: "Select computer knowledge level",
  }),

  courseTitle: z.string().default(TRAINING_COURSE_TITLE),
  preferredTiming: z
    .array(z.enum(["morning", "evening", "weekend"]))
    .min(1, "Select at least one preferred timing"),
  mode: z.enum(["physical", "online"], { message: "Select mode" }),

  knowsPython: z.enum(["yes", "no"]),
  knowsProgramming: z.enum(["yes", "no"]),
  hasLaptop: z.enum(["yes", "no"]),
  hasInternet: z.enum(["yes", "no"]),
  whyJoin: z
    .string()
    .trim()
    .min(20, "Please write at least 20 characters"),

  projects: z
    .array(projectIdSchema)
    .min(1, "Select at least one project interest"),

  confirmInfo: z.boolean().refine((v) => v, {
    message: "You must confirm your information is correct",
  }),
  confirmRules: z.boolean().refine((v) => v, {
    message: "You must agree to course rules and discipline",
  }),
  typedSignature: z.string().trim().min(2, "Type your full name to sign"),
});

export const trainingApplicationSchema = trainingApplicationFieldsSchema.superRefine(
  (data, ctx) => {
    if (data.qualification === "other" && !data.qualificationOther?.trim()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["qualificationOther"],
        message: "Specify your qualification",
      });
    }
    const sig = data.typedSignature.trim().toLowerCase();
    const name = data.fullName.trim().toLowerCase();
    if (sig !== name) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["typedSignature"],
        message: "Must match your full name exactly",
      });
    }
  },
);

export type TrainingApplicationInput = z.infer<typeof trainingApplicationSchema>;

export const step1Schema = trainingApplicationFieldsSchema.pick({
  fullName: true,
  fatherName: true,
  dateOfBirth: true,
  gender: true,
  cnic: true,
  phone: true,
  email: true,
  city: true,
  address: true,
});

export const step2Schema = trainingApplicationFieldsSchema
  .pick({
    qualification: true,
    qualificationOther: true,
    fieldOfStudy: true,
    institute: true,
    passingYear: true,
    computerLevel: true,
  })
  .superRefine((data, ctx) => {
    if (data.qualification === "other" && !data.qualificationOther?.trim()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["qualificationOther"],
        message: "Specify your qualification",
      });
    }
  });

export const step3Schema = trainingApplicationFieldsSchema.pick({
  courseTitle: true,
  preferredTiming: true,
  mode: true,
  knowsPython: true,
  knowsProgramming: true,
  hasLaptop: true,
  hasInternet: true,
  whyJoin: true,
});

export function getInitialTrainingForm(): TrainingApplicationInput {
  return {
    fullName: "",
    fatherName: "",
    dateOfBirth: "",
    gender: "male",
    cnic: "",
    phone: "",
    email: "",
    city: "",
    address: "",
    qualification: "matric",
    qualificationOther: "",
    fieldOfStudy: "",
    institute: "",
    passingYear: "",
    computerLevel: "beginner",
    courseTitle: TRAINING_COURSE_TITLE,
    preferredTiming: [],
    mode: "physical",
    knowsPython: "no",
    knowsProgramming: "no",
    hasLaptop: "no",
    hasInternet: "no",
    whyJoin: "",
    projects: [],
    confirmInfo: false,
    confirmRules: false,
    typedSignature: "",
  };
}
