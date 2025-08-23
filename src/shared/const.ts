const Status =  {
  Done: "done",
  Warning: "warning",
  Problem: "problem",
  Critical: "critical",
} as const;

export type Status = typeof Status[keyof typeof Status];
