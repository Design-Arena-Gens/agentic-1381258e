"use client";

import { useState } from "react";

type Play = {
  title: string;
  summary: string;
  steps: string[];
  signal: string;
};

const plays: Play[] = [
  {
    title: "Upgrade lead generation with precision offers",
    summary:
      "Replace generic lead magnets with ICP-specific value assets that fast-track prospects to a calendar invite.",
    steps: [
      "Identify the 3 highest-LTV micro segments and outline their burning pains.",
      "Build a 2-page playbook or ROI template that answers ‘Why now?’ for each segment.",
      "Drive traffic via targeted ads and partner co-marketing, gating the asset behind a discovery call CTA.",
    ],
    signal: "When pipeline coverage dips below 3.5x target",
  },
  {
    title: "Run a conversion lab on the middle of the funnel",
    summary:
      "Diagnose friction between discovery and proposal. Instrument every motion and test new proof assets weekly.",
    steps: [
      "Record 10 discovery calls to flag consistent objections and missing champion ammo.",
      "Prototype a narrative deck + ROI calculator, then run A/B tests across 2-week sprints.",
      "Hold win-loss retro with sales, product, and CS to distill learnings and script updates.",
    ],
    signal: "When demo-to-close is below 25%",
  },
  {
    title: "Activate customer expansion with success loops",
    summary:
      "Engineer moments that convert happy users into expansion champions and referral advocates.",
    steps: [
      "Surface usage alerts for aha moments and feed them into a CS & sales huddle twice weekly.",
      "Trigger in-app nudges with tailored upsell value metrics post-success milestone.",
      "Offer referral accelerators with time-bound perks and concierge onboarding for new teams.",
    ],
    signal: "When NRR is below 110%",
  },
];

export default function GrowthPlaybook() {
  const [open, setOpen] = useState(plays[0].title);

  return (
    <section id="playbook" className="glass-panel fade-in rounded-3xl p-8">
      <header>
        <p className="text-sm uppercase tracking-[0.3em] text-brand-100">Execution blueprint</p>
        <h2 className="mt-1 text-2xl font-semibold text-white">
          Deploy plays that compound revenue faster
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-slate-300">
          Spin up the right momentum for your growth stage. Each play includes the trigger signal,
          tactical steps, and the success metrics to monitor.
        </p>
      </header>

      <ul className="mt-6 space-y-3">
        {plays.map((play) => {
          const isOpen = open === play.title;
          return (
            <li key={play.title} className="overflow-hidden rounded-2xl border border-white/5">
              <button
                className="flex w-full items-center justify-between bg-white/5 px-6 py-4 text-left"
                onClick={() => setOpen(isOpen ? "" : play.title)}
              >
                <div>
                  <p className="text-base font-semibold text-white">{play.title}</p>
                  <p className="mt-1 text-xs text-slate-400">{play.summary}</p>
                </div>
                <span className="text-sm text-brand-100">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen ? (
                <div className="space-y-4 bg-slate-900/30 px-6 py-5 text-sm text-slate-200">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Trigger</p>
                    <p className="mt-1 font-medium text-brand-100">{play.signal}</p>
                  </div>
                  <ol className="space-y-3 text-sm leading-relaxed text-slate-200">
                    {play.steps.map((step) => (
                      <li key={step} className="rounded-xl border border-white/10 bg-white/5 p-3">
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
