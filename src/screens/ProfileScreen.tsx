import { AppHeader } from '../components/AppHeader';

interface Props {
  onBack: () => void;
}

export function ProfileScreen({ onBack }: Props) {
  return (
    <div className="flex flex-col h-full overflow-y-auto bg-slate-50 pb-24">
      <AppHeader onBack={onBack} title="Profile" />

      {/* User card */}
      <div className="mx-4 mt-4 bg-white rounded-2xl shadow-sm border border-slate-100 p-4 mb-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-blue-900 flex items-center justify-center text-white text-2xl font-extrabold">
            A
          </div>
          <div>
            <p className="text-lg font-extrabold text-slate-800" style={{ fontFamily: 'Manrope, sans-serif' }}>Arjun Kumar</p>
            <p className="text-xs text-slate-400">arjun.kumar@example.com</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[10px] font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full">
                MMC → TRL Commuter
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Saved journeys */}
      <div className="mx-4 mb-4">
        <p className="text-sm font-bold text-slate-700 mb-2">Saved Journeys</p>
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 divide-y divide-slate-100">
          {[
            { from: 'MMC', to: 'TRL', label: 'Morning Commute', freq: 'Daily · 08:15 AM' },
            { from: 'TRL', to: 'MMC', label: 'Evening Return', freq: 'Daily · 06:30 PM' },
            { from: 'MMC', to: 'AVD', label: 'Weekend Trip', freq: 'Sundays · 10:00 AM' },
          ].map(j => (
            <div key={j.label} className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center">
                  <span className="text-base">🔖</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">{j.label}</p>
                  <p className="text-[10px] text-slate-400">{j.from} → {j.to} · {j.freq}</p>
                </div>
              </div>
              <span className="text-slate-300">›</span>
            </div>
          ))}
        </div>
      </div>

      {/* Settings */}
      <div className="mx-4 mb-4">
        <p className="text-sm font-bold text-slate-700 mb-2">Preferences</p>
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 divide-y divide-slate-100">
          {[
            { icon: '🔔', label: 'Notification Settings', sub: 'Delays, platform changes, arrivals' },
            { icon: '🌐', label: 'Language', sub: 'English (EN)' },
            { icon: '☀', label: 'Theme', sub: 'Light Mode' },
            { icon: 'ℹ', label: 'About RailGo', sub: 'v1.0 · Chennai Suburban EMU' },
          ].map(s => (
            <div key={s.label} className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-slate-50 rounded-xl flex items-center justify-center text-base">
                  {s.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">{s.label}</p>
                  <p className="text-[10px] text-slate-400">{s.sub}</p>
                </div>
              </div>
              <span className="text-slate-300">›</span>
            </div>
          ))}
        </div>
      </div>

      {/* About */}
      <div className="mx-4 mb-4 bg-blue-900 rounded-2xl p-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
            <span className="text-blue-900 font-extrabold text-lg">R</span>
          </div>
          <div>
            <p className="text-white font-extrabold" style={{ fontFamily: 'Manrope, sans-serif' }}>RailGo</p>
            <p className="text-blue-200 text-xs">Chennai Suburban EMU Navigator</p>
          </div>
        </div>
        <p className="text-blue-200 text-xs leading-relaxed">
          RailGo provides simulated passenger guidance for Chennai suburban railway commuters.
          All data shown is for demonstration purposes only.
        </p>
        <div className="mt-3 flex gap-2">
          <span className="text-[10px] text-blue-300 bg-blue-800 px-2 py-0.5 rounded-full">Southern Railway</span>
          <span className="text-[10px] text-blue-300 bg-blue-800 px-2 py-0.5 rounded-full">Western Line</span>
          <span className="text-[10px] text-blue-300 bg-blue-800 px-2 py-0.5 rounded-full">Demo v1.0</span>
        </div>
      </div>
    </div>
  );
}
