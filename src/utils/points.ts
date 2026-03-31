export function getSeasonStartDate(date: Date = new Date()): Date {
  const y = date.getFullYear();
  // Meteorological seasons: Mar 1, Jun 1, Sep 1, Dec 1
  // Confirmed by task: "October 2 is the 32nd day of autumn" => Sep 1 start
  const seasons = [
    new Date(y - 1, 11, 1), // prev winter Dec 1
    new Date(y, 2, 1),      // spring Mar 1
    new Date(y, 5, 1),      // summer Jun 1
    new Date(y, 8, 1),      // autumn Sep 1
    new Date(y, 11, 1),     // winter Dec 1
  ];
  let start = seasons[0];
  for (const s of seasons) {
    if (date >= s) start = s;
  }
  return start;
}

export function getSeasonDay(date: Date = new Date()): number {
  const start = getSeasonStartDate(date);
  return Math.floor((date.getTime() - start.getTime()) / 86400000) + 1;
}

export function calcDailyPoints(n: number): number {
  if (n <= 0) return 0;
  if (n === 1) return 2;
  if (n === 2) return 3;
  let prev2 = 2, prev1 = 3;
  for (let i = 3; i <= n; i++) {
    const curr = Math.round(prev2 + 0.6 * prev1);
    prev2 = prev1;
    prev1 = curr;
  }
  return prev1;
}

export function formatPoints(p: number): string {
  return p >= 1000 ? Math.round(p / 1000) + 'K' : String(p);
}
