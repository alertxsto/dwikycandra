export interface GithubContribution {
  date: string;
  count: number;
  level: number;
}

export interface ParsedGithubContributions {
  total: number;
  contributions: GithubContribution[];
}

function attribute(attributes: string, name: string) {
  return new RegExp(`${name}="([^"]+)"`).exec(attributes)?.[1] ?? null;
}

function contributionCount(tooltip: string, level: number) {
  const match = /([\d,]+) contribution/.exec(tooltip);
  if (match) return Number.parseInt(match[1].replaceAll(",", ""), 10);
  return level === 0 ? 0 : level;
}

export function parseContributionHtml(html: string): ParsedGithubContributions {
  const tooltipByCell = new Map<string, string>();
  const tooltipPattern = /<tool-tip\b([^>]*)>([\s\S]*?)<\/tool-tip>/g;

  for (const match of html.matchAll(tooltipPattern)) {
    const cellId = attribute(match[1], "for");
    if (cellId)
      tooltipByCell.set(cellId, match[2].replace(/<[^>]+>/g, "").trim());
  }

  const contributions: GithubContribution[] = [];
  const cellPattern =
    /<td\b([^>]*class="[^"]*ContributionCalendar-day[^"]*"[^>]*)>\s*<\/td>/g;

  for (const match of html.matchAll(cellPattern)) {
    const date = attribute(match[1], "data-date");
    const levelValue = attribute(match[1], "data-level");
    const cellId = attribute(match[1], "id");
    if (!date || !levelValue) continue;

    const level = Number.parseInt(levelValue, 10);
    if (!Number.isInteger(level) || level < 0 || level > 4) continue;
    const tooltip = cellId ? (tooltipByCell.get(cellId) ?? "") : "";
    contributions.push({
      date,
      count: contributionCount(tooltip, level),
      level,
    });
  }

  const totalMatch = /([\d,]+) contributions? in the last year/i.exec(html);
  const total = totalMatch
    ? Number.parseInt(totalMatch[1].replaceAll(",", ""), 10)
    : contributions.reduce((sum, item) => sum + item.count, 0);

  return {
    total,
    contributions: contributions.sort((left, right) =>
      left.date.localeCompare(right.date),
    ),
  };
}
