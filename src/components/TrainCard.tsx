import { Train } from '../data/trains';
import { StatusBadge } from './StatusBadge';
import { TrainTypeBadge } from './TrainTypeBadge';

interface Props {
  train: Train;
  onSelect: (train: Train) => void;
  onTrackLive?: (train: Train) => void;
}

export function TrainCard({ train, onSelect, onTrackLive }: Props) {
  const isDelayed = train.status === 'delayed';

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden mb-3">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-3 pb-2">
        <div className="flex items-center gap-2">
          <TrainTypeBadge type={train.type} />
          <span className="text-sm font-bold text-slate-800" style={{ fontFamily: 'Manrope, sans-serif' }}>{train.number}</span>
        </div>
        <StatusBadge status={train.status} delay={train.delayMinutes} />
      </div>

      <div className="px-4 pb-1">
        <p className="text-xs text-slate-500">{train.name}</p>
      </div>

      {/* Time row */}
      <div className="flex items-center px-4 py-2 gap-3">
        <div className="flex-1">
          <p className="text-2xl font-extrabold text-slate-900" style={{ fontFamily: 'Manrope, sans-serif' }}>
            {train.departure}
          </p>
          {isDelayed && train.expectedDeparture && (
            <p className="text-xs text-red-500 font-semibold">{train.expectedDeparture}</p>
          )}
          <p className="text-xs text-slate-400 mt-0.5">{train.fromCode} · {train.from.split('(')[0].trim()}</p>
        </div>

        <div className="flex flex-col items-center flex-shrink-0">
          <p className="text-xs text-slate-500 font-medium">{train.duration}</p>
          <div className="flex items-center gap-1 my-1">
            <div className="w-12 h-px bg-slate-300" />
            <div className="w-2 h-2 rounded-full bg-slate-400" />
            <div className="w-12 h-px bg-slate-300" />
          </div>
          <p className="text-[10px] text-slate-400">All {train.stopCount} Stops</p>
        </div>

        <div className="flex-1 text-right">
          <p className="text-2xl font-extrabold text-slate-900" style={{ fontFamily: 'Manrope, sans-serif' }}>
            {isDelayed ? train.expectedArrival || train.arrival : train.arrival}
          </p>
          {isDelayed && (
            <p className="text-xs text-red-500 font-semibold line-through">{train.arrival}</p>
          )}
          <p className="text-xs text-slate-400 mt-0.5">{train.toCode} · Tiruvallur</p>
        </div>
      </div>

      {/* Status note */}
      {train.runningStatus && (
        <div className="mx-4 mb-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100">
          <p className="text-xs text-slate-600">
            {isDelayed ? '⚠ ' : '✓ '}{train.runningStatus}
          </p>
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center gap-2 px-4 py-3 border-t border-slate-100">
        <div className="flex items-center gap-1.5 flex-1">
          <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2 py-1 rounded">
            📍 Platform {train.platform}
          </span>
          {isDelayed && (
            <span className="text-xs font-semibold text-red-500 bg-red-50 px-2 py-1 rounded">
              🔔 Delay Alert
            </span>
          )}
        </div>
        <div className="flex gap-2">
          {train.status === 'on-time' && onTrackLive && (
            <button
              onClick={(e) => { e.stopPropagation(); onTrackLive(train); }}
              className="flex items-center gap-1 text-xs font-semibold text-blue-900 border border-blue-900 px-3 py-1.5 rounded-xl"
            >
              📡 Track Live
            </button>
          )}
          <button
            onClick={() => onSelect(train)}
            className="text-xs font-semibold text-blue-700 border border-blue-200 bg-blue-50 px-3 py-1.5 rounded-xl"
          >
            Details ›
          </button>
        </div>
      </div>
    </div>
  );
}
