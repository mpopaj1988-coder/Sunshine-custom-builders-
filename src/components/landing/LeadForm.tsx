import { useState } from "react";
import { useForm } from "react-hook-form";
import { submitLead, type LeadFormData } from "@/lib/leads";
import { track } from "@/lib/analytics";
import { business } from "@/lib/business";

const budgetOptions = ["$10,000–$25,000", "$25,000–$50,000", "$50,000–$100,000", "$100,000+"];
const timeframeOptions = [
  "As soon as possible",
  "1–3 months",
  "3–6 months",
  "6+ months",
  "Just researching",
];

const inputClass =
  "w-full rounded-sm border border-navy/20 bg-white px-4 py-3 text-sm text-navy placeholder:text-navy/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold";
const labelClass = "mb-1.5 block text-sm font-medium text-navy";

export function LeadForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LeadFormData>();

  const onSubmit = async (data: LeadFormData) => {
    setStatus("submitting");
    const result = await submitLead(data);
    if (result.ok) {
      track("form_submit", { form: "kitchen_remodeling_estimate" });
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="border border-gold/30 bg-white p-8 text-center">
        <h3 className="font-display text-2xl text-navy">Thank You</h3>
        <p className="mt-3 text-navy/70">
          We've received your request. A member of our team will reach out to schedule your free
          consultation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 border border-navy/10 bg-white p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input id="name" className={inputClass} {...register("name", { required: true })} />
          {errors.name && <p className="mt-1 text-xs text-red-600">Name is required.</p>}
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            className={inputClass}
            {...register("phone", { required: true })}
          />
          {errors.phone && <p className="mt-1 text-xs text-red-600">Phone is required.</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            type="email"
            className={inputClass}
            {...register("email", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })}
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">A valid email is required.</p>}
        </div>
        <div>
          <label htmlFor="city" className={labelClass}>
            City
          </label>
          <input id="city" className={inputClass} {...register("city", { required: true })} />
          {errors.city && <p className="mt-1 text-xs text-red-600">City is required.</p>}
        </div>
      </div>

      <div>
        <label htmlFor="project" className={labelClass}>
          What are you looking to remodel?
        </label>
        <input
          id="project"
          className={inputClass}
          placeholder="e.g. Full kitchen renovation, cabinets, countertops"
          {...register("project", { required: true })}
        />
        {errors.project && <p className="mt-1 text-xs text-red-600">Please tell us a bit about your project.</p>}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="budget" className={labelClass}>
            Approximate Project Budget
          </label>
          <select id="budget" className={inputClass} {...register("budget", { required: true })}>
            <option value="">Select a range</option>
            {budgetOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.budget && <p className="mt-1 text-xs text-red-600">Please select a budget range.</p>}
        </div>
        <div>
          <label htmlFor="timeframe" className={labelClass}>
            Desired Start Timeframe
          </label>
          <select id="timeframe" className={inputClass} {...register("timeframe", { required: true })}>
            <option value="">Select a timeframe</option>
            {timeframeOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.timeframe && <p className="mt-1 text-xs text-red-600">Please select a timeframe.</p>}
        </div>
      </div>

      {status === "error" && (
        <p className="border border-red-200 bg-red-50 px-4 py-3 text-center text-sm text-red-700">
          Something went wrong sending your request. Please try again, or call us directly at{" "}
          <a href={business.landingPhoneHref} className="font-semibold underline">
            {business.landingPhone}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-sm bg-gold px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-navy-dark transition-colors hover:bg-gold-dark disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Request a Free Estimate"}
      </button>

      <p className="text-center text-xs text-navy/50">
        Submitting this form requests a free consultation and does not guarantee a quote. We'll
        follow up to discuss your project.
      </p>
    </form>
  );
}
