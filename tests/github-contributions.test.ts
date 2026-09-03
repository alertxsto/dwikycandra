import assert from "node:assert/strict";
import test from "node:test";
import { parseContributionHtml } from "../src/lib/github-contributions.ts";

const fixture = `
  <table>
    <tr>
      <td data-date="2026-01-04" id="contribution-day-component-0-1" data-level="0" class="ContributionCalendar-day"></td>
      <tool-tip for="contribution-day-component-0-1">No contributions on January 4th.</tool-tip>
      <td data-date="2026-01-05" id="contribution-day-component-0-2" data-level="3" class="ContributionCalendar-day"></td>
      <tool-tip for="contribution-day-component-0-2">8 contributions on January 5th.</tool-tip>
    </tr>
  </table>
  <h2>8 contributions in the last year</h2>
`;

test("parses contribution cells and counts from GitHub HTML", () => {
  assert.deepEqual(parseContributionHtml(fixture), {
    total: 8,
    contributions: [
      { date: "2026-01-04", count: 0, level: 0 },
      { date: "2026-01-05", count: 8, level: 3 },
    ],
  });
});
