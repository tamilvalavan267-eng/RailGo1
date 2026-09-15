import { AppHeader } from '../components/AppHeader';
import { TRAINS } from '../data/trains';
import { StatusBadge } from '../components/StatusBadge';
import { TrainTypeBadge } from '../components/TrainTypeBadge';

interface Props {
  onBack: () => void;
  onSelectTrain: (train: (typeof TRAINS)[0]) => void;
}

export function StationScreen({ onBack, onSelectTrain }: Props) {
  return (
    <div className="flex flex-col h-full overflow-y-auto bg-slate-50 pb-24">
      <AppHeader onBack={onBack} title="Station Platform Guide" />

      {/* Station hero */}
      <div className="mx-4 mt-4 bg-blue-900 rounded-2xl p-4 mb-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-[10px] font-bold text-emerald-300">TERMINAL ACTIVE</span>
          <span className="ml-auto text-[10px] font-bold text-blue-200">MASS / MMC</span>
        </div>
        <p className="text-xl font-extrabold text-white mb-1" style={{ fontFamily: 'Manrope, sans-serif' }}>
          Chennai Central Suburban
        </p>
        <p className="text-blue-200 text-xs mb-0.5">Southern Railway · Chennai Division (Western Line)</p>
        <p className="text-blue-300 text-[10px]">📍 Moore Market Complex · Poonamallee High Rd Entry</p>
      </div>

      {/* Facility chips */}
      <div className="mx-4 grid grid-cols-3 gap-2 mb-4">
        {[
          { icon: '📊', label: 'Platforms', value: '1 to 4', sub: 'Suburban MMC' },
          { icon: '🔄', label: 'Interchange', value: 'Metro & MAS', sub: 'Central Lines' },
          { icon: '📱', label: 'UTS Paperless', value: 'QR Active', sub: 'All Entry Gates' },
        ].map(f => (
          <div key={f.label} className="bg-white rounded-xl p-3 shadow-sm border border-slate-100 text-center">
            <span className="text-lg">{f.icon}</span>
            <p className="text-[10px] text-slate-400 mt-1">{f.label}</p>
            <p className="text-xs font-bold text-slate-800">{f.value}</p>
            <p className="text-[9px] text-slate-400">{f.sub}</p>
          </div>
        ))}
      </div>

      {/* Departure tabs */}
      <div className="mx-4 mb-4">
        <div className="flex gap-2 mb-3">
          {['Departures (West)', 'Arrivals', 'Station Guide'].map((t, i) => (
            <span key={t}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold ${i === 0 ? 'bg-blue-900 text-white' : 'bg-white text-slate-500 border border-slate-200'}`}>
              {t}
            </span>
          ))}
        </div>

        <p className="text-xs font-bold text-slate-500 mb-2 flex items-center gap-2">
          <div className="w-2 h-2 bg-emerald-500 rounded-full" />
          Westbound Services · Corridor: Tiruvallur / A23
        </p>

        {TRAINS.map(train => (
          <button key={train.number} onClick={() => onSelectTrain(train)}
            className="w-full bg-white rounded-2xl shadow-sm border border-slate-100 p-4 mb-3 text-left">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <TrainTypeBadge type={train.type} />
                <span className="text-xs text-slate-500">EMU {train.number}</span>
              </div>
              <div className="flex items-center gap-2">
                <StatusBadge status={train.status} delay={train.delayMinutes} />
                <div className="bg-blue-900 text-white text-[10px] font-bold px-2 py-1 rounded-lg">
                  PF {train.platform.split(' ')[0]}
                </div>
              </div>
            </div>
            <p className="text-lg font-extrabold text-slate-800 mb-0.5" style={{ fontFamily: 'Manrope, sans-serif' }}>
              {train.expectedDeparture || train.departure}
            </p>
            <p className="text-sm font-semibold text-slate-600">{train.name}</p>
            <p className="text-[10px] text-slate-400 mt-0.5">
              Via {train.stops.slice(1, 4).map(s => s.stationCode).join(', ')}...
            </p>
            {train.runningStatus && (
              <p className="text-[10px] text-slate-500 mt-1 bg-slate-50 px-2 py-1 rounded">ℹ {train.runningStatus}</p>
            )}
          </button>
        ))}
      </div>

      {/* Platform Information Guide */}
      <div className="mx-4 bg-white rounded-2xl shadow-sm border border-slate-100 p-4 mb-4">
        <p className="text-sm font-bold text-slate-800 mb-3">Platform Information Guide</p>
        {[
          {
            pf: '1 & 2',
            title: 'Local Suburban Corridor',
            desc: 'Extended western platforms toward Avadi, Pattabiran, Military Siding, and Tiruvallur. Slow EMU trains.',
            stops: ['Avadi', 'Pattabiran', 'Tiruvallur'],
          },
          {
            pf: '3',
            title: 'Fast EMU & Long-Distance Suburban',
            desc: 'Arakkonam Fast EMUs and skip-stop Suburban. Express locals originate here.',
            stops: ['Fast Services', 'Arakkonam Jn'],
          },
          {
            pf: '4',
            title: 'Tiruvallur & Tirutti Locals',
            desc: 'Extended western boundary trains, direct connectivity for temple route passengers.',
            stops: [],
          },
        ].map(p => (
          <div key={p.pf} className="mb-4 pb-4 border-b border-slate-100 last:border-0 last:mb-0 last:pb-0">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-blue-900 text-white rounded-xl flex flex-col items-center justify-center flex-shrink-0">
                <p className="text-[8px] text-blue-300">PF</p>
                <p className="text-sm font-extrabold">{p.pf}</p>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">{p.title}</p>
                <p className="text-[10px] text-slate-500 mt-0.5 leading-relaxed">{p.desc}</p>
                {p.stops.length > 0 && (
                  <div className="flex gap-1 mt-1.5 flex-wrap">
                    {p.stops.map(s => (
                      <span key={s} className="text-[9px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">{s}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Station Amenities */}
      <div className="mx-4 bg-white rounded-2xl shadow-sm border border-slate-100 p-4 mb-4">
        <p className="text-sm font-bold text-slate-800 mb-3">Station Amenities</p>
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: '🛗', label: 'FOB & Escalator', sub: 'PF 1-4 Direct' },
            { icon: '💧', label: 'Water ATM', sub: 'Near Concourse' },
            { icon: '📱', label: 'ATVM Kiosks', sub: '6 Units Active' },
            { icon: '🛡', label: 'RPF Help Desk', sub: 'Gate 2 Entry (139)' },
          ].map(a => (
            <div key={a.label} className="flex items-center gap-2 p-2 bg-slate-50 rounded-xl">
              <span className="text-lg">{a.icon}</span>
              <div>
                <p className="text-xs font-semibold text-slate-700">{a.label}</p>
                <p className="text-[10px] text-slate-400">{a.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-4 mb-2">
        <p className="text-[10px] text-slate-400 text-center">
          ⓘ Simulated station schedule for passenger reference.
        </p>
      </div>
    </div>
  );
}
