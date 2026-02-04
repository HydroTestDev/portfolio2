"use client";

import { m } from "framer-motion";
import { MagneticCard } from "@/components/magnetic";

const capabilities = [
  {
    title: "Frontend Engineering",
    description:
      "Cinematic interfaces with GPU-accelerated motion, refined micro-interactions, and meticulous UI detail.",
    icon: (
      <m.svg
        viewBox="0 0 24 24"
        className="h-10 w-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <m.path
          d="M4 7h16M4 12h10M4 17h7"
          variants={{ rest: { pathLength: 0.7 }, hover: { pathLength: 1 } }}
        />
        <m.rect
          x="16"
          y="13"
          width="4"
          height="4"
          rx="1"
          variants={{ rest: { opacity: 0.6 }, hover: { opacity: 1 } }}
        />
      </m.svg>
    )
  },
  {
    title: "Backend Systems",
    description:
      "Robust APIs, secure infrastructure, and clean service layers built for scale and stability.",
    icon: (
      <m.svg
        viewBox="0 0 24 24"
        className="h-10 w-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <m.path
          d="M6 7h12M6 12h12M6 17h12"
          variants={{ rest: { pathLength: 0.6 }, hover: { pathLength: 1 } }}
        />
        <m.circle
          cx="7"
          cy="7"
          r="1"
          variants={{ rest: { opacity: 0.5 }, hover: { opacity: 1 } }}
        />
      </m.svg>
    )
  },
  {
    title: "Full-Stack Web Apps",
    description:
      "From concept to deployment, we orchestrate cohesive platforms with end-to-end accountability.",
    icon: (
      <m.svg
        viewBox="0 0 24 24"
        className="h-10 w-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <m.path
          d="M4 5h16v6H4zM4 13h16v6H4z"
          variants={{ rest: { pathLength: 0.7 }, hover: { pathLength: 1 } }}
        />
      </m.svg>
    )
  },
  {
    title: "Performance Optimization",
    description:
      "Lighthouse-ready builds, edge caching, and responsive systems tuned for real-world speed.",
    icon: (
      <m.svg
        viewBox="0 0 24 24"
        className="h-10 w-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <m.path
          d="M12 4v8l4 4"
          variants={{ rest: { pathLength: 0.6 }, hover: { pathLength: 1 } }}
        />
        <m.circle
          cx="12"
          cy="12"
          r="7"
          variants={{ rest: { opacity: 0.6 }, hover: { opacity: 1 } }}
        />
      </m.svg>
    )
  },
  {
    title: "UI/UX Systems",
    description:
      "Design systems and component libraries that preserve brand precision across every touchpoint.",
    icon: (
      <m.svg
        viewBox="0 0 24 24"
        className="h-10 w-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <m.path
          d="M4 8h16M8 4v16"
          variants={{ rest: { pathLength: 0.6 }, hover: { pathLength: 1 } }}
        />
        <m.rect
          x="13"
          y="9"
          width="7"
          height="7"
          rx="2"
          variants={{ rest: { opacity: 0.6 }, hover: { opacity: 1 } }}
        />
      </m.svg>
    )
  },
  {
    title: "API Development",
    description:
      "Structured data pipelines, integrations, and developer-first documentation for long-term clarity.",
    icon: (
      <m.svg
        viewBox="0 0 24 24"
        className="h-10 w-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <m.path
          d="M6 9h12M6 15h12"
          variants={{ rest: { pathLength: 0.6 }, hover: { pathLength: 1 } }}
        />
        <m.circle
          cx="6"
          cy="9"
          r="1"
          variants={{ rest: { opacity: 0.5 }, hover: { opacity: 1 } }}
        />
        <m.circle
          cx="18"
          cy="15"
          r="1"
          variants={{ rest: { opacity: 0.5 }, hover: { opacity: 1 } }}
        />
      </m.svg>
    )
  }
];

const cardVariants = {
  rest: {
    y: 0,
    boxShadow: "0 20px 60px rgba(0,0,0,0.35)"
  },
  hover: {
    y: -8,
    boxShadow: "0 25px 80px rgba(255,45,67,0.15)"
  }
};

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative px-6 py-24 md:px-12 lg:px-20">
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <p className="text-xs uppercase tracking-[0.4em] text-muted">
          Capabilities
        </p>
        <h2 className="mt-4 font-display text-3xl md:text-4xl">
          A full-stack discipline for elite digital systems.
        </h2>
        <p className="mt-4 text-base text-muted md:text-lg">
          We operate at the intersection of engineering and design, delivering
          scalable foundations with cinematic polish.
        </p>
      </m.div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {capabilities.map((item) => (
          <MagneticCard
            key={item.title}
            intensity={0.18}
            className="glass-panel glow-edge group relative overflow-hidden rounded-3xl p-8"
          >
            <div className="cursor-glow absolute inset-0" aria-hidden="true" />
            <m.div
              variants={cardVariants}
              initial="rest"
              whileHover="hover"
              className="relative flex h-full flex-col"
            >
              <m.div
                variants={{ rest: { opacity: 0.7 }, hover: { opacity: 1 } }}
                className="text-accent"
              >
                {item.icon}
              </m.div>
              <h3 className="mt-6 text-lg font-semibold text-text">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-muted">{item.description}</p>
              <m.div
                variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
                className="mt-6 text-xs uppercase tracking-[0.3em] text-accent"
              >
                Engineered delivery
              </m.div>
            </m.div>
          </MagneticCard>
        ))}
      </div>
    </section>
  );
}
