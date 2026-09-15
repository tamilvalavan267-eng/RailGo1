import { Train } from '../data/trains';
import { AppHeader } from '../components/AppHeader';
import { StatusBadge } from '../components/StatusBadge';
import { TrainTypeBadge } from '../components/TrainTypeBadge';

interface Props {
  train: Train;
  onBack: () => void;
  onDelay: () => void;
}

export function LiveStatusScreen({ train, onBack, onDelay }: Props) {
  const progress = 35; // simulated progress %

  return (
    <div className="flex flex-col h-full overflow-y-auto bg-slate-50 pb-24">
      <AppHeader onBack={onBack} title="Active Train Tracker" />

      {/* Route + Status bar */}
      <div className="mx-4 mt-4 flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <TrainTypeBadge type={train.type} />
          <span className="text-sm font-bold text-slate-800" style={{ fontFamily: 'Manrope, sans-serif' }}>{train.number}</span>
          <span className="text-xs text-slate-400">· MMC | TRL</span>
        </div>
        <button className="text-xs font-semibold text-blue-700 border border-blue-200 px-2 py-1 rounded-lg">↻ Sync</button>
      </div>

      {/* Live position card */}
      <div className="mx-4 bg-white rounded-2xl shadow-sm border border-slate-100 p-4 mb-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <p className="text-[10px] font-bold text-emerald-600 tracking-widest">LIVE TRACK POSITION</p>
        </div>
        <p className="text-xl font-extrabold text-slate-900 mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>
          Between Pattaravakkam & Ambattur
        </p>

        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="bg-slate-50 rounded-xl p-3">
            <p className="text-[10px] text-slate-400">Speed & Flow</p>
            <p className="text-lg font-bold text-slate-800">~54 km/h</p>
            <p className="text-[10px] text-emerald-600 font-semibold">On Schedule</p>
          </div>
          <div className="bg-slate-50 rounded-xl p-3">
            <p className="text-[10px] text-slate-400">Tiruvallur ETA</p>
            <p className="text-lg font-bold text-slate-800">09:05 AM</p>
            <p className="text-[10px] text-emerald-600 font-semibold">On Time</p>
          </div>
        </div>

        <div className="bg-slate-50 rounded-xl p-3">
          <p className="text-[10px] text-slate-400">Signal Log: Chennai Div Block #4</p>
          <p className="text-xs text-slate-500 mt-0.5">Updated 45s ago</p>
        </div>
      </div>

      {/* Next halt */}
      <div className="mx-4 bg-emerald-600 rounded-2xl p-4 mb-4">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold text-emerald-100 bg-emerald-700 px-2 py-0.5 rounded">NEXT HALT · PF 1</span>
            </div>
            <p className="text-lg font-extrabold text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>Ambattur Railway Station</p>
            <p className="text-emerald-100 text-xs">08:44 AM</p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-extrabold text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>2m</p>
            <p className="text-emerald-200 text-[10px]">away</p>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mx-4 mb-4">
        <div className="flex items-center justify-between text-xs mb-1">
          <span className="font-semibold text-slate-600">MMC</span>
          <span className="text-slate-400">{progress}% complete</span>
          <span className="font-semibold text-slate-600">TRL</span>
        </div>
        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
          <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* Station tracking list */}
      <div className="mx-4 bg-white rounded-2xl shadow-sm border border-slate-100 p-4 mb-4">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-bold text-slate-800">MMC – TRL Fast Corridor</p>
          <span className="text-[10px] text-emerald-600 font-semibold">9 Stations Tracked</span>
        </div>
        <div className="flex flex-col gap-0">
          {train.stops.map((stop, idx) => {
            const isPassed = stop.status === 'passed';
            const isCurrent = stop.status === 'current';
            const isTerminus = stop.status === 'terminus';

            return (
              <div key={stop.stationCode} className="flex gap-3">
                <div className="flex flex-col items-center w-6">
                  {idx > 0 && <div className={`w-0.5 h-2 ${isPassed ? 'bg-emerald-500' : 'bg-slate-200'}`} />}
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0
                    ${isPassed ? 'bg-emerald-500 border-emerald-500' :
                      isCurrent ? 'bg-blue-900 border-blue-900 ring-2 ring-blue-200' :
                      isTerminus ? 'bg-blue-700 border-blue-700' :
                      'bg-white border-slate-300'}`}>
                    {isPassed && <span className="text-white text-[8px]">✓</span>}
                    {isCurrent && <div className="w-2 h-2 bg-white rounded-full" />}
                    {isTerminus && <span className="text-white text-[8px]">⊙</span>}
                  </div>
                  {idx < train.stops.length - 1 && (
                    <div className={`w-0.5 h-2 flex-shrink-0 ${isPassed ? 'bg-emerald-500' : 'bg-slate-200'}`} />
                  )}
                </div>
                <div className="flex-1 py-1.5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`text-xs font-semibold ${isPassed ? 'text-slate-400' : isCurrent ? 'text-blue-900' : 'text-slate-700'}`}>
                        {stop.stationCode}
                        {isCurrent && <span className="ml-1 text-[9px] bg-blue-100 text-blue-700 px-1 rounded">Many Interchange</span>}
                      </p>
                      {isPassed && <p className="text-[10px] text-slate-400">Departed on schedule</p>}
                      {isCurrent && <p className="text-[10px] text-blue-500 font-semibold animate-pulse">Moving</p>}
                    </div>
                    <p className={`text-xs font-bold ${isPassed ? 'text-slate-400' : isCurrent ? 'text-red-500' : 'text-slate-700'}`}>
                      {stop.expectedArrival || stop.scheduledArrival}
                    </p>
                  </div>
                  {stop.platform && (
                    <p className="text-[10px] text-slate-400">{stop.platform}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Rake composition */}
      <div className="mx-4 bg-white rounded-2xl shadow-sm border border-slate-100 p-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-bold text-slate-800">Rake Composition & Amenities</p>
          <span className="text-xs text-slate-500">12-Car Rake</span>
        </div>
        <div className="flex gap-1 flex-wrap mb-2">
          {Array.from({ length: 12 }, (_, i) => i + 1).map(n => (
            <div key={n}
              className={`w-7 h-7 rounded flex items-center justify-center text-[10px] font-bold
                ${n === 2 || n === 11 ? 'bg-pink-100 text-pink-700 border border-pink-300' :
                  n === 1 || n === 12 ? 'bg-blue-900 text-white' :
                  'bg-slate-100 text-slate-600 border border-slate-200'}`}>
              {n}
            </div>
          ))}
        </div>
        <p className="text-[10px] text-pink-600">● Ladies Coach (2nd & 11th)</p>
        <p className="text-[10px] text-slate-500 mt-0.5">● General Coaches</p>
      </div>

      {/* Action buttons */}
      <div className="mx-4 flex gap-3 mb-4">
        <button onClick={onDelay}
          className="flex-1 bg-slate-100 text-slate-700 py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2"
          style={{ fontFamily: 'Manrope, sans-serif' }}>
          👥 View Delay Details
        </button>
        <button className="flex-1 bg-blue-50 text-blue-900 border border-blue-200 py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2"
          style={{ fontFamily: 'Manrope, sans-serif' }}>
          ↗ Share Live Run
        </button>
      </div>

      <div className="mx-4 mb-2">
        <p className="text-[10px] text-slate-400 text-center leading-relaxed">
          ⓘ Simulated passenger demo tracker based on Chennai suburban railway schedule logs.
          For official announcements and platform updates, refer Southern Railway display boards.
        </p>
      </div>
    </div>
  );
}
