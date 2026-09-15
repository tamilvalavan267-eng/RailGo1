export function getDelayLabel(delayMinutes: number = 0): string {
  if (delayMinutes <= 0) {
    return "On Time";
  }

  return `Delayed ${delayMinutes} min`;
}

export function getDelayReasonLabel(reason?: string): string {
  if (!reason) {
    return "Information unavailable";
  }

  return reason;
}