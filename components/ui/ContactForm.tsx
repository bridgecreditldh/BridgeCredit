"use client";
import { useState, FormEvent } from "react";

const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT || "";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!FORM_ENDPOINT) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const formData = new FormData(e.currentTarget);
      formData.append("access_key", "b8a0d3bd-a49f-4eb3-ac24-32ee8bc26563");
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      const result = await res.json();
      if (result.success === true) {
        setStatus("sent");
      } else {
        console.error("Form submission failed:", result);
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  }

  const inputClass = "mt-1.5 w-full rounded-xl border border-line bg-white px-4 py-2.5 text-[15px] text-ink outline-none focus:border-royal";

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-line bg-white p-8 text-center">
        <h3 className="text-xl font-bold text-navy">Thank you</h3>
        <p className="mt-2 text-ink/65">Your enquiry has been received. Our team will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-line bg-white p-6 sm:p-8">
      {!FORM_ENDPOINT && (
        <p className="mb-5 rounded-xl bg-paper-blue px-4 py-3 text-[13px] text-navy/70">
          Form submission endpoint not yet configured — connect Formspree or Web3Forms via
          NEXT_PUBLIC_FORM_ENDPOINT to activate this form.
        </p>
      )}
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-[13.5px] font-medium text-ink/70">
          Name
          <input required name="name" type="text" className={inputClass} />
        </label>
        <label className="block text-[13.5px] font-medium text-ink/70">
          Phone
          <input required name="phone" type="tel" className={inputClass} />
        </label>
        <label className="block text-[13.5px] font-medium text-ink/70">
          Email
          <input required name="email" type="email" className={inputClass} />
        </label>
        <label className="block text-[13.5px] font-medium text-ink/70">
          Employment Type
          <select name="employmentType" className={inputClass}>
            <option>Salaried</option>
            <option>Self-Employed</option>
            <option>Business Owner</option>
            <option>Other</option>
          </select>
        </label>
        <label className="block text-[13.5px] font-medium text-ink/70 sm:col-span-2">
          Loan Requirement
          <select name="loanRequirement" className={inputClass}>
            <option>Personal Loan</option>
            <option>Business Loan</option>
            <option>Car Loan</option>
            <option>Agricultural Loan</option>
            <option>Gold Loan</option>
            <option>Loan Against Property</option>
            <option>OD / Working Capital</option>
            <option>Secured Loan</option>
            <option>Unsecured Loan</option>
          </select>
        </label>
        <label className="block text-[13.5px] font-medium text-ink/70 sm:col-span-2">
          Message
          <textarea name="message" rows={4} className={inputClass} />
        </label>
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 w-full rounded-full bg-royal px-6 py-3 text-[15px] font-semibold text-white hover:bg-royal-deep disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending..." : "Submit Enquiry"}
      </button>
      {status === "error" && FORM_ENDPOINT && (
        <p className="mt-3 text-[13.5px] text-red-600">Something went wrong. Please try again or contact us directly.</p>
      )}
    </form>
  );
}
