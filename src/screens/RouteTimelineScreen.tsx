import { AppHeader } from '../components/AppHeader';
import { ROUTE_STATIONS } from '../data/trains';

interface Props {
  onBack: () => void;
}

export function RouteTimelineScreen({ onBack }: Props) {
  const currentKm = 9.4;

  return (
    <div className="flex flex-col h-full overflow-y-auto bg-slate-50 pb-24">
      <AppHeader onBack={onBack} title="Route Timeline" />

      {/* Header info */}
      <div className="mx-4 mt-4 bg-blue-900 rounded-2xl p-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs text-blue-300 font-semibold">ACTIVE TRAIN TRACKER</p>
          <span className="text-[10px] text-emerald-400 font-bold bg-emerald-900/40 px-2 py-0.5 rounded-full">Live Feeds Active</span>
        </div>
        <p className="text-lg font-extrabold text-white mb-1" style={{ fontFamily: 'Manrope, sans-serif' }}>
          Chennai Central → Tiruvallur
        </p>
        <div className="flex gap-4">
          <div>
            <p className="text-[10px] text-blue-300">21 Stations</p>
            <p className="text-xs font-bold text-white">(Ordinary)</p>
          </div>
          <div>
            <p className="text-[10px] text-blue-300">Fast EMU</p>
            <p className="text-xs font-bold text-white">Express</p>
          </div>
          <div>
            <p className="text-[10px] text-blue-300">Avg</p>
            <p className="text-xs font-bold text-white">45m</p>
          </div>
        </div>
      </div>

      {/* Route type legend */}
      <div className="mx-4 mb-4 bg-white rounded-xl p-3 border border-slate-100 shadow-sm">
        <p className="text-[10px] text-slate-500 leading-relaxed">
          Station stops vary by train service. Fast vs. Slow EMU service stops differ significantly — check individual timetable.
        </p>
        <div className="flex gap-3 mt-2">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 bg-blue-900 rounded-full" />
            <span className="text-[10px] font-semibold text-slate-600">Fast Stop</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 bg-slate-400 rounded-full" />
            <span className="text-[10px] font-semibold text-slate-600">Regular Stop</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 bg-slate-200 rounded-full" />
            <span className="text-[10px] font-semibold text-slate-600">Halt Only</span>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="mx-4 bg-white rounded-2xl shadow-sm border border-slate-100 p-4 mb-4">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-bold text-slate-800">Full Route · All Stations</p>
          <span className="text-xs text-emerald-600 font-semibold">42.1 km</span>
        </div>

        {ROUTE_STATIONS.map((station, idx) => {
          const isPassed = station.km < currentKm;
          const isCurrent = station.km >= currentKm && station.km < currentKm + 2;
          const isFirst = idx === 0;
          const isLast = idx === ROUTE_STATIONS.length - 1;

          return (
            <div key={station.code} className="flex gap-3">
              <div className="flex flex-col items-center w-6 flex-shrink-0">
                {!isFirst && (
                  <div className={`w-0.5 h-3 ${isPassed ? 'bg-emerald-400' : 'bg-slate-200'}`} />
                )}
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0
                  ${station.type === 'major' ? 'w-5 h-5' : 'w-3.5 h-3.5'}
                  ${isPassed ? 'bg-emerald-500 border-emerald-500' :
                    isCurrent ? 'bg-blue-900 border-blue-900 ring-2 ring-blue-200 scale-110' :
                    isLast ? 'bg-blue-900 border-blue-900' :
                    station.type === 'major' ? 'bg-white border-blue-900' :
                    'bg-white border-slate-300'}`}>
                  {isPassed && <span className="text-white text-[8px]">✓</span>}
                  {isCurrent && <div className="w-2 h-2 bg-white rounded-full" />}
                </div>
                {!isLast && (
                  <div className={`w-0.5 flex-1 min-h-3 ${isPassed ? 'bg-emerald-400' : 'bg-slate-200'}`} />
                )}
              </div>

              <div className="flex-1 pb-3 pt-0.5">
                <div className="flex items-start justify-between">
                  <div>
                    <p className={`text-sm font-semibold ${isPassed ? 'text-slate-400' : isCurrent ? 'text-blue-900' : 'text-slate-800'}`}
                      style={{ fontFamily: 'Manrope, sans-serif' }}>
                      {station.name}
                      {isCurrent && (
                        <span className="ml-2 text-[9px] font-bold text-blue-900 bg-blue-100 px-1.5 py-0.5 rounded-full">
                          TRAIN NEARBY
                        </span>
                      )}
                    </p>
                    {station.platformInfo && (
                      <p className="text-[10px] text-slate-400">{station.platformInfo}</p>
                    )}
                  </div>
                  <div className="text-right flex-shrink-0 ml-2">
                    <span className="text-xs font-bold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                      {station.code}
                    </span>
                    <p className="text-[10px] text-slate-400 mt-0.5">{station.km} km</p>
                  </div>
                </div>

                {station.type === 'major' && (
                  <div className="flex gap-1.5 mt-1">
                    <span className="text-[9px] bg-blue-50 text-blue-700 border border-blue-200 px-1.5 py-0.5 rounded">Fast Stop</span>
                  </div>
                )}
                {station.type === 'halt' && (
                  <div className="flex gap-1.5 mt-1">
                    <span className="text-[9px] bg-slate-50 text-slate-500 border border-slate-200 px-1.5 py-0.5 rounded">Halt Only</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mx-4 mb-2">
        <p className="text-[10px] text-slate-400 text-center">
          ⓘ Station stops are per individual train service. Simulated route data.
        </p>
      </div>
    </div>
  );
}
