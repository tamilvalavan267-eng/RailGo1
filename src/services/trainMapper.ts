import { Train } from '../data/trains';

export function mapSupabaseTrain(row: any): Train {
  const delayMinutes = Number(row.delay_minutes ?? 0);

  return {
    number: String(row.train_number ?? ''),
    name: row.train_name ?? '',
    type: 'FAST EMU',
    from: row.source ?? '',
    fromCode: '',
    to: row.destination ?? '',
    toCode: '',
    departure: row.departure ?? '',
    arrival: row.arrival ?? '',
    duration: '',
    platform: row.platform ?? '',
    status:
      row.status?.toLowerCase() === 'cancelled'
        ? 'cancelled'
        : delayMinutes > 0
          ? 'delayed'
          : 'on-time',
    delayMinutes,
    expectedDeparture: row.departure ?? '',
    expectedArrival: row.arrival ?? '',
    coaches: 12,
    stopCount: 0,
    currentStation: row.current_station ?? '',
    runningStatus: delayMinutes > 0
      ? `Delayed by ${delayMinutes} minutes`
      : 'Running on time',
    delayReason: row.delay_reason ?? 'Information unavailable',
    delayReasonType: row.delay_reason
      ? 'confirmed'
      : 'unavailable',
    stops: [],
  };
}