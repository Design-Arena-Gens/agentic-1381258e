"use client";

import { useMemo, useState } from "react";

type GrowthLever = {
  name: string;
  description: string;
  uplift: number;
};

const levers: GrowthLever[] = [
  {
    name: "Increase win rate",
    description:
      "Invest in targeted objection handling, stronger demos, and proof-of-value pilots.",
    uplift: 0.03,
  },
  {
    name: "Raise average deal size",
    description:
      "Bundle premium features, add services, and introduce success-based pricing tiers.",
    uplift: 1500,
  },
  {
    name: "Accelerate sales cycle",
    description: "Adopt mutual action plans and use battle cards to keep deals moving.",
    uplift: -5,
  },
];

const numberFormatter = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 0,
});

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

type CalculatorState = {
  revenueTarget: number;
  averageDealSize: number;
  winRate: number;
  salesCycle: number;
};

const defaultState: CalculatorState = {
  revenueTarget: 125_000,
  averageDealSize: 8_500,
  winRate: 0.28,
  salesCycle: 52,
};

export default function PipelineCalculator() {
  const [state, setState] = useState<CalculatorState>(defaultState);

  const derived = useMemo(() => {
    const quota = state.revenueTarget;
    const dealSize = state.averageDealSize;
    const winRate = state.winRate;

    const dealsNeeded = Math.ceil(quota / dealSize);
    const qualifiedPipelineRequired = Math.ceil(dealsNeeded / winRate);
    const monthlyPipeline = Math.ceil(qualifiedPipelineRequired / (state.salesCycle / 4));
    const marketingLeads = Math.ceil(qualifiedPipelineRequired / 0.35);

    return {
      dealsNeeded,
      qualifiedPipelineRequired,
      monthlyPipeline,
      marketingLeads,
    };
  }, [state]);

  return (
    <section id="calculator" className="glass-panel rounded-3xl p-8 fade-in space-y-6">
      <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-brand-100">Pipeline designer</p>
          <h2 className="mt-1 text-2xl font-semibold text-white">
            Reverse-engineer the pipeline you need to hit your number
          </h2>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-500/10 px-4 py-2 text-sm text-brand-100">
          <span className="h-2 w-2 rounded-full bg-brand-500 animate-pulse" />
          Live Forecast
        </span>
      </header>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <InputCard
            label="Quarterly revenue target"
            prefix="$ "
            value={state.revenueTarget}
            step={1_000}
            min={10_000}
            max={1_000_000}
            onChange={(value) => setState((prev) => ({ ...prev, revenueTarget: value }))}
          />
          <InputCard
            label="Average deal size"
            prefix="$ "
            value={state.averageDealSize}
            step={250}
            min={1_000}
            max={50_000}
            onChange={(value) => setState((prev) => ({ ...prev, averageDealSize: value }))}
          />
          <InputCard
            label="Win rate"
            suffix="%"
            value={Math.round(state.winRate * 100)}
            step={1}
            min={5}
            max={90}
            onChange={(value) => setState((prev) => ({ ...prev, winRate: value / 100 }))}
          />
          <InputCard
            label="Sales cycle length"
            suffix="days"
            value={state.salesCycle}
            step={1}
            min={14}
            max={180}
            onChange={(value) => setState((prev) => ({ ...prev, salesCycle: value }))}
          />
        </div>

        <div className="grid gap-4">
          <ResultStat
            label="Deals you need to close"
            value={numberFormatter.format(derived.dealsNeeded)}
            emphasis
          />
          <ResultStat
            label="Qualified pipeline required"
            value={currencyFormatter.format(derived.qualifiedPipelineRequired * state.averageDealSize)}
          />
          <ResultStat
            label="Qualified opportunities per month"
            value={numberFormatter.format(derived.monthlyPipeline)}
          />
          <ResultStat
            label="Marketing sourced SQLs per quarter"
            value={numberFormatter.format(derived.marketingLeads)}
          />
        </div>
      </div>

      <div className="rounded-2xl border border-white/5 bg-slate-900/40 p-6">
        <h3 className="text-lg font-semibold text-white">Top leverage plays</h3>
        <p className="mt-1 text-sm text-slate-300">
          Layer one or two experiments each sprint. Quantify their effect on your pipeline plan.
        </p>
        <ul className="mt-5 grid gap-4 md:grid-cols-3">
          {levers.map((lever) => (
            <li key={lever.name} className="rounded-2xl border border-white/5 bg-slate-950/40 p-4">
              <p className="text-sm font-semibold text-brand-100">{lever.name}</p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">{lever.description}</p>
              <p className="mt-3 text-sm text-slate-400">
                Potential uplift:{" "}
                <span className="font-semibold text-emerald-300">
                  {lever.uplift > 1
                    ? currencyFormatter.format(lever.uplift)
                    : `${Math.round(lever.uplift * 100)}%`}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

type InputCardProps = {
  label: string;
  value: number;
  step: number;
  min: number;
  max: number;
  prefix?: string;
  suffix?: string;
  onChange: (value: number) => void;
};

function InputCard({
  label,
  value,
  step,
  min,
  max,
  prefix,
  suffix,
  onChange,
}: InputCardProps) {
  return (
    <label className="block rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm shadow-brand-500/10">
      <span className="text-xs uppercase tracking-[0.25em] text-slate-300">{label}</span>
      <div className="mt-3 flex items-center gap-2 text-2xl font-semibold text-white">
        {prefix ? <span className="text-base text-slate-400">{prefix}</span> : null}
        <input
          className="w-full appearance-none bg-transparent text-white outline-none focus:ring-0"
          type="number"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={(event) => onChange(Number(event.target.value))}
        />
        {suffix ? <span className="text-base text-slate-400">{suffix}</span> : null}
      </div>
      <input
        className="mt-4 h-1 w-full cursor-pointer appearance-none rounded-full bg-slate-800 accent-brand-500"
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </label>
  );
}

type ResultStatProps = {
  label: string;
  value: string;
  emphasis?: boolean;
};

function ResultStat({ label, value, emphasis = false }: ResultStatProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-slate-900/50 p-5">
      <p className="text-xs uppercase tracking-[0.25em] text-slate-400">{label}</p>
      <p className={`mt-2 text-3xl font-semibold ${emphasis ? "text-brand-100" : "text-white"}`}>{value}</p>
    </article>
  );
}
