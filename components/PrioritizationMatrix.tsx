"use client";

import { useMemo, useState } from "react";

type Initiative = {
  name: string;
  focus: "Marketing" | "Sales" | "Customer Success";
  description: string;
  impact: number;
  effort: number;
  metric: string;
};

const initiatives: Initiative[] = [
  {
    name: "Outbound personalization sprint",
    focus: "Marketing",
    description:
      "Launch 3-email sequenced outreach with micro-segmented value props and founder intro videos.",
    impact: 9,
    effort: 4,
    metric: "Booked meetings",
  },
  {
    name: "Deal desk + champion enablement kit",
    focus: "Sales",
    description:
      "Build concise FAQ, ROI calculator, and mutual action plan template to help champions sell internally.",
    impact: 8,
    effort: 6,
    metric: "Stage 2 → closed",
  },
  {
    name: "Lifecycle win-back program",
    focus: "Marketing",
    description:
      "Trigger success stories and limited-time upgrade offers for churned ICP accounts every 45 days.",
    impact: 6,
    effort: 3,
    metric: "Recovered ARR",
  },
  {
    name: "Expansion playbook with QBR motion",
    focus: "Customer Success",
    description:
      "Run quarterly business reviews with ROI recap and introduce expansion roadmap for power users.",
    impact: 7,
    effort: 5,
    metric: "Net revenue retention",
  },
  {
    name: "Product-led sales alerts",
    focus: "Sales",
    description:
      "Route high-intent usage signals to reps in Slack with next-best-action suggestions and scripts.",
    impact: 8,
    effort: 4,
    metric: "Trial to paid",
  },
];

const focusFilters = ["All", "Marketing", "Sales", "Customer Success"] as const;

export default function PrioritizationMatrix() {
  const [focus, setFocus] =
    useState<(typeof focusFilters)[number]>("All");

  const filtered = useMemo(() => {
    if (focus === "All") return initiatives;
    return initiatives.filter((item) => item.focus === focus);
  }, [focus]);

  return (
    <section className="glass-panel fade-in rounded-3xl p-8">
      <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-brand-100">Initiative matrix</p>
          <h2 className="mt-1 text-2xl font-semibold text-white">Focus on high-impact projects</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {focusFilters.map((item) => (
            <button
              key={item}
              onClick={() => setFocus(item)}
              className={`rounded-full border px-4 py-1 text-sm transition ${
                focus === item
                  ? "border-brand-500 bg-brand-500/20 text-brand-100"
                  : "border-white/10 bg-white/5 text-slate-300 hover:border-brand-500/40 hover:text-brand-100"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </header>

      <div className="mt-8 overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
        <table className="min-w-full text-left text-sm text-slate-300">
          <thead className="bg-white/5 text-xs uppercase tracking-[0.2em] text-slate-400">
            <tr>
              <th className="px-6 py-4 font-semibold">Initiative</th>
              <th className="px-6 py-4 font-semibold">Focus</th>
              <th className="px-6 py-4 font-semibold">Impact</th>
              <th className="px-6 py-4 font-semibold">Effort</th>
              <th className="px-6 py-4 font-semibold">Primary metric</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((initiative) => (
              <tr
                key={initiative.name}
                className="border-t border-white/5 transition hover:bg-white/5"
              >
                <td className="px-6 py-5">
                  <p className="text-base font-semibold text-white">{initiative.name}</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-400">
                    {initiative.description}
                  </p>
                </td>
                <td className="px-6 py-5">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
                    {initiative.focus}
                  </span>
                </td>
                <td className="px-6 py-5">
                  <ScoreBadge score={initiative.impact} label="Impact" />
                </td>
                <td className="px-6 py-5">
                  <ScoreBadge score={initiative.effort} label="Effort" />
                </td>
                <td className="px-6 py-5 text-white">{initiative.metric}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function ScoreBadge({ score, label }: { score: number; label: string }) {
  const color =
    score >= 8 ? "text-emerald-300" : score >= 6 ? "text-brand-100" : "text-slate-200";

  return (
    <div className="flex flex-col">
      <span className={`text-xl font-semibold ${color}`}>{score}/10</span>
      <span className="text-xs uppercase tracking-[0.2em] text-slate-400">{label}</span>
    </div>
  );
}
