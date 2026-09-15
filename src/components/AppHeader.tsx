interface Props {
  onBack?: () => void;
  title?: string;
  badge?: boolean;
}

export function AppHeader({ onBack, title, badge = true }: Props) {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-slate-100">
      <div className="flex items-center gap-2">
        {onBack ? (
          <button onClick={onBack} className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-700 text-sm">
            ←
          </button>
        ) : (
          <div className="w-8 h-8 rounded-xl bg-blue-900 flex items-center justify-center overflow-hidden">
            <span className="text-white text-xs font-black">R</span>
          </div>
        )}
        <div>
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-extrabold text-blue-900" style={{ fontFamily: 'Manrope, sans-serif' }}>
              {onBack ? title || 'RailGo' : 'RailGo'}
            </span>
            {badge && !onBack && (
              <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded-full">
                Simulated Demo Data
              </span>
            )}
          </div>
          {!onBack && <p className="text-[10px] text-slate-400">Chennai Suburban EMU</p>}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 text-sm">🔔</button>
        <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center text-white text-xs font-bold">A</div>
      </div>
    </div>
  );
}
