import { Train } from '../data/trains';
import { AppHeader } from '../components/AppHeader';
import { TrainTypeBadge } from '../components/TrainTypeBadge';

interface Props {
  train: Train;
  onBack: () => void;
}

export function DelayScreen({ train, onBack }: Props) {
  return (
    <div className="flex flex-col h-full overflow-y-auto bg-slate-50 pb-24">
      <AppHeader onBack={onBack} title="Active Train Tracker" />

      {/* Header */}
      <div className="mx-4 mt-4 flex items-center gap-2 mb-3">
        <TrainTypeBadge type={train.type} />
        <span className="text-sm font-bold text-slate-800">{train.number}</span>
        <span className="text-xs text-slate-400">Western Suburban Corridor · Chennai Central MMC</span>
      </div>

      <div className="mx-4 flex items-center gap-2 mb-3">
        <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
        <span className="text-xs font-bold text-amber-600">LIVE REGULATED</span>
      </div>

      {/* Delay hero */}
      <div className="mx-4 bg-white rounded-2xl shadow-sm border border-red-100 p-4 mb-4">
        <p className="text-sm text-slate-500 mb-1">CURRENT RUNNING DELAY</p>
        <p className="text-5xl font-extrabold text-red-600 mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
          +{train.delayMinutes} min
        </p>

        <div className="grid grid-cols-2 gap-3 mb-3">
          <div>
            <p className="text-[10px] text-slate-400">Chennai Central (MMC)</p>
            <p className="text-base font-bold text-slate-800">{train.departure}</p>
            <p className="text-[10px] text-red-500">Departing +{train.delayMinutes}m late</p>
          </div>
          <div>
            <p className="text-[10px] text-slate-400">Tiruvallur (TRL)</p>
            <p className="text-base font-bold text-slate-800">{train.expectedArrival}</p>
            <p className="text-[10px] text-slate-400">Expected arrival</p>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-slate-50 rounded-xl px-3 py-2">
          <span className="text-xs text-slate-500">Last verified: 08:38 AM (2 mins ago)</span>
          <span className="ml-auto text-xs font-semibold text-blue-700">PF-4 MMC</span>
        </div>
      </div>

      {/* Official delay attribution */}
      <div className="mx-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-bold text-slate-800">Delay Attribution Breakdown</p>
          <span className="text-[10px] text-slate-500">2 Factors Identified</span>
        </div>

        {/* Confirmed reason */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 mb-3">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-bold text-slate-500 tracking-widest">OFFICIAL RAILWAY LOG</span>
            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded-full">
              ✓ Authority Confirmed
            </span>
          </div>
          <p className="text-sm font-bold text-slate-800 mb-2">
            {train.delayReason || 'Track Congestion & Platform Clearance at Vyasarpadi Junction'}
          </p>
          <p className="text-xs text-slate-500 leading-relaxed">
            Train regulated on slow line loop track to clear crossing for scheduled empty rake movement toward Basin Bridge Car Shed.
          </p>
          <div className="mt-3 flex items-center gap-2 text-[10px] text-slate-400">
            <span>📋</span>
            <span>Logged by Chennai Divisional Contr... 08:34 AM</span>
          </div>
        </div>

        {/* Estimated reason */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 mb-3">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-bold text-slate-500 tracking-widest">CROWDSOURCED ESTIMATE</span>
            <span className="text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded-full">
              ≈ Guidance Only
            </span>
          </div>
          <p className="text-sm font-bold text-slate-800 mb-2">Peak Boarding Surge at Perambur Station</p>
          <p className="text-xs text-slate-500 leading-relaxed">
            Extended dwell time reported (+4 mins) due to heavily crowded ladies coach and general vestibule entry during Monday morning office peak.
          </p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="bg-amber-50 rounded-xl p-2 text-center">
              <p className="text-xs font-bold text-amber-700">Medium Confidence Score</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-2 text-center">
              <p className="text-xs font-bold text-slate-600">24 Commuter Reports</p>
            </div>
          </div>
          <p className="text-[9px] text-slate-400 mt-2 italic">
            * Inferred from passenger location sensor clusters. Not an official Southern Railway statement.
          </p>
        </div>
      </div>

      {/* Sub-system status */}
      <div className="mx-4 bg-white rounded-2xl shadow-sm border border-slate-100 p-4 mb-4">
        <p className="text-sm font-bold text-slate-800 mb-3">Suburban Corridor Systems</p>
        <p className="text-[10px] text-slate-500 mb-3">Sub-system conditions across MMC – Tiruvallur route</p>
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Auto Signal', status: 'Hold Active', color: 'text-red-600' },
            { label: 'OHE Power', status: 'Optimal', color: 'text-emerald-600' },
            { label: 'Express Overtake', status: 'No Clashes', color: 'text-emerald-600' },
          ].map(s => (
            <div key={s.label}>
              <p className="text-[10px] text-slate-400">{s.label}</p>
              <p className={`text-xs font-bold ${s.color}`}>{s.status}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Alternative suggestion */}
      <div className="mx-4 bg-emerald-600 rounded-2xl p-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-bold text-emerald-100 bg-emerald-700 px-2 py-0.5 rounded-full">🚨 URGENT COMMUTE ALTERNATIVE</span>
          <span className="text-emerald-100 text-[10px]">Departs in 22m</span>
        </div>
        <p className="text-white text-xs leading-relaxed mb-3">
          Need to reach Tiruvallur before 09:45 AM? Switch to EMU 43221 Fast Local departing from MMC Platform 3 at 09:10 AM. It skips 5 minor intermediate halts.
        </p>
        <div className="flex items-center justify-between">
          <p className="text-emerald-100 text-[10px]">📍 Reaches TRL at 09:48 AM</p>
          <button className="bg-white text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-xl">View Fast Local</button>
        </div>
      </div>

      {/* Downstream affected stations */}
      <div className="mx-4 bg-white rounded-2xl shadow-sm border border-slate-100 p-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-bold text-slate-800">Downstream Affected Stations</p>
          <span className="text-[10px] text-slate-500">6 of 18 halts</span>
        </div>
        {[
          { name: 'Vyasarpadi Jeeva', note: 'Passing slow loop line', delay: '+10m Delay' },
          { name: 'Perambur Carriage Works', note: 'Expected 09:12 AM', delay: '+12m Delay' },
          { name: 'Villivakkam', note: 'Expected 09:21 AM', delay: '+15m Delay' },
        ].map(s => (
          <div key={s.name} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
              <div>
                <p className="text-xs font-semibold text-slate-700">{s.name}</p>
                <p className="text-[10px] text-slate-400">{s.note}</p>
              </div>
            </div>
            <span className="text-xs font-bold text-red-600">{s.delay}</span>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="mx-4 flex flex-col gap-2 mb-4">
        <button className="w-full bg-blue-900 text-white py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2"
          style={{ fontFamily: 'Manrope, sans-serif' }}>
          🔔 Set Delay Alert Notifications
        </button>
        <button className="w-full bg-slate-100 text-slate-700 py-3.5 rounded-2xl font-bold text-sm"
          style={{ fontFamily: 'Manrope, sans-serif' }}>
          ↗ Share Delay with Family / Office
        </button>
      </div>
    </div>
  );
}
