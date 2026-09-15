import { Train } from '../data/trains';
import { AppHeader } from '../components/AppHeader';
import { StatusBadge } from '../components/StatusBadge';
import { TrainTypeBadge } from '../components/TrainTypeBadge';
import { StationTimeline } from '../components/StationTimeline';

interface Props {
  train: Train;
  onBack: () => void;
  onTrackLive: () => void;
  onRoute: () => void;
  onDelay: () => void;
}

export function TrainDetailsScreen({ train, onBack, onTrackLive, onRoute, onDelay }: Props) {
  return (
    <div className="flex flex-col h-full overflow-y-auto bg-slate-50 pb-24">
      <AppHeader onBack={onBack} title="Train Details" />

      {/* Train header card */}
      <div className="mx-4 mt-4 bg-white rounded-2xl shadow-sm border border-slate-100 p-4 mb-4">
        <div className="flex items-start justify-between mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <TrainTypeBadge type={train.type} />
              <span className="text-base font-extrabold text-slate-800" style={{ fontFamily: 'Manrope, sans-serif' }}>
                {train.number}
              </span>
            </div>
            <p className="text-sm text-slate-600">{train.name}</p>
          </div>
          <StatusBadge status={train.status} delay={train.delayMinutes} />
        </div>

        {/* Route */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex-1 bg-slate-50 rounded-xl p-2.5">
            <p className="text-[10px] text-slate-400">FROM</p>
            <p className="text-sm font-bold text-slate-800">{train.fromCode}</p>
            <p className="text-[10px] text-slate-500">{train.from}</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-slate-300 text-lg">→</span>
            <span className="text-[10px] text-slate-400">{train.duration}</span>
          </div>
          <div className="flex-1 bg-slate-50 rounded-xl p-2.5 text-right">
            <p className="text-[10px] text-slate-400">TO</p>
            <p className="text-sm font-bold text-slate-800">{train.toCode}</p>
            <p className="text-[10px] text-slate-500">{train.to}</p>
          </div>
        </div>

        {/* Time grid */}
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="bg-slate-50 rounded-xl p-3">
            <p className="text-[10px] text-slate-400 mb-1">SCHEDULED DEPARTURE</p>
            <p className="text-lg font-extrabold text-slate-800" style={{ fontFamily: 'Manrope, sans-serif' }}>{train.departure}</p>
          </div>
          <div className="bg-slate-50 rounded-xl p-3">
            <p className="text-[10px] text-slate-400 mb-1">EXPECTED DEPARTURE</p>
            <p className={`text-lg font-extrabold ${train.delayMinutes > 0 ? 'text-red-600' : 'text-emerald-600'}`}
              style={{ fontFamily: 'Manrope, sans-serif' }}>
              {train.expectedDeparture || train.departure}
            </p>
          </div>
          <div className="bg-slate-50 rounded-xl p-3">
            <p className="text-[10px] text-slate-400 mb-1">SCHEDULED ARRIVAL</p>
            <p className="text-lg font-extrabold text-slate-800" style={{ fontFamily: 'Manrope, sans-serif' }}>{train.arrival}</p>
          </div>
          <div className="bg-slate-50 rounded-xl p-3">
            <p className="text-[10px] text-slate-400 mb-1">EXPECTED ARRIVAL</p>
            <p className={`text-lg font-extrabold ${train.delayMinutes > 0 ? 'text-red-600' : 'text-emerald-600'}`}
              style={{ fontFamily: 'Manrope, sans-serif' }}>
              {train.expectedArrival || train.arrival}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex-1 bg-blue-50 rounded-xl p-3">
            <p className="text-[10px] text-blue-500 mb-0.5">PLATFORM</p>
            <p className="text-sm font-bold text-blue-900">PF {train.platform}</p>
          </div>
          <div className="flex-1 bg-slate-50 rounded-xl p-3">
            <p className="text-[10px] text-slate-400 mb-0.5">DURATION</p>
            <p className="text-sm font-bold text-slate-800">{train.duration}</p>
          </div>
          <div className="flex-1 bg-slate-50 rounded-xl p-3">
            <p className="text-[10px] text-slate-400 mb-0.5">COACHES</p>
            <p className="text-sm font-bold text-slate-800">{train.coaches}-Car</p>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="mx-4 flex gap-3 mb-4">
        <button onClick={onTrackLive}
          className="flex-1 bg-blue-900 text-white py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2"
          style={{ fontFamily: 'Manrope, sans-serif' }}>
          📡 Track Live
        </button>
        <button onClick={onRoute}
          className="flex-1 bg-white text-blue-900 border-2 border-blue-900 py-3.5 rounded-2xl font-bold text-sm"
          style={{ fontFamily: 'Manrope, sans-serif' }}>
          🗺 Route
        </button>
      </div>

      {train.delayMinutes > 0 && (
        <div className="mx-4 mb-4">
          <button onClick={onDelay}
            className="w-full bg-red-50 border border-red-200 rounded-2xl p-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-red-500 text-lg">⏱</span>
              <div className="text-left">
                <p className="text-sm font-bold text-red-700">+{train.delayMinutes} min Delay</p>
                <p className="text-xs text-red-500">{train.delayReason || 'View delay details'}</p>
              </div>
            </div>
            <span className="text-red-400">›</span>
          </button>
        </div>
      )}

      {/* Route Timeline */}
      <div className="mx-4 bg-white rounded-2xl shadow-sm border border-slate-100 p-4 mb-4">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-bold text-slate-800" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Route Timeline
          </p>
          <span className="text-[10px] text-slate-500">{train.stopCount} Stops</span>
        </div>
        <StationTimeline stops={train.stops} />
      </div>

      <div className="mx-4 mb-2">
        <p className="text-[10px] text-slate-400 text-center">
          ⓘ Simulated demo schedule. Not official railway data.
        </p>
      </div>
    </div>
  );
}
