/** AI Automation & Generative AI Training Program — static copy and links */

export const TRAINING_COURSE_TITLE =
  "AI Automation & Generative AI Training Program";

/** Shown on flyers, course page, and application flow */
export const TRAINING_YEAR_BADGE = "2026";

export const TRAINING_START_LABEL = "20 April 2026";

export const TRAINING_INTRO = `Minhaj Solutions bridges the gap between learning and industry. Our AI & automation training combines real projects, expert guidance, and career focused skills, so you're job ready from day one.`;

export const TRAINING_MODULES = [
  "Python Foundations for AI Automation",
  "Data preprocessing & Machine learning",
  "Generative AI & LLM Application Development",
  "RAG Systems & Knowledge-Based AI",
  "Agentic AI & Autonomous Automation Systems",
] as const;

/** Flyer “Hands-On Projects” tiles */
export const TRAINING_HANDS_ON_PROJECTS = [
  "AI Chatbot",
  "Resume Screening",
  "Image Recognition",
  "Business Automation",
] as const;

export const TRAINING_WHY_US = [
  "Hands-on Projects",
  "Expert Mentorship",
  "Industry Training",
] as const;

export const TRAINING_CONTACT_EMAIL = "info@minhajsolutions.com";

/** Course marketing / flyer phone lines */
export const TRAINING_PHONE_UK_HREF = "tel:+447400719523";
export const TRAINING_PHONE_UK_DISPLAY = "+44 7400 719523";
export const TRAINING_PHONE_PK_HREF = "tel:+923256956764";
export const TRAINING_PHONE_PK_DISPLAY = "+92 325 6956764";

export const TRAINING_VENUE = "Riaz Town, Renala Khurd";

export const TRAINING_WHATSAPP_DISPLAY = TRAINING_PHONE_PK_DISPLAY;

/** WhatsApp — same number as PK line on course materials */
export const TRAINING_WHATSAPP_URL = "https://wa.me/923256956764";

/**
 * Prospectus PDF URL (optional). If unset, the UI falls back to email request.
 * Set in env: NEXT_PUBLIC_TRAINING_PROSPECTUS_URL=/files/prospectus.pdf
 */
export const TRAINING_PROSPECTUS_URL =
  process.env.NEXT_PUBLIC_TRAINING_PROSPECTUS_URL ?? "";

export const TRAINING_PROJECT_OPTIONS = [
  { id: "resume_screening", label: "Resume Screening System" },
  { id: "image_recognition", label: "Image Recognition System" },
  { id: "rag_chatbot", label: "RAG Chatbot" },
  { id: "autonomous_agent", label: "Autonomous AI Agent" },
  { id: "computer_vision", label: "Computer Vision Project" },
  { id: "generative_ai", label: "Generative AI Project" },
] as const;

export type TrainingProjectId = (typeof TRAINING_PROJECT_OPTIONS)[number]["id"];
