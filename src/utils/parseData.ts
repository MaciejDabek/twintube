import { formatDistanceToNowStrict, parseISO } from "date-fns";

export function parseDuration(duration: string): string {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

  if (!match) return "";

  const hours = match[1] ? match[1].slice(0, -1) : "";
  const minutes = match[2] ? match[2].slice(0, -1) : "0";
  const seconds = match[3] ? match[3].slice(0, -1) : "0";

  if (hours)
    return `${hours}:${minutes.padStart(2, "0")}:${seconds.padStart(2, "0")}`;

  return `${minutes}:${seconds.padStart(2, "0")}`;
}

export function parsePublishedDate(publishedString: string): string {
  const publishedDate = parseISO(publishedString);

  return formatDistanceToNowStrict(publishedDate, { addSuffix: true });
}

export function parseViews(viewsString: string): string {
  const numViews = parseInt(viewsString);

  const millions = numViews / 1_000_000;
  if (millions >= 10) return `${millions.toFixed(0)}M views`;
  if (millions >= 1) return `${millions.toFixed(1)}M views`;

  const thousands = numViews / 1_000;
  if (thousands >= 10) return `${thousands.toFixed(0)}K views`;
  if (thousands >= 1) return `${thousands.toFixed(1)}K views`;

  return `${numViews} views`;
}
