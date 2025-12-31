import DealVelocityChart from "@/components/DealVelocityChart";
import GrowthPlaybook from "@/components/GrowthPlaybook";
import PipelineCalculator from "@/components/PipelineCalculator";
import PrioritizationMatrix from "@/components/PrioritizationMatrix";

const growthPillars = [
  {
    title: "Sharpen your ICP + positioning",
    description:
      "Clarify the pain you solve and the value you create for the best-fit segments. Align messaging, demos, and offers around mutual impact.",
    outcomes: ["Higher close rates", "Efficient marketing spend", "Faster qualification"],
  },
  {
    title: "Operationalize revenue rhythms",
    description:
      "Install weekly cadences, pipeline councils, and deal reviews that keep the team focused on the next best action.",
    outcomes: ["Shorter sales cycles", "Reliable forecast", "Tighter collaboration"],
  },
  {
    title: "Weaponize customer proof",
    description:
      "Turn wins into narratives, benchmarks, and ROI calculators that arm champions and give buyers confidence.",
    outcomes: ["Increased deal size", "Premium pricing power", "Expansion momentum"],
  },
];

export default function Page() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-12 px-6 py-12">
      <HeroSection />
      <section className="grid gap-6 md:grid-cols-3">
        {growthPillars.map((pillar) => (
          <article
            key={pillar.title}
            className="glass-panel group flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-brand-500/40"
          >
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-brand-100">
                <span className="h-2 w-2 rounded-full bg-brand-500" />
                Pillar
              </div>
              <h3 className="mt-3 text-xl font-semibold text-white">{pillar.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{pillar.description}</p>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-slate-200">
              {pillar.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  {outcome}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
      <PipelineCalculator />
      <DealVelocityChart />
      <PrioritizationMatrix />
      <GrowthPlaybook />
      <Footer />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="glass-panel fade-in overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-10">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-brand-100">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            Sales Growth Advisor
          </span>
          <h1 className="text-4xl font-semibold text-white md:text-5xl">
            Increase sales by combining sharper positioning, smarter pipeline design, and relentless execution.
          </h1>
          <p className="max-w-2xl text-lg text-slate-300">
            Audit your go-to-market, run the numbers, and activate the high-leverage plays that create
            revenue momentum. Built for founders, CROs, and revenue leaders who need clarity now.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#playbook"
              className="inline-flex items-center justify-center rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-700"
            >
              Deploy a 90-day plan
            </a>
            <a
              href="#calculator"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-brand-500/60 hover:text-brand-100"
            >
              Model your pipeline
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <HeroMetric label="Pipeline coverage" value="4.2×" subtext="healthy target 3×" />
            <HeroMetric label="Win-rate benchmark" value="28%" subtext="top quartile for PLG SaaS" />
            <HeroMetric label="Expansion potential" value="+15%" subtext="NRR lift with success loops" />
          </div>
        </div>
        <aside className="glass-panel relative flex-1 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/60 p-6">
          <div className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-brand-500/10 blur-3xl" />
          <div className="absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-accent-500/10 blur-3xl" />
          <div className="relative space-y-5">
            <h2 className="text-lg font-semibold text-white">Growth system snapshot</h2>
            <ul className="space-y-4 text-sm text-slate-200">
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>
                  Pipeline governance: weekly forecast reviews, stage-by-stage conversion dashboards, proactive deal rescue.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>
                  Demand engine: layered paid + partner campaigns, conversion copy frameworks, and live proof webinars.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>
                  Expansion loops: success scorecards, product usage alerts, and structured hand-offs to account managers.
                </span>
              </li>
            </ul>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Quick win checklist</p>
              <ul className="mt-3 space-y-3 text-sm text-slate-200">
                <li>⏱️ Set a 30-minute weekly revenue standup around the pipeline calculator output.</li>
                <li>🎯 Reposition your core narrative around the top 2 outcomes buyers crave.</li>
                <li>📣 Launch a proof campaign highlighting quantified customer results.</li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function HeroMetric({
  label,
  value,
  subtext,
}: {
  label: string;
  value: string;
  subtext: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-xs uppercase tracking-[0.25em] text-slate-400">{label}</p>
      <p className="mt-2 text-3xl font-semibold text-white">{value}</p>
      <p className="mt-1 text-xs text-slate-400">{subtext}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="mb-10 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-400">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>
          Build a compounding growth engine: align team rituals, optimize buyer journeys, and
          reinvest learnings every sprint.
        </p>
        <a
          className="inline-flex items-center gap-2 rounded-full border border-brand-500/40 px-4 py-2 text-sm text-brand-100 transition hover:bg-brand-500/10"
          href="mailto:growth@advisor.studio"
        >
          Book a revenue lab session →
        </a>
      </div>
    </footer>
  );
}
