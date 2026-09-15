interface Notification {
  id: number;
  type: string;
  title: string;
  subtitle: string;
  body: string;
  time: string;
  platform: string | null;
  read: boolean;
  actionLabel: string | null;
}

interface Props {
  notification: Notification;
  onDismiss?: (id: number) => void;
}

const typeConfig: Record<string, { icon: string; color: string; bg: string }> = {
  approaching: { icon: '🚆', color: 'text-emerald-700', bg: 'bg-emerald-50 border-emerald-200' },
  delay: { icon: '⏱', color: 'text-red-600', bg: 'bg-red-50 border-red-200' },
  platform: { icon: '📍', color: 'text-blue-700', bg: 'bg-blue-50 border-blue-200' },
  journey: { icon: '✓', color: 'text-emerald-700', bg: 'bg-emerald-50 border-emerald-200' },
  service: { icon: '⚙', color: 'text-amber-700', bg: 'bg-amber-50 border-amber-200' },
};

export function NotificationCard({ notification, onDismiss }: Props) {
  const config = typeConfig[notification.type] || typeConfig.service;

  return (
    <div className={`bg-white rounded-2xl border shadow-sm mb-3 overflow-hidden ${notification.read ? 'opacity-75' : ''}`}>
      <div className="px-4 pt-3 pb-3">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${config.bg} ${config.color}`}>
              {config.icon} {notification.title}
            </span>
            {!notification.read && <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-slate-400">{notification.time}</span>
            {onDismiss && (
              <button onClick={() => onDismiss(notification.id)} className="text-slate-300 text-sm">×</button>
            )}
          </div>
        </div>

        <p className="text-sm font-bold text-slate-800 mb-1" style={{ fontFamily: 'Manrope, sans-serif' }}>
          {notification.subtitle}
        </p>
        <p className="text-xs text-slate-500 leading-relaxed">{notification.body}</p>

        {notification.platform && (
          <div className="mt-2 inline-block bg-blue-900 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg">
            {notification.platform}
          </div>
        )}

        {notification.actionLabel && (
          <div className="mt-3 flex gap-2">
            <button className="flex-1 py-2 bg-blue-900 text-white text-xs font-bold rounded-xl">
              {notification.actionLabel}
            </button>
            <button className="flex-1 py-2 bg-slate-100 text-slate-600 text-xs font-bold rounded-xl">
              Dismiss
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
