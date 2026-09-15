import { AppHeader } from '../components/AppHeader';

interface Props {
  onSearch: () => void;
  onRoute: () => void;
  onStation: () => void;
  onNextTrain: () => void;
  onNotifications: () => void;
  onLiveStatus: () => void;
}

export function HomeScreen({ onSearch, onRoute, onStation, onNextTrain, onNotifications, onLiveStatus }: Props) {
  return (
    <div className="flex flex-col h-full overflow-y-auto bg-slate-50 pb-24">
      <AppHeader />

      {/* Page title */}
      <div className="px-4 pt-4 pb-2">
        <h1 className="text-2xl font-extrabold text-slate-900" style={{ fontFamily: 'Manrope, sans-serif' }}>Home</h1>
      </div>

      {/* Search card */}
      <div className="mx-4 bg-white rounded-2xl shadow-sm border border-slate-100 p-4 mb-4">
        <p className="text-xs font-bold text-slate-400 tracking-widest mb-2">SUBURBAN COMMUTE</p>
        <h2 className="text-xl font-extrabold text-slate-900 mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>Where are you going?</h2>

        {/* From */}
        <div className="flex items-center gap-3 mb-1">
          <div className="flex flex-col items-center gap-1">
            <div className="w-4 h-4 rounded-full bg-blue-900 border-2 border-blue-900 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full" />
            </div>
            <div className="w-0.5 h-4 bg-slate-200" />
          </div>
          <div className="flex-1 bg-slate-50 rounded-xl p-3">
            <p className="text-xs text-slate-400 mb-0.5">FROM ORIGIN</p>
            <p className="text-sm font-bold text-slate-800">Chennai Central (MMC)</p>
            <p className="text-[10px] text-slate-400">Suburban Terminal · PF 12-14</p>
          </div>
          <span className="text-xs font-bold text-white bg-blue-900 px-2 py-1 rounded-lg">MMC</span>
        </div>

        {/* Swap arrow */}
        <div className="flex items-center ml-2 mb-1">
          <div className="w-4 h-4 rounded-full bg-slate-100 flex items-center justify-center text-xs text-slate-500">⇅</div>
        </div>

        {/* To */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-4 h-4 rounded-full border-2 border-emerald-500 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
          </div>
          <div className="flex-1 bg-slate-50 rounded-xl p-3">
            <p className="text-xs text-slate-400 mb-0.5">TO DESTINATION</p>
            <p className="text-sm font-bold text-slate-800">Tiruvallur (TRL)</p>
            <p className="text-[10px] text-slate-400">Platform 1, 2 or 3</p>
          </div>
          <span className="text-xs font-bold text-white bg-emerald-600 px-2 py-1 rounded-lg">TRL</span>
        </div>

        {/* Date + Fast toggle */}
        <div className="flex items-center justify-between mb-4 px-1">
          <button className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
            📅 Today, 06:30 AM ∨
          </button>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500">Fast Trains</span>
            <div className="w-9 h-5 bg-emerald-500 rounded-full flex items-center px-0.5">
              <div className="w-4 h-4 bg-white rounded-full ml-auto" />
            </div>
          </div>
        </div>

        <button
          onClick={onSearch}
          className="w-full bg-blue-900 text-white py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          Search Local Trains →
        </button>
      </div>

      {/* Quick actions */}
      <div className="mx-4 mb-4">
        <div className="grid grid-cols-4 gap-3">
          {[
            { icon: '📡', label: 'Live Track', action: onLiveStatus },
            { icon: '📋', label: 'Timetable', action: onSearch },
            { icon: '🗺', label: 'Route Map', action: onRoute },
            { icon: '📁', label: 'Directory', action: onStation },
          ].map(item => (
            <button key={item.label} onClick={item.action}
              className="flex flex-col items-center gap-2 bg-white rounded-2xl p-3 shadow-sm border border-slate-100">
              <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-lg">{item.icon}</div>
              <span className="text-[10px] font-semibold text-slate-600">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Frequent commute */}
      <div className="mx-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-bold text-slate-800 flex items-center gap-1">
            ↩ Frequent Commute
          </p>
          <button className="text-xs text-blue-700 font-semibold">View All</button>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <span className="text-[10px] font-bold text-blue-900 bg-blue-100 px-2 py-0.5 rounded-full">WEST LINE</span>
              <span className="ml-2 text-[10px] text-slate-500">EMU 43209</span>
            </div>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
              ● Next in 8 min
            </span>
          </div>
          <p className="text-sm font-bold text-slate-800 mb-1">Chennai Central → Tiruvallur</p>
          <div className="flex items-center justify-between">
            <p className="text-3xl font-extrabold text-blue-900" style={{ fontFamily: 'Manrope, sans-serif' }}>08:42</p>
            <div className="text-right">
              <p className="text-xs text-slate-500">PF 14 (MMC)</p>
              <button
                onClick={onLiveStatus}
                className="mt-1 bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-xl flex items-center gap-1"
              >
                ⬆ Track EMU
              </button>
            </div>
          </div>
          <p className="text-[10px] text-slate-400 mt-1">42 km · 18 stops via Villivakkam, Ambattur</p>
          <p className="text-[10px] text-amber-600 mt-1">👥 Moderate crowd (Coaches 4-7)</p>
        </div>
      </div>

      {/* Next train highlight */}
      <div className="mx-4 mb-4">
        <button
          onClick={onNextTrain}
          className="w-full bg-white rounded-2xl shadow-sm border border-slate-100 p-4 flex items-center justify-between text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-lg">🚉</div>
            <div>
              <p className="text-sm font-bold text-slate-800">Moore Market · Avadi</p>
              <p className="text-xs text-slate-400">21 km · Fast EMU at 08:50 AM</p>
            </div>
          </div>
          <span className="text-slate-400">›</span>
        </button>
      </div>

      {/* Suburban Rail Corridor map teaser */}
      <div className="mx-4 mb-4">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-3 flex items-center justify-between">
            <p className="text-xs font-bold text-slate-700">🚉 Suburban Rail Corridor</p>
            <span className="text-[10px] text-emerald-600 font-semibold">Live Track GPS</span>
          </div>
          <div className="mx-4 mb-3 h-24 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl flex items-end p-3">
            <div>
              <p className="text-white text-xs font-bold">Chennai Central (MMC) Station Yard</p>
              <p className="text-blue-200 text-[10px]">Live GPS tracking 14 active EMUs</p>
            </div>
            <button onClick={onRoute} className="ml-auto bg-white/20 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg border border-white/30">
              Explore Map
            </button>
          </div>
        </div>
      </div>

      {/* Key Station Guides */}
      <div className="mx-4 mb-4">
        <p className="text-sm font-bold text-slate-800 mb-2">Key Station Guides</p>
        <div className="grid grid-cols-2 gap-3">
          {[
            { title: 'MMC Terminal', sub: '14 Suburban Platforms', color: 'from-blue-800 to-blue-900' },
            { title: 'Tiruvallur Junction', sub: 'Direct Arakkonam feeder', color: 'from-emerald-700 to-emerald-900' },
          ].map(s => (
            <button key={s.title} onClick={onStation}
              className={`bg-gradient-to-br ${s.color} rounded-2xl p-4 text-left`}>
              <p className="text-white text-xs font-bold">{s.title}</p>
              <p className="text-white/70 text-[10px] mt-0.5">{s.sub}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Footer note */}
      <div className="mx-4 mb-2 flex items-center gap-2">
        <span className="text-[10px] text-slate-400">ⓘ Simulated Passenger Demo Data · Southern Railway Western Line</span>
      </div>
    </div>
  );
}
