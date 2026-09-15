export interface Station {
  name: string;
  code: string;
  km: number;
  type: 'major' | 'regular' | 'halt';
  platformInfo?: string;
}

export interface TrainStop {
  stationCode: string;
  scheduledArrival: string;
  scheduledDeparture: string;
  expectedArrival?: string;
  expectedDeparture?: string;
  platform: string;
  status: 'passed' | 'current' | 'upcoming' | 'terminus';
  halted?: boolean;
}

export interface Train {
  number: string;
  name: string;
  type: 'FAST EMU' | 'SLOW LOCAL' | 'ARAKKONAM LOCAL' | 'EXPRESS EMU';
  from: string;
  fromCode: string;
  to: string;
  toCode: string;
  departure: string;
  arrival: string;
  duration: string;
  platform: string;
  status: 'on-time' | 'delayed' | 'cancelled' | 'regulated';
  delayMinutes: number;
  expectedDeparture?: string;
  expectedArrival?: string;
  stops: TrainStop[];
  currentStation?: string;
  nextStation?: string;
  runningStatus?: string;
  coaches: number;
  stopCount: number;
  delayReason?: string;
  delayReasonType?: 'confirmed' | 'estimated' | 'unavailable';
}

export const ROUTE_STATIONS: Station[] = [
  { name: 'Chennai Central (MMC)', code: 'MMC', km: 0, type: 'major', platformInfo: 'PF 1-4 Suburban Terminal' },
  { name: 'Basin Bridge Junction', code: 'BBQ', km: 3.2, type: 'major', platformInfo: 'Main Line Junction' },
  { name: 'Vyasarpadi Jeeva', code: 'VPY', km: 5.0, type: 'regular' },
  { name: 'Perambur', code: 'PER', km: 6.9, type: 'major', platformInfo: 'Mac & Express Hub' },
  { name: 'Perambur Carriage Works', code: 'PCW', km: 7.9, type: 'halt' },
  { name: 'Villivakkam', code: 'VLK', km: 9.4, type: 'major', platformInfo: 'Fast EMU Stop' },
  { name: 'Korattur', code: 'KOT', km: 10.3, type: 'regular' },
  { name: 'Pattaravakkam Passing', code: 'PAV', km: 11.4, type: 'halt' },
  { name: 'Ambattur', code: 'ABU', km: 15.4, type: 'major', platformInfo: 'Fast EMU Stop, AI Corridors' },
  { name: 'Thiruninravur', code: 'TNP', km: 17.1, type: 'major', platformInfo: 'Local suburban hub' },
  { name: 'Avadi', code: 'AVD', km: 31.2, type: 'major', platformInfo: 'Platforms 1-4' },
  { name: 'Nemilicherry', code: 'NEM', km: 34.0, type: 'regular' },
  { name: 'Thiruninravur Ti', code: 'TIN', km: 37.2, type: 'regular' },
  { name: 'Veppampattu', code: 'VPT', km: 32.4, type: 'regular' },
  { name: 'Sevvapet Road', code: 'SVR', km: 36.7, type: 'regular' },
  { name: 'Putlur', code: 'PUT', km: 36.9, type: 'halt' },
  { name: 'Tiruvallur', code: 'TRL', km: 42.1, type: 'major', platformInfo: 'Freight Yard, All Sections' },
];

export const TRAINS: Train[] = [
  {
    number: '43215',
    name: 'Fast EMU · Tiruvallur Direct',
    type: 'FAST EMU',
    from: 'Chennai Central (MMC)',
    fromCode: 'MMC',
    to: 'Tiruvallur',
    toCode: 'TRL',
    departure: '08:15 AM',
    arrival: '09:05 AM',
    duration: '50 min',
    platform: '3 (MMC)',
    status: 'on-time',
    delayMinutes: 0,
    expectedDeparture: '08:15 AM',
    expectedArrival: '09:05 AM',
    coaches: 12,
    stopCount: 7,
    currentStation: 'Villivakkam',
    nextStation: 'Ambattur',
    runningStatus: 'Departed 4 mins ago · Approaching Basin Bridge',
    stops: [
      { stationCode: 'MMC', scheduledArrival: '--', scheduledDeparture: '08:15 AM', platform: 'PF 3', status: 'passed' },
      { stationCode: 'BBQ', scheduledArrival: '08:20 AM', scheduledDeparture: '08:20 AM', platform: 'Main', status: 'passed' },
      { stationCode: 'PER', scheduledArrival: '08:26 AM', scheduledDeparture: '08:27 AM', platform: 'PF 2', status: 'passed' },
      { stationCode: 'VLK', scheduledArrival: '08:33 AM', scheduledDeparture: '08:33 AM', platform: 'PF 1', status: 'current', halted: false },
      { stationCode: 'ABU', scheduledArrival: '08:44 AM', scheduledDeparture: '08:44 AM', platform: 'PF 1', status: 'upcoming' },
      { stationCode: 'AVD', scheduledArrival: '08:52 AM', scheduledDeparture: '08:52 AM', platform: 'PF 3', status: 'upcoming' },
      { stationCode: 'TNP', scheduledArrival: '09:00 AM', scheduledDeparture: '09:00 AM', platform: 'PF 2', status: 'upcoming' },
      { stationCode: 'TRL', scheduledArrival: '09:05 AM', scheduledDeparture: '--', platform: 'PF 1', status: 'terminus' },
    ],
  },
  {
    number: '43217',
    name: 'Tiruvallur Local Slow Suburban',
    type: 'SLOW LOCAL',
    from: 'Chennai Central (MMC)',
    fromCode: 'MMC',
    to: 'Tiruvallur',
    toCode: 'TRL',
    departure: '08:35 AM',
    arrival: '09:35 AM',
    duration: '60 min',
    platform: '4',
    status: 'on-time',
    delayMinutes: 0,
    expectedDeparture: '08:35 AM',
    expectedArrival: '09:35 AM',
    coaches: 12,
    stopCount: 17,
    runningStatus: 'Boarding in 12 mins · Platform Rake Placed',
    stops: [
      { stationCode: 'MMC', scheduledArrival: '--', scheduledDeparture: '08:35 AM', platform: 'PF 4', status: 'upcoming' },
      { stationCode: 'BBQ', scheduledArrival: '08:40 AM', scheduledDeparture: '08:40 AM', platform: 'Main', status: 'upcoming' },
      { stationCode: 'VPY', scheduledArrival: '08:44 AM', scheduledDeparture: '08:44 AM', platform: 'PF 1', status: 'upcoming' },
      { stationCode: 'PER', scheduledArrival: '08:48 AM', scheduledDeparture: '08:49 AM', platform: 'PF 2', status: 'upcoming' },
      { stationCode: 'PCW', scheduledArrival: '08:52 AM', scheduledDeparture: '08:52 AM', platform: 'PF 1', status: 'upcoming' },
      { stationCode: 'VLK', scheduledArrival: '08:56 AM', scheduledDeparture: '08:56 AM', platform: 'PF 1', status: 'upcoming' },
      { stationCode: 'KOT', scheduledArrival: '09:00 AM', scheduledDeparture: '09:00 AM', platform: 'PF 1', status: 'upcoming' },
      { stationCode: 'ABU', scheduledArrival: '09:06 AM', scheduledDeparture: '09:06 AM', platform: 'PF 2', status: 'upcoming' },
      { stationCode: 'TNP', scheduledArrival: '09:12 AM', scheduledDeparture: '09:12 AM', platform: 'PF 1', status: 'upcoming' },
      { stationCode: 'AVD', scheduledArrival: '09:20 AM', scheduledDeparture: '09:20 AM', platform: 'PF 2', status: 'upcoming' },
      { stationCode: 'NEM', scheduledArrival: '09:24 AM', scheduledDeparture: '09:24 AM', platform: 'PF 1', status: 'upcoming' },
      { stationCode: 'VPT', scheduledArrival: '09:28 AM', scheduledDeparture: '09:28 AM', platform: 'PF 1', status: 'upcoming' },
      { stationCode: 'SVR', scheduledArrival: '09:32 AM', scheduledDeparture: '09:32 AM', platform: 'PF 1', status: 'upcoming' },
      { stationCode: 'PUT', scheduledArrival: '09:34 AM', scheduledDeparture: '09:34 AM', platform: 'PF 1', status: 'upcoming' },
      { stationCode: 'TRL', scheduledArrival: '09:35 AM', scheduledDeparture: '--', platform: 'PF 3', status: 'terminus' },
    ],
  },
  {
    number: '43219',
    name: 'Arakkonam Local',
    type: 'ARAKKONAM LOCAL',
    from: 'Chennai Central (MMC)',
    fromCode: 'MMC',
    to: 'Tiruvallur',
    toCode: 'TRL',
    departure: '08:50 AM',
    arrival: '09:52 AM',
    duration: '62 min',
    platform: '2',
    status: 'delayed',
    delayMinutes: 8,
    expectedDeparture: '08:58 AM',
    expectedArrival: '10:00 AM',
    coaches: 12,
    stopCount: 12,
    runningStatus: 'Signal Clearance at Vyasarpadi Yard',
    delayReason: 'Track Congestion & Platform Clearance at Vyasarpadi Junction',
    delayReasonType: 'confirmed',
    stops: [
      { stationCode: 'MMC', scheduledArrival: '--', scheduledDeparture: '08:50 AM', expectedDeparture: '08:58 AM', platform: 'PF 2', status: 'upcoming' },
      { stationCode: 'BBQ', scheduledArrival: '08:55 AM', expectedArrival: '09:03 AM', scheduledDeparture: '08:55 AM', platform: 'Main', status: 'upcoming' },
      { stationCode: 'PER', scheduledArrival: '09:02 AM', expectedArrival: '09:10 AM', scheduledDeparture: '09:02 AM', platform: 'PF 1', status: 'upcoming' },
      { stationCode: 'VLK', scheduledArrival: '09:10 AM', expectedArrival: '09:18 AM', scheduledDeparture: '09:10 AM', platform: 'PF 1', status: 'upcoming' },
      { stationCode: 'ABU', scheduledArrival: '09:22 AM', expectedArrival: '09:30 AM', scheduledDeparture: '09:22 AM', platform: 'PF 1', status: 'upcoming' },
      { stationCode: 'TNP', scheduledArrival: '09:30 AM', expectedArrival: '09:38 AM', scheduledDeparture: '09:30 AM', platform: 'PF 1', status: 'upcoming' },
      { stationCode: 'AVD', scheduledArrival: '09:40 AM', expectedArrival: '09:48 AM', scheduledDeparture: '09:40 AM', platform: 'PF 2', status: 'upcoming' },
      { stationCode: 'TRL', scheduledArrival: '09:52 AM', expectedArrival: '10:00 AM', scheduledDeparture: '--', platform: 'PF 2', status: 'terminus' },
    ],
  },
  {
    number: '43221',
    name: 'Arakkonam Fast Suburban',
    type: 'FAST EMU',
    from: 'Chennai Central (MMC)',
    fromCode: 'MMC',
    to: 'Tiruvallur',
    toCode: 'TRL',
    departure: '09:10 AM',
    arrival: '10:00 AM',
    duration: '50 min',
    platform: '3',
    status: 'on-time',
    delayMinutes: 0,
    expectedDeparture: '09:10 AM',
    expectedArrival: '10:00 AM',
    coaches: 12,
    stopCount: 5,
    runningStatus: 'In 40 mins · Platform Fixed',
    stops: [
      { stationCode: 'MMC', scheduledArrival: '--', scheduledDeparture: '09:10 AM', platform: 'PF 3', status: 'upcoming' },
      { stationCode: 'PER', scheduledArrival: '09:22 AM', scheduledDeparture: '09:22 AM', platform: 'PF 1', status: 'upcoming' },
      { stationCode: 'VLK', scheduledArrival: '09:30 AM', scheduledDeparture: '09:30 AM', platform: 'PF 1', status: 'upcoming' },
      { stationCode: 'ABU', scheduledArrival: '09:38 AM', scheduledDeparture: '09:38 AM', platform: 'PF 1', status: 'upcoming' },
      { stationCode: 'AVD', scheduledArrival: '09:48 AM', scheduledDeparture: '09:48 AM', platform: 'PF 3', status: 'upcoming' },
      { stationCode: 'TRL', scheduledArrival: '10:00 AM', scheduledDeparture: '--', platform: 'PF 3', status: 'terminus' },
    ],
  },
];

export const STATION_DETAILS = {
  name: 'Chennai Central Suburban',
  code: 'MMC',
  fullName: 'Moore Market Complex',
  zone: 'Southern Railway · Chennai Division',
  address: 'Poonamallee High Rd Entry',
  platforms: 4,
  interchange: 'Metro & MAS Central Lines',
  facilities: ['FOB & Escalator', 'Water ATM', 'ATVM Kiosks', 'RPF Help Desk'],
  upcomingTrains: TRAINS.slice(0, 4),
};

export const NOTIFICATIONS = [
  {
    id: 1,
    type: 'approaching',
    title: 'Train Approaching',
    subtitle: 'EMU 43215 approaching Ambattur',
    body: 'Expected at Platform 1 in under 2 minutes. Prepare to deboard if traveling to Ambattur IT park corridor.',
    time: 'Just now',
    platform: 'PF 1 · AMBATTUR',
    read: false,
    actionLabel: null,
  },
  {
    id: 2,
    type: 'delay',
    title: 'Train Delay Alert',
    subtitle: 'EMU 43219 running 18 mins late',
    body: 'Your saved train from Chennai Central to Tiruvallur is held at Vyasarpadi Yard due to track congestion. Revised departure: 09:00 AM.',
    time: '5 mins ago',
    platform: null,
    read: false,
    actionLabel: 'Find Alternatives',
  },
  {
    id: 3,
    type: 'platform',
    title: 'Platform Change',
    subtitle: 'Platform Confirmed: Platform 4 (MMC)',
    body: 'EMU 43217 to Tiruvallur (08:35 AM) is now placed at Platform 4. 12-car rake is positioned and ready for boarding.',
    time: '12 mins ago',
    platform: 'PF 4 · Moore Market Complex (Suburban)',
    read: false,
    actionLabel: null,
  },
  {
    id: 4,
    type: 'journey',
    title: 'Journey Tracker',
    subtitle: 'EMU 43215 Departed Chennai Central',
    body: 'Departed right on schedule from PF 3 at 08:15 AM. Next scheduled stop: Basin Bridge Junction.',
    time: '30 mins ago',
    platform: null,
    read: true,
    actionLabel: null,
  },
  {
    id: 5,
    type: 'service',
    title: 'Service Notice',
    subtitle: 'Sunday Line Maintenance Block Notice',
    body: 'Southern Railway scheduled maintenance block between Avadi & Pattabiram on Sunday 10:00 AM to 02:00 PM. Select slow services will run diverted via fast line.',
    time: '2 hours ago',
    platform: null,
    read: true,
    actionLabel: null,
  },
];
