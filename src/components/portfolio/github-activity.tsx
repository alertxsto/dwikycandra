"use client";

import { useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { ArrowUpRight, GitBranch } from "lucide-react";

type Contribution = {
  date: string;
  count: number;
  level: number;
};

type ActivityResponse = {
  username: string;
  total: number;
  contributions: Contribution[];
};

type CalendarCell = Contribution & {
  inRange: boolean;
};

type MonthMarker = {
  label: string;
  column: number;
};

type CalendarModel = {
  cells: CalendarCell[];
  weeks: number;
  months: MonthMarker[];
};

function addDays(date: Date, amount: number) {
  const next = new Date(date);
  next.setUTCDate(next.getUTCDate() + amount);
  return next;
}

function buildCalendar(contributions: Contribution[]): CalendarModel {
  if (contributions.length === 0) return { cells: [], weeks: 0, months: [] };

  const values = new Map(contributions.map((item) => [item.date, item]));
  const first = new Date(`${contributions[0].date}T00:00:00Z`);
  const last = new Date(
    `${contributions[contributions.length - 1].date}T00:00:00Z`,
  );
  const start = addDays(first, -first.getUTCDay());
  const end = addDays(last, 6 - last.getUTCDay());
  const cells: CalendarCell[] = [];
  const months: MonthMarker[] = [];
  const monthFormatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    timeZone: "UTC",
  });
  const seenMonths = new Set<string>();

  for (let cursor = start; cursor <= end; cursor = addDays(cursor, 1)) {
    const date = cursor.toISOString().slice(0, 10);
    const contribution = values.get(date);
    const cellIndex = cells.length;
    const monthKey = date.slice(0, 7);

    if (cursor.getUTCDate() <= 7 && !seenMonths.has(monthKey)) {
      seenMonths.add(monthKey);
      months.push({
        label: monthFormatter.format(cursor),
        column: Math.floor(cellIndex / 7) + 1,
      });
    }

    cells.push({
      date,
      count: contribution?.count ?? 0,
      level: contribution?.level ?? 0,
      inRange: Boolean(contribution),
    });
  }

  return { cells, weeks: Math.ceil(cells.length / 7), months };
}

export default function GithubActivity() {
  const [data, setData] = useState<ActivityResponse | null>(null);
  const [error, setError] = useState(false);
  const calendar = useMemo(
    () => buildCalendar(data?.contributions ?? []),
    [data],
  );

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/github-activity", { signal: controller.signal })
      .then(async (response) => {
        if (!response.ok) throw new Error("GitHub activity unavailable");
        return response.json() as Promise<ActivityResponse>;
      })
      .then(setData)
      .catch((reason: unknown) => {
        if (reason instanceof Error && reason.name === "AbortError") return;
        setError(true);
      });

    return () => controller.abort();
  }, []);

  return (
    <section
      id="activity"
      className="relative overflow-hidden border-t border-border px-6 py-24 md:px-10 md:py-40"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-grid opacity-45"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 flex items-center gap-4 md:mb-20">
          <GitBranch size={16} className="text-accent" aria-hidden="true" />
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Activity
          </span>
          <div className="h-px flex-1 bg-border" />
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            12 months
          </span>
        </div>

        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_240px] md:items-end md:gap-20">
          <div>
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-accent">
              A visible trail of the work
            </p>
            <h2 className="max-w-4xl font-display text-[clamp(2.5rem,6vw,6rem)] font-medium leading-[0.92] tracking-[-0.06em]">
              Keep shipping. Let the trail speak.
            </h2>
          </div>
          <div className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            <p>
              Public GitHub activity across the systems, products, and
              experiments in the archive.
            </p>
            <a
              href="https://github.com/alertxsto"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-foreground transition-colors hover:text-accent"
              data-cursor="hover"
            >
              Open GitHub <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="github-activity-panel mt-16 md:mt-24">
          <div className="github-activity-summary">
            <div>
              <strong>{data?.total.toLocaleString("en-US") ?? "—"}</strong>
              <span>public contributions</span>
            </div>
            <span className="github-activity-summary-note">
              Last 12 months · @alertxsto
            </span>
          </div>

          <div className="github-calendar-scroll" aria-live="polite">
            {data && !error ? (
              <div className="github-calendar-layout">
                <div className="github-calendar-weekdays" aria-hidden="true">
                  <span>Mon</span>
                  <span>Wed</span>
                  <span>Fri</span>
                </div>
                <div
                  className="github-calendar-plot"
                  style={{ "--github-weeks": calendar.weeks } as CSSProperties}
                >
                  <div className="github-month-labels" aria-hidden="true">
                    {calendar.months.map((month) => (
                      <span
                        key={`${month.label}-${month.column}`}
                        style={{ gridColumn: `${month.column} / span 4` }}
                      >
                        {month.label}
                      </span>
                    ))}
                  </div>
                  <div
                    className="github-calendar-grid"
                    role="img"
                    aria-label={`${data.total} GitHub contributions in the last year`}
                  >
                    {calendar.cells.map((cell) => (
                      <span
                        key={cell.date}
                        className={`github-cell github-cell-level-${cell.level}${cell.inRange ? "" : " is-outside-range"}`}
                        title={`${cell.count} contribution${cell.count === 1 ? "" : "s"} on ${cell.date}`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ) : error ? (
              <a
                className="github-calendar-state"
                href="https://github.com/alertxsto"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open GitHub to view the current contribution history.
              </a>
            ) : (
              <div className="github-calendar-state">
                Loading contribution history…
              </div>
            )}
          </div>

          {data && !error && (
            <div className="github-calendar-footer">
              <span>less</span>
              <i
                className="github-cell github-cell-level-0"
                aria-hidden="true"
              />
              <i
                className="github-cell github-cell-level-1"
                aria-hidden="true"
              />
              <i
                className="github-cell github-cell-level-2"
                aria-hidden="true"
              />
              <i
                className="github-cell github-cell-level-3"
                aria-hidden="true"
              />
              <i
                className="github-cell github-cell-level-4"
                aria-hidden="true"
              />
              <span>more</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
