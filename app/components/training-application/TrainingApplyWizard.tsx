"use client";

import { Button } from "@/app/components/ui/Button";
import {
  ScrollAnimation,
} from "@/app/components/ui/ScrollAnimation";
import {
  getInitialTrainingForm,
  step1Schema,
  step2Schema,
  step3Schema,
  trainingApplicationSchema,
  type TrainingApplicationInput,
} from "@/app/lib/training-application";
import {
  TRAINING_COURSE_TITLE,
  TRAINING_PROJECT_OPTIONS,
  TRAINING_PROSPECTUS_URL,
  TRAINING_START_LABEL,
  TRAINING_VENUE,
  TRAINING_WHATSAPP_DISPLAY,
  TRAINING_WHATSAPP_URL,
  type TrainingProjectId,
} from "@/data/training-program";
import {
  AlertCircle,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Download,
  MessageCircle,
  Send,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import type { ZodError } from "zod";

const QUAL_LABELS: Record<string, string> = {
  matric: "Matric",
  intermediate: "Intermediate",
  bachelor: "Bachelor",
  master: "Master",
  other: "Other",
};

const STEPS = [
  { title: "Personal", subtitle: "Your details" },
  { title: "Education", subtitle: "Background" },
  { title: "Course & skills", subtitle: "Timing and experience" },
  { title: "Projects & submit", subtitle: "Documents and review" },
];

const inputBase =
  "w-full min-w-0 px-4 py-2.5 border rounded-lg text-base sm:text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all max-[425px]:px-3 max-[425px]:py-2";

function inputClass(err?: string) {
  return `${inputBase} ${
    err
      ? "border-error focus:ring-error focus:border-error"
      : "border-gray-300"
  }`;
}

function zodToRecord(err: ZodError): Record<string, string> {
  const out: Record<string, string> = {};
  for (const issue of err.issues) {
    const key = String(issue.path[0] ?? "form");
    if (!out[key]) {
      out[key] = issue.message;
    }
  }
  return out;
}

export function TrainingApplyWizard() {
  const router = useRouter();
  const [form, setForm] = useState<TrainingApplicationInput>(() =>
    getInitialTrainingForm(),
  );
  const [files, setFiles] = useState<{
    uploadCv?: File;
    uploadCnic?: File;
    uploadDegree?: File;
  }>({});
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const update = useCallback(
    <K extends keyof TrainingApplicationInput>(
      key: K,
      value: TrainingApplicationInput[K],
    ) => {
      setForm((prev) => ({ ...prev, [key]: value }));
      setErrors((e) => {
        const next = { ...e };
        delete next[String(key)];
        return next;
      });
    },
    [],
  );

  const toggleTiming = (t: "morning" | "evening" | "weekend") => {
    setForm((prev) => {
      const has = prev.preferredTiming.includes(t);
      const preferredTiming = has
        ? prev.preferredTiming.filter((x) => x !== t)
        : [...prev.preferredTiming, t];
      return { ...prev, preferredTiming };
    });
    setErrors((e) => {
      const next = { ...e };
      delete next.preferredTiming;
      return next;
    });
  };

  const toggleProject = (id: TrainingProjectId) => {
    setForm((prev): TrainingApplicationInput => {
      const has = prev.projects.includes(id);
      const projects = (
        has
          ? prev.projects.filter((x) => x !== id)
          : [...prev.projects, id]
      ) as TrainingApplicationInput["projects"];
      return { ...prev, projects };
    });
    setErrors((e) => {
      const next = { ...e };
      delete next.projects;
      return next;
    });
  };

  const validateCurrent = (): boolean => {
    if (step === 0) {
      const r = step1Schema.safeParse(form);
      if (!r.success) {
        setErrors(zodToRecord(r.error));
        return false;
      }
    } else if (step === 1) {
      const r = step2Schema.safeParse(form);
      if (!r.success) {
        setErrors(zodToRecord(r.error));
        return false;
      }
    } else if (step === 2) {
      const r = step3Schema.safeParse(form);
      if (!r.success) {
        setErrors(zodToRecord(r.error));
        return false;
      }
    }
    setErrors({});
    return true;
  };

  const next = () => {
    if (!validateCurrent()) return;
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };

  const back = () => {
    setSubmitError(null);
    setStep((s) => Math.max(s - 1, 0));
  };

  const submit = async () => {
    setSubmitError(null);
    const r = trainingApplicationSchema.safeParse(form);
    if (!r.success) {
      setErrors(zodToRecord(r.error));
      return;
    }

    setSubmitting(true);
    try {
      const fd = new FormData();
      const d = r.data;
      const entries: [string, string][] = [
        ["fullName", d.fullName],
        ["fatherName", d.fatherName],
        ["dateOfBirth", d.dateOfBirth],
        ["gender", d.gender],
        ["cnic", d.cnic],
        ["phone", d.phone],
        ["email", d.email],
        ["city", d.city],
        ["address", d.address],
        ["qualification", d.qualification],
        ["qualificationOther", d.qualificationOther ?? ""],
        ["fieldOfStudy", d.fieldOfStudy],
        ["institute", d.institute],
        ["passingYear", d.passingYear],
        ["computerLevel", d.computerLevel],
        ["courseTitle", d.courseTitle],
        ["mode", d.mode],
        ["knowsPython", d.knowsPython],
        ["knowsProgramming", d.knowsProgramming],
        ["hasLaptop", d.hasLaptop],
        ["hasInternet", d.hasInternet],
        ["whyJoin", d.whyJoin],
        ["typedSignature", d.typedSignature],
      ];
      for (const [k, v] of entries) {
        fd.append(k, v);
      }
      d.preferredTiming.forEach((t) => fd.append("preferredTiming", t));
      d.projects.forEach((p) => fd.append("projects", p));
      fd.append("confirmInfo", d.confirmInfo ? "true" : "false");
      fd.append("confirmRules", d.confirmRules ? "true" : "false");
      fd.append("website", "");

      if (files.uploadCv) {
        fd.append("uploadCv", files.uploadCv);
      }
      if (files.uploadCnic) {
        fd.append("uploadCnic", files.uploadCnic);
      }
      if (files.uploadDegree) {
        fd.append("uploadDegree", files.uploadDegree);
      }

      const res = await fetch("/api/training-application", {
        method: "POST",
        body: fd,
      });
      const json = (await res.json()) as { ok?: boolean; message?: string };
      if (!res.ok || !json.ok) {
        setSubmitError(
          json.message ??
            "Something went wrong. Please try again or contact us.",
        );
        return;
      }
      setDone(true);
    } catch {
      setSubmitError(
        "Network error. Check your connection and try again, or contact us by phone.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 md:p-8 text-center py-12 max-w-full min-w-0">
        <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-success" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Application received
        </h2>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          Thank you. We have emailed your application to our team. We will
          contact you soon at the email address you provided.
        </p>
        <Button variant="outline" onClick={() => router.push("/")}>
          Back to home
        </Button>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 w-full min-w-0 max-w-full">
      <ScrollAnimation
        direction="right"
        className="lg:col-span-4 order-2 lg:order-1 min-w-0"
      >
        <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-5 sm:p-8 text-white shadow-xl">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Program details
          </h2>
          <ul className="space-y-4 text-sm text-white/95 break-words">
            <li>
              <span className="font-semibold text-white">Course: </span>
              {TRAINING_COURSE_TITLE}
            </li>
            <li>
              <span className="font-semibold text-white">Starts: </span>
              {TRAINING_START_LABEL}
            </li>
            <li>
              <span className="font-semibold text-white">Location: </span>
              {TRAINING_VENUE}
            </li>
          </ul>
          <div className="mt-8 pt-8 border-t border-white/20 flex flex-col gap-3">
            <a
              href={TRAINING_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-3 text-sm font-semibold text-white hover:bg-[#20bd5a] transition-colors touch-manipulation text-center"
            >
              <MessageCircle className="w-5 h-5 shrink-0" />
              <span className="break-all sm:break-normal">
                WhatsApp {TRAINING_WHATSAPP_DISPLAY}
              </span>
            </a>
            {TRAINING_PROSPECTUS_URL ? (
              <a
                href={TRAINING_PROSPECTUS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/40 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                <Download className="w-5 h-5" />
                Download prospectus
              </a>
            ) : (
              <a
                href="mailto:info@minhajsolutions.com?subject=Prospectus%20request%20%E2%80%94%20AI%20Training"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/40 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                <Download className="w-5 h-5" />
                Request prospectus by email
              </a>
            )}
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation
        direction="left"
        className="lg:col-span-8 order-1 lg:order-2 min-w-0"
      >
        <div className="relative bg-white rounded-2xl border border-gray-200 shadow-lg p-4 sm:p-6 md:p-8 min-w-0">
          <div className="mb-6 sm:mb-8">
            <div
              className="flex gap-2 mb-6 overflow-x-auto pb-1 -mx-1 px-1 sm:flex-wrap sm:overflow-visible [scrollbar-width:thin]"
              aria-label="Form steps"
            >
              {STEPS.map((s, i) => (
                <div
                  key={s.title}
                  className={`flex shrink-0 items-center gap-1.5 sm:gap-2 rounded-full px-2.5 sm:px-3 py-1.5 text-[10px] sm:text-xs font-medium ${
                    i === step
                      ? "bg-primary text-white"
                      : i < step
                        ? "bg-primary-light text-primary"
                        : "bg-gray-100 text-gray-500"
                  }`}
                >
                  <span className="tabular-nums">{i + 1}</span>
                  <span className="whitespace-nowrap sm:whitespace-normal">
                    {s.title}
                  </span>
                </div>
              ))}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 break-words">
              {STEPS[step].title}
            </h2>
            <p className="text-gray-600 text-sm">{STEPS[step].subtitle}</p>
          </div>

          {/* Honeypot */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="absolute opacity-0 pointer-events-none h-0 w-0"
            aria-hidden
          />

          {step === 0 && (
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Full name <span className="text-error">*</span>
                  </label>
                  <input
                    className={inputClass(errors.fullName)}
                    value={form.fullName}
                    onChange={(e) => update("fullName", e.target.value)}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-error flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.fullName}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Father / guardian name <span className="text-error">*</span>
                  </label>
                  <input
                    className={inputClass(errors.fatherName)}
                    value={form.fatherName}
                    onChange={(e) => update("fatherName", e.target.value)}
                  />
                  {errors.fatherName && (
                    <p className="mt-1 text-xs text-error flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.fatherName}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Date of birth <span className="text-error">*</span>
                  </label>
                  <input
                    type="date"
                    className={inputClass(errors.dateOfBirth)}
                    value={form.dateOfBirth}
                    onChange={(e) => update("dateOfBirth", e.target.value)}
                  />
                  {errors.dateOfBirth && (
                    <p className="mt-1 text-xs text-error flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.dateOfBirth}
                    </p>
                  )}
                </div>
                <div>
                  <span className="block text-sm font-medium text-gray-700 mb-1.5">
                    Gender <span className="text-error">*</span>
                  </span>
                  <div className="flex gap-4 pt-2">
                    {(["male", "female"] as const).map((g) => (
                      <label key={g} className="inline-flex items-center gap-2">
                        <input
                          type="radio"
                          name="gender"
                          checked={form.gender === g}
                          onChange={() => update("gender", g)}
                          className="text-primary focus:ring-primary"
                        />
                        <span className="text-sm capitalize">{g}</span>
                      </label>
                    ))}
                  </div>
                  {errors.gender && (
                    <p className="mt-1 text-xs text-error flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.gender}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  CNIC / B-Form <span className="text-error">*</span>
                </label>
                <input
                  className={inputClass(errors.cnic)}
                  placeholder="XXXXX-XXXXXXX-X"
                  value={form.cnic}
                  onChange={(e) => update("cnic", e.target.value)}
                />
                {errors.cnic && (
                  <p className="mt-1 text-xs text-error flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.cnic}
                  </p>
                )}
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Phone (WhatsApp) <span className="text-error">*</span>
                  </label>
                  <input
                    className={inputClass(errors.phone)}
                    placeholder="03XX-XXXXXXX"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-error flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.phone}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email <span className="text-error">*</span>
                  </label>
                  <input
                    type="email"
                    className={inputClass(errors.email)}
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-error flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    City <span className="text-error">*</span>
                  </label>
                  <input
                    className={inputClass(errors.city)}
                    value={form.city}
                    onChange={(e) => update("city", e.target.value)}
                  />
                  {errors.city && (
                    <p className="mt-1 text-xs text-error flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.city}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Address <span className="text-error">*</span>
                </label>
                <textarea
                  rows={3}
                  className={inputClass(errors.address)}
                  value={form.address}
                  onChange={(e) => update("address", e.target.value)}
                />
                {errors.address && (
                  <p className="mt-1 text-xs text-error flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.address}
                  </p>
                )}
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-4">
              <div>
                <span className="block text-sm font-medium text-gray-700 mb-2">
                  Last qualification <span className="text-error">*</span>
                </span>
                <div className="grid sm:grid-cols-2 gap-2">
                  {(
                    [
                      "matric",
                      "intermediate",
                      "bachelor",
                      "master",
                      "other",
                    ] as const
                  ).map((q) => (
                    <label
                      key={q}
                      className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="qualification"
                        checked={form.qualification === q}
                        onChange={() => update("qualification", q)}
                        className="text-primary"
                      />
                      <span>{QUAL_LABELS[q]}</span>
                    </label>
                  ))}
                </div>
                {errors.qualification && (
                  <p className="mt-1 text-xs text-error flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.qualification}
                  </p>
                )}
              </div>
              {form.qualification === "other" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Specify qualification <span className="text-error">*</span>
                  </label>
                  <input
                    className={inputClass(errors.qualificationOther)}
                    value={form.qualificationOther ?? ""}
                    onChange={(e) =>
                      update("qualificationOther", e.target.value)
                    }
                  />
                  {errors.qualificationOther && (
                    <p className="mt-1 text-xs text-error flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.qualificationOther}
                    </p>
                  )}
                </div>
              )}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Field of study <span className="text-error">*</span>
                  </label>
                  <input
                    className={inputClass(errors.fieldOfStudy)}
                    value={form.fieldOfStudy}
                    onChange={(e) => update("fieldOfStudy", e.target.value)}
                  />
                  {errors.fieldOfStudy && (
                    <p className="mt-1 text-xs text-error flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.fieldOfStudy}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Institute / university <span className="text-error">*</span>
                  </label>
                  <input
                    className={inputClass(errors.institute)}
                    value={form.institute}
                    onChange={(e) => update("institute", e.target.value)}
                  />
                  {errors.institute && (
                    <p className="mt-1 text-xs text-error flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.institute}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Passing year <span className="text-error">*</span>
                  </label>
                  <input
                    className={inputClass(errors.passingYear)}
                    placeholder="YYYY"
                    value={form.passingYear}
                    onChange={(e) => update("passingYear", e.target.value)}
                  />
                  {errors.passingYear && (
                    <p className="mt-1 text-xs text-error flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.passingYear}
                    </p>
                  )}
                </div>
                <div>
                  <span className="block text-sm font-medium text-gray-700 mb-2">
                    Computer knowledge <span className="text-error">*</span>
                  </span>
                  <div className="flex flex-wrap gap-3">
                    {(["beginner", "intermediate", "advanced"] as const).map(
                      (lvl) => (
                        <label
                          key={lvl}
                          className="inline-flex items-center gap-2"
                        >
                          <input
                            type="radio"
                            name="computerLevel"
                            checked={form.computerLevel === lvl}
                            onChange={() => update("computerLevel", lvl)}
                            className="text-primary"
                          />
                          <span className="text-sm capitalize">{lvl}</span>
                        </label>
                      ),
                    )}
                  </div>
                  {errors.computerLevel && (
                    <p className="mt-1 text-xs text-error flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.computerLevel}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="rounded-lg bg-primary-light/80 border border-primary/10 px-4 py-3 text-sm text-gray-800">
                <strong className="text-primary">Course:</strong>{" "}
                {TRAINING_COURSE_TITLE}
              </div>
              <div>
                <span className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred timing <span className="text-error">*</span>{" "}
                  <span className="text-gray-500 font-normal">
                    (select all that apply)
                  </span>
                </span>
                <div className="flex flex-wrap gap-3">
                  {(["morning", "evening", "weekend"] as const).map((t) => (
                    <label
                      key={t}
                      className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm cursor-pointer hover:bg-gray-50"
                    >
                      <input
                        type="checkbox"
                        checked={form.preferredTiming.includes(t)}
                        onChange={() => toggleTiming(t)}
                        className="rounded text-primary"
                      />
                      <span className="capitalize">{t}</span>
                    </label>
                  ))}
                </div>
                {errors.preferredTiming && (
                  <p className="mt-1 text-xs text-error flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.preferredTiming}
                  </p>
                )}
              </div>
              <div>
                <span className="block text-sm font-medium text-gray-700 mb-2">
                  Mode <span className="text-error">*</span>
                </span>
                <div className="flex flex-wrap gap-4">
                  <label className="inline-flex items-center gap-2">
                    <input
                      type="radio"
                      name="mode"
                      checked={form.mode === "physical"}
                      onChange={() => update("mode", "physical")}
                    />
                    <span className="text-sm">Physical (on-campus)</span>
                  </label>
                  <label className="inline-flex items-center gap-2">
                    <input
                      type="radio"
                      name="mode"
                      checked={form.mode === "online"}
                      onChange={() => update("mode", "online")}
                    />
                    <span className="text-sm">Online (live classes)</span>
                  </label>
                </div>
                {errors.mode && (
                  <p className="mt-1 text-xs text-error flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.mode}
                  </p>
                )}
              </div>
              <div className="rounded-lg border border-gray-200 p-4 space-y-3">
                <p className="text-sm font-medium text-gray-800">
                  Technical background
                </p>
                {(
                  [
                    ["knowsPython", "Do you know Python?"],
                    ["knowsProgramming", "Do you know programming?"],
                    ["hasLaptop", "Do you have a laptop?"],
                    ["hasInternet", "Internet access?"],
                  ] as const
                ).map(([key, label]) => {
                  const value =
                    key === "knowsPython"
                      ? form.knowsPython
                      : key === "knowsProgramming"
                        ? form.knowsProgramming
                        : key === "hasLaptop"
                          ? form.hasLaptop
                          : form.hasInternet;
                  return (
                    <div
                      key={key}
                      className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                    >
                      <span className="text-sm text-gray-700 min-w-0">{label}</span>
                      <div className="flex gap-6 sm:gap-4 shrink-0">
                        {(["yes", "no"] as const).map((v) => (
                          <label
                            key={v}
                            className="inline-flex items-center gap-1.5 text-sm"
                          >
                            <input
                              type="radio"
                              name={key}
                              checked={value === v}
                              onChange={() => update(key, v)}
                            />
                            {v === "yes" ? "Yes" : "No"}
                          </label>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Why do you want to join this program?{" "}
                  <span className="text-error">*</span>
                </label>
                <textarea
                  rows={4}
                  className={inputClass(errors.whyJoin)}
                  placeholder="At least 20 characters"
                  value={form.whyJoin}
                  onChange={(e) => update("whyJoin", e.target.value)}
                />
                {errors.whyJoin && (
                  <p className="mt-1 text-xs text-error flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.whyJoin}
                  </p>
                )}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div>
                <span className="block text-sm font-medium text-gray-700 mb-2">
                  Project interests <span className="text-error">*</span>{" "}
                  <span className="text-gray-500 font-normal">
                    (select all that apply)
                  </span>
                </span>
                <div className="grid sm:grid-cols-2 gap-2">
                  {TRAINING_PROJECT_OPTIONS.map((p) => (
                    <label
                      key={p.id}
                      className="flex items-start gap-2 rounded-lg border border-gray-200 px-3 py-2.5 text-sm hover:bg-gray-50 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={form.projects.includes(p.id)}
                        onChange={() => toggleProject(p.id)}
                        className="rounded text-primary mt-0.5"
                      />
                      {p.label}
                    </label>
                  ))}
                </div>
                {errors.projects && (
                  <p className="mt-1 text-xs text-error flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.projects}
                  </p>
                )}
              </div>

              <div className="rounded-lg bg-gray-50 border border-gray-200 p-4 space-y-4">
                <p className="text-sm font-medium text-gray-800">
                  Documents (optional)
                </p>
                {(
                  [
                    ["uploadCv", "Upload your CV"],
                    ["uploadCnic", "Upload CNIC (scan)"],
                    ["uploadDegree", "Upload last degree"],
                  ] as const
                ).map(([key, label]) => (
                  <div key={key}>
                    <label className="block text-xs font-medium text-gray-600 mb-1">
                      {label}
                    </label>
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/*"
                      className="block w-full min-w-0 max-w-full text-xs sm:text-sm text-gray-600 file:mr-2 sm:file:mr-3 file:rounded-md file:border-0 file:bg-primary file:px-2.5 sm:file:px-3 file:py-1.5 file:text-xs sm:file:text-sm file:font-medium file:text-white"
                      onChange={(e) => {
                        const f = e.target.files?.[0];
                        setFiles((prev) => ({
                          ...prev,
                          [key]: f ?? undefined,
                        }));
                      }}
                    />
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <label className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    checked={form.confirmInfo}
                    onChange={(e) => update("confirmInfo", e.target.checked)}
                    className="rounded text-primary mt-1"
                  />
                  <span className="text-sm text-gray-700">
                    I confirm that the information provided is correct.{" "}
                    <span className="text-error">*</span>
                  </span>
                </label>
                <label className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    checked={form.confirmRules}
                    onChange={(e) => update("confirmRules", e.target.checked)}
                    className="rounded text-primary mt-1"
                  />
                  <span className="text-sm text-gray-700">
                    I agree to follow the course rules and discipline.{" "}
                    <span className="text-error">*</span>
                  </span>
                </label>
                {(errors.confirmInfo || errors.confirmRules) && (
                  <p className="text-xs text-error flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.confirmInfo || errors.confirmRules}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Electronic signature — type your full name as above{" "}
                  <span className="text-error">*</span>
                </label>
                <input
                  className={inputClass(errors.typedSignature)}
                  placeholder={form.fullName || "Your full name"}
                  value={form.typedSignature}
                  onChange={(e) => update("typedSignature", e.target.value)}
                />
                {errors.typedSignature && (
                  <p className="mt-1 text-xs text-error flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.typedSignature}
                  </p>
                )}
              </div>

              <div className="rounded-lg border border-dashed border-gray-300 bg-gray-50/80 p-4">
                <p className="text-sm font-semibold text-gray-800 mb-2">
                  Review your application
                </p>
                <dl className="grid gap-2 text-xs text-gray-700 sm:grid-cols-2">
                  <div>
                    <dt className="text-gray-500">Name</dt>
                    <dd className="font-medium">{form.fullName || "—"}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Email</dt>
                    <dd className="font-medium break-all">{form.email || "—"}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Phone</dt>
                    <dd className="font-medium">{form.phone || "—"}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Mode</dt>
                    <dd className="font-medium capitalize">{form.mode}</dd>
                  </div>
                </dl>
              </div>

              {submitError && (
                <div className="rounded-lg bg-error/10 border border-error/30 px-4 py-3 text-sm text-error flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  {submitError}
                </div>
              )}
            </div>
          )}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between pt-6 border-t border-gray-100">
            <div className="order-2 sm:order-1 w-full sm:w-auto">
              {step > 0 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={back}
                  className="gap-1 w-full sm:w-auto min-h-[44px] touch-manipulation"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </Button>
              )}
            </div>
            <div className="order-1 sm:order-2 w-full sm:w-auto flex sm:justify-end">
              {step < STEPS.length - 1 ? (
                <Button
                  type="button"
                  onClick={next}
                  className="gap-1 w-full sm:w-auto min-w-[8rem] min-h-[44px] touch-manipulation"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={submit}
                  disabled={submitting}
                  className="gap-2 w-full sm:w-auto min-h-[44px] touch-manipulation"
                >
                  {submitting ? (
                    "Sending…"
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit application
                    </>
                  )}
                </Button>
              )}
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}
