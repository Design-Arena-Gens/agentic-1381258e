"use client";

import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  TimeSeriesScale,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useMemo } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Filler,
  TimeSeriesScale,
);

const labels = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6"];

export default function DealVelocityChart() {
  const chartData = useMemo(
    () => ({
      labels,
      datasets: [
        {
          label: "Qualified pipeline ($)",
          data: [82000, 86000, 91500, 98000, 103000, 110000],
          tension: 0.4,
          borderColor: "#3b82f6",
          backgroundColor: "rgba(59, 130, 246, 0.15)",
          fill: true,
        },
        {
          label: "Revenue closed ($)",
          data: [12000, 24000, 36000, 52000, 67000, 82000],
          tension: 0.35,
          borderColor: "#ec4899",
          backgroundColor: "rgba(236, 72, 153, 0.18)",
          fill: true,
        },
      ],
    }),
    [],
  );

  const options = useMemo(
    () => ({
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: "#cbd5f5",
            font: {
              size: 12,
              family: "var(--font-inter)",
            },
          },
        },
        tooltip: {
          backgroundColor: "rgba(15, 23, 42, 0.95)",
          borderColor: "rgba(59, 130, 246, 0.6)",
          borderWidth: 1,
          padding: 12,
          titleFont: {
            family: "var(--font-inter)",
          },
          bodyFont: {
            family: "var(--font-inter)",
          },
        },
      },
      scales: {
        y: {
          display: true,
          grid: {
            color: "rgba(148, 163, 184, 0.2)",
          },
          ticks: {
            color: "#94a3b8",
            callback: (value: string | number) =>
              typeof value === "number" ? `$${value.toLocaleString()}` : value,
          },
        },
        x: {
          ticks: {
            color: "#94a3b8",
          },
          grid: {
            color: "rgba(148, 163, 184, 0.15)",
          },
        },
      },
    }),
    [],
  );

  return (
    <section className="glass-panel fade-in rounded-3xl p-8">
      <header className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-brand-100">Velocity trends</p>
          <h2 className="mt-1 text-2xl font-semibold text-white">Monitor weekly pipeline traction</h2>
        </div>
        <span className="rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs text-brand-100">
          Leading indicator
        </span>
      </header>
      <div className="mt-6 rounded-2xl border border-white/5 bg-slate-900/40 p-4">
        <Line data={chartData} options={options} height={200} />
      </div>
      <ul className="mt-6 grid gap-4 md:grid-cols-3">
        <InsightCard
          title="Efficiency"
          value="+17%"
          description="Deals are closing faster than last month after adding mutual action plans."
        />
        <InsightCard
          title="Conversion"
          value="+5 pts"
          description="New discovery template is boosting stage 2 → demo acceptance."
        />
        <InsightCard
          title="Forecast"
          value="$128k"
          description="Likely revenue this quarter assuming the current velocity holds steady."
        />
      </ul>
    </section>
  );
}

type InsightCardProps = {
  title: string;
  value: string;
  description: string;
};

function InsightCard({ title, value, description }: InsightCardProps) {
  return (
    <li className="rounded-2xl border border-white/5 bg-slate-950/30 p-4">
      <p className="text-xs uppercase tracking-[0.25em] text-slate-400">{title}</p>
      <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-xs leading-relaxed text-slate-300">{description}</p>
    </li>
  );
}
