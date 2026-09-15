import { TrainStop, ROUTE_STATIONS } from '../data/trains';

interface Props {
  stops: TrainStop[];
}

export function StationTimeline({ stops }: Props) {
  return (
    <div className="flex flex-col">
      {stops.map((stop, idx) => {
        const station = ROUTE_STATIONS.find(s => s.code === stop.stationCode);
        const isFirst = idx === 0;
        const isLast = idx === stops.length - 1;
        const isPassed = stop.status === 'passed';
        const isCurrent = stop.status === 'current';
        const isTerminus = stop.status === 'terminus';

        return (
          <div key={stop.stationCode} className="flex gap-3">
            {/* Timeline column */}
            <div className="flex flex-col items-center w-6 flex-shrink-0">
              {!isFirst && (
                <div className={`w-0.5 h-3 ${isPassed ? 'bg-emerald-500' : 'bg-slate-200'}`} />
              )}
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0
                ${isPassed ? 'bg-emerald-500 border-emerald-500' :
                  isCurrent ? 'bg-blue-900 border-blue-900 ring-2 ring-blue-200' :
                  isTerminus ? 'bg-blue-900 border-blue-900' :
                  'bg-white border-slate-300'}`}>
                {isPassed && <span className="text-white text-[8px]">✓</span>}
                {isCurrent && <span className="w-2 h-2 bg-white rounded-full block" />}
                {isTerminus && <span className="text-white text-[8px]">⊙</span>}
              </div>
              {!isLast && (
                <div className={`w-0.5 flex-1 min-h-3 ${isPassed ? 'bg-emerald-500' : 'bg-slate-200'}`} />
              )}
            </div>

            {/* Station info */}
            <div className={`flex-1 pb-4 ${isFirst ? 'pt-0' : 'pt-1'}`}>
              <div className="flex items-start justify-between">
                <div>
                  <p className={`text-sm font-semibold ${isPassed ? 'text-slate-500' : isCurrent ? 'text-blue-900' : 'text-slate-800'}`}
                    style={{ fontFamily: 'Manrope, sans-serif' }}>
                    {station?.name || stop.stationCode}
                    {isCurrent && (
                      <span className="ml-2 text-[10px] font-bold text-blue-900 bg-blue-100 px-1.5 py-0.5 rounded-full animate-pulse">
                        MOVING
                      </span>
                    )}
                  </p>
                  <p className="text-[10px] text-slate-400">{stop.platform}</p>
                  {stop.status === 'passed' && (
                    <p className="text-[10px] text-emerald-600 font-medium">Passed signal</p>
                  )}
                  {isCurrent && (
                    <p className="text-[10px] text-blue-600 font-medium">Live coordinate sync</p>
                  )}
                </div>
                <div className="text-right flex-shrink-0 ml-2">
                  <p className={`text-sm font-bold ${isPassed ? 'text-slate-400' : 'text-slate-800'}`}
                    style={{ fontFamily: 'Manrope, sans-serif' }}>
                    {stop.expectedArrival || stop.scheduledArrival}
                  </p>
                  {stop.expectedArrival && stop.expectedArrival !== stop.scheduledArrival && (
                    <p className="text-[10px] text-red-500 line-through">{stop.scheduledArrival}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
