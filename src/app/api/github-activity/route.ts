import { NextResponse } from "next/server";
import { parseContributionHtml } from "@/lib/github-contributions";

export const revalidate = 3600;

const CONTRIBUTIONS_URL = "https://github.com/users/alertxsto/contributions";

export async function GET() {
  try {
    const response = await fetch(CONTRIBUTIONS_URL, {
      headers: {
        Accept: "text/html",
        "User-Agent": "dwikycandra-portfolio",
      },
      next: { revalidate },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "GitHub contribution data is temporarily unavailable." },
        { status: 502 },
      );
    }

    const parsed = parseContributionHtml(await response.text());
    if (parsed.contributions.length === 0) {
      return NextResponse.json(
        { error: "GitHub returned no contribution cells." },
        { status: 502 },
      );
    }

    return NextResponse.json({
      username: "alertxsto",
      ...parsed,
      fetchedAt: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json(
      { error: "GitHub contribution data is temporarily unavailable." },
      { status: 502 },
    );
  }
}
