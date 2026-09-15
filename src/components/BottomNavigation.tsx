type Screen = 'home' | 'search' | 'livestatus' | 'saved' | 'profile';

interface Props {
  active: Screen;
  onNavigate: (screen: Screen) => void;
}

const items: { id: Screen; label: string; icon: string; activeIcon: string }[] = [
  { id: 'home', label: 'Home', icon: '⌂', activeIcon: '⌂' },
  { id: 'search', label: 'Search', icon: '🔍', activeIcon: '🔍' },
  { id: 'livestatus', label: 'Live Status', icon: '📡', activeIcon: '📡' },
  { id: 'saved', label: 'Saved', icon: '🔖', activeIcon: '🔖' },
  { id: 'profile', label: 'Profile', icon: '👤', activeIcon: '👤' },
];

export function BottomNavigation({ active, onNavigate }: Props) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 safe-area-pb"
      style={{ maxWidth: 430, margin: '0 auto' }}>
      <div className="flex items-center justify-around px-2 py-2">
        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all"
            >
              <span className={`text-lg leading-none ${isActive ? 'scale-110' : 'opacity-50'}`}>
                {item.icon}
              </span>
              <span
                className={`text-[10px] font-semibold ${isActive ? 'text-blue-900' : 'text-slate-400'}`}
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                {item.label}
              </span>
              {isActive && <div className="w-4 h-0.5 rounded-full bg-blue-900 mt-0.5" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
