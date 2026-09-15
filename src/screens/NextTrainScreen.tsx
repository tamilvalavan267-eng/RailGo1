import { AppHeader } from '../components/AppHeader';
import { TRAINS } from '../data/trains';

interface Props {
  onBack: () => void;
}

export function NextTrainScreen({ onBack }: Props) {
  const nextTrain = TRAINS[1]; // 43217 Slow Local departing at 08:35
  const followingTrains = TRAINS.slice(2, 4);

  return (
    <div className="flex flex-col h-full overflow-y-auto bg-slate-50 pb-24">
      <AppHeader onBack={onBack} title="Next Train" />

      <div className="px-4 pt-4 pb-2">
        <h1 className="text-2xl font-extrabold text-slate-900" style={{ fontFamily: 'Manrope, sans-serif' }}>Home</h1>
      </div>

      {/* Next train hero card */}
      <div className="mx-4 mb-4 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
              SLOW LOCAL
            </span>
            <span className="text-xs text-slate-500">EMU {nextTrain.number}</span>
            <div className="ml-auto flex items-center gap-1.5">
              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
              <span className="text-[10px] font-bold text-emerald-600">RAKE PLACED · GATES OPEN</span>
            </div>
          </div>

          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm text-slate-500 mb-1">TRAIN DEPARTS IN</p>
              <p className="text-5xl font-extrabold text-blue-900" style={{ fontFamily: 'Manrope, sans-serif' }}>
                03:<span className="text-emerald-500">20</span>
              </p>
              <p className="text-xs text-slate-400">MIN SEC</p>
            </div>
            <div className="text-right bg-emerald-50 rounded-2xl p-3 border border-emerald-200">
              <p className="text-[10px] text-slate-400 mb-1">DEPARTURE</p>
              <p className="text-2xl font-extrabold text-slate-800" style={{ fontFamily: 'Manrope, sans-serif' }}>
                {nextTrain.departure}
              </p>
              <div className="mt-1 bg-blue-900 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg text-center">
                PLATFORM {nextTrain.platform}
              </div>
            </div>
          </div>

          <div className="h-1.5 bg-slate-100 rounded-full mb-4 overflow-hidden">
            <div className="h-full bg-emerald-500 rounded-full" style={{ width: '85%' }} />
          </div>

          <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
            <span>⏱ {nextTrain.duration}</span>
            <span>📍 {nextTrain.stopCount} Stops Total</span>
            <button className="text-blue-700 font-semibold">ALL STATIONS</button>
          </div>

          {/* Intermediate stops preview */}
          <div className="bg-slate-50 rounded-xl p-3 mb-4">
            <p className="text-[10px] text-slate-400 mb-1">KEY INTERMEDIATE STOPS</p>
            <p className="text-xs text-slate-600 font-medium">
              Basin Bridge, Vyasarpadi, Perambur, Villivakkam, Ambattur, Avadi, Thiruninravur, Putlur...
            </p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="px-4 pb-4 flex flex-col gap-2">
          <button className="w-full bg-blue-900 text-white py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2"
            style={{ fontFamily: 'Manrope, sans-serif' }}>
            ✦ View Details & Live Route
          </button>
          <button className="w-full bg-slate-50 text-slate-700 border border-slate-200 py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2"
            style={{ fontFamily: 'Manrope, sans-serif' }}>
            ⏰ Boarding Reminder / Alarm
          </button>
        </div>
      </div>

      {/* Following trains */}
      <div className="mx-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-bold text-slate-800">↻ Following Trains</p>
          <span className="text-[10px] text-slate-400">Platform verified</span>
        </div>

        {followingTrains.map(train => (
          <div key={train.number} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 mb-3">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-xl font-extrabold text-slate-800" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    {train.expectedDeparture || train.departure}
                  </p>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full
                    ${train.delayMinutes > 0 ? 'bg-red-100 text-red-600' : 'bg-slate-100 text-slate-600'}`}>
                    {train.delayMinutes > 0 ? `In ${train.delayMinutes + 18} mins` : 'In 18 mins'}
                  </span>
                </div>
                <p className="text-xs text-slate-500">EMU {train.number} to Arakkonam</p>
                <p className="text-[10px] text-slate-400">via Tiruvallur</p>
              </div>
              <div className="text-right">
                <div className="bg-slate-100 rounded-xl px-3 py-2 text-center">
                  <p className="text-xs font-bold text-slate-700">PF {train.platform.split(' ')[0]}</p>
                </div>
                <p className={`text-[10px] mt-1 font-semibold ${train.delayMinutes > 0 ? 'text-red-500' : 'text-slate-400'}`}>
                  {train.delayMinutes > 0 ? `+${train.delayMinutes}m regular` : '+0m regular'}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Fastest option */}
        <div className="bg-emerald-600 rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[9px] font-bold text-emerald-900 bg-emerald-300 px-2 py-0.5 rounded-full">FASTEST OPTION</span>
            <span className="text-[10px] text-emerald-100">Save 10 mins</span>
          </div>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-lg font-extrabold text-white mb-0.5" style={{ fontFamily: 'Manrope, sans-serif' }}>
                09:10 AM Fast EMU (MMC → TRL)
              </p>
              <p className="text-emerald-100 text-xs">Reaches Tiruvallur at 10:00 AM</p>
            </div>
            <div className="bg-white text-emerald-700 rounded-xl px-3 py-2 text-center flex-shrink-0">
              <p className="text-xs font-bold">PF 3</p>
              <p className="text-[9px] text-emerald-500">Limited Stops</p>
            </div>
          </div>
        </div>
      </div>

      {/* Station tip */}
      <div className="mx-4 mb-4 bg-blue-50 border border-blue-200 rounded-2xl p-4">
        <p className="text-[10px] font-bold text-blue-900 mb-1">🚶 CHENNAI CENTRAL (MMC) STATION TIP</p>
        <p className="text-xs text-blue-700 leading-relaxed">
          Use FOB 2 near the Metro Gate for direct sprint access to Suburban Platforms 3 & 4 without encountering main concourse crowds.
        </p>
        <p className="text-[10px] text-blue-400 mt-2">ⓘ Simulated passenger demo timings for Southern Railway EMU.</p>
      </div>
    </div>
  );
}
