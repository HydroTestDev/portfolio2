"use client";

import { FormEvent, useMemo, useState } from "react";
import { m } from "framer-motion";
import { MagneticButton } from "@/components/magnetic";

const budgetOptions = [
  "Below $25k",
  "$25k–$50k",
  "$50k–$100k",
  "$100k+"
];

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key] ?? "")}`
    )
    .join("&");
}

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: ""
  });

  const isValid = useMemo(() => {
    return (
      formData.name.trim().length > 1 &&
      formData.email.includes("@") &&
      formData.message.trim().length > 10
    );
  }, [formData.email, formData.message, formData.name]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    if (!isValid) {
      setStatus("error");
      setError("Please complete the required fields with valid details.");
      return;
    }

    try {
      const body = encode({
        "form-name": "contact",
        ...formData
      });

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body
      });

      if (!response.ok) throw new Error("Failed");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError("Something went wrong. Please try again or email us directly.");
    }
  };

  return (
    <section id="inquiry" className="relative px-6 py-24 md:px-12 lg:px-20">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-muted">
            Contact
          </p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl">
            Let’s engineer something extraordinary.
          </h2>
          <p className="mt-4 text-base text-muted md:text-lg">
            Share your vision and constraints. We will respond with a tailored
            systems proposal, timeline, and scope alignment.
          </p>
          <div className="mt-8 space-y-4 text-sm text-muted">
            <div className="glass-panel glow-edge rounded-2xl px-6 py-4">
              Response window: 24–48 hours
            </div>
            <div className="glass-panel glow-edge rounded-2xl px-6 py-4">
              Engagements start with a discovery session
            </div>
            <div className="glass-panel glow-edge rounded-2xl px-6 py-4">
              NDA-ready by request
            </div>
          </div>
        </m.div>

        <m.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8 }}
          className="glass-panel glow-edge relative overflow-hidden rounded-3xl p-8"
        >
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="relative space-y-4"
          >
            <input type="hidden" name="form-name" value="contact" />
            <label className="hidden">
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-xs uppercase tracking-[0.3em] text-muted">
                Name
                <input
                  value={formData.name}
                  onChange={(event) =>
                    setFormData((prev) => ({
                      ...prev,
                      name: event.target.value
                    }))
                  }
                  required
                  name="name"
                  autoComplete="name"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-text backdrop-blur"
                  type="text"
                  placeholder="Alex Morgan"
                />
              </label>
              <label className="text-xs uppercase tracking-[0.3em] text-muted">
                Email
                <input
                  value={formData.email}
                  onChange={(event) =>
                    setFormData((prev) => ({
                      ...prev,
                      email: event.target.value
                    }))
                  }
                  required
                  name="email"
                  autoComplete="email"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-text backdrop-blur"
                  type="email"
                  placeholder="alex@company.com"
                />
              </label>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-xs uppercase tracking-[0.3em] text-muted">
                Company
                <input
                  value={formData.company}
                  onChange={(event) =>
                    setFormData((prev) => ({
                      ...prev,
                      company: event.target.value
                    }))
                  }
                  name="company"
                  autoComplete="organization"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-text backdrop-blur"
                  type="text"
                  placeholder="Nocturne Ventures"
                />
              </label>
              <label className="text-xs uppercase tracking-[0.3em] text-muted">
                Budget
                <select
                  value={formData.budget}
                  onChange={(event) =>
                    setFormData((prev) => ({
                      ...prev,
                      budget: event.target.value
                    }))
                  }
                  name="budget"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-text backdrop-blur"
                >
                  <option value="">Select range</option>
                  {budgetOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="text-xs uppercase tracking-[0.3em] text-muted">
              Project vision
              <textarea
                value={formData.message}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    message: event.target.value
                  }))
                }
                required
                name="message"
                rows={5}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-text backdrop-blur"
                placeholder="Tell us about scope, goals, and timing."
              />
            </label>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <MagneticButton
                type="submit"
                className="glass-panel glow-edge rounded-full px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-text transition hover:shadow-glow"
              >
                Request alignment
              </MagneticButton>
              <span className="text-xs uppercase tracking-[0.3em] text-muted">
                Form goes directly to Netlify
              </span>
            </div>

            <div
              aria-live="polite"
              className={`text-sm ${
                status === "error" ? "text-accent" : "text-muted"
              }`}
            >
              {status === "success" &&
                "Your inquiry has been received. We will reply within 48 hours."}
              {status === "error" && error}
            </div>
          </form>
        </m.div>
      </div>
    </section>
  );
}
