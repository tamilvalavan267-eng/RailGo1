import { useState } from 'react';
import { AppHeader } from '../components/AppHeader';
import { NotificationCard } from '../components/NotificationCard';
import { NOTIFICATIONS } from '../data/trains';

interface Props {
  onBack: () => void;
}

export function NotificationsScreen({ onBack }: Props) {
  const [notifications, setNotifications] = useState(NOTIFICATIONS);
  const [activeTab, setActiveTab] = useState<'all' | 'delays' | 'updates'>('all');

  const unread = notifications.filter(n => !n.read).length;
  const delayNotifs = notifications.filter(n => n.type === 'delay');
  const updateNotifs = notifications.filter(n => n.type !== 'delay');
  const displayed = activeTab === 'all' ? notifications : activeTab === 'delays' ? delayNotifs : updateNotifs;

  const dismiss = (id: number) => setNotifications(prev => prev.filter(n => n.id !== id));

  return (
    <div className="flex flex-col h-full overflow-y-auto bg-slate-50 pb-24">
      <AppHeader onBack={onBack} title="Profile" />

      <div className="px-4 pt-4 pb-2">
        <h1 className="text-2xl font-extrabold text-slate-900" style={{ fontFamily: 'Manrope, sans-serif' }}>Profile</h1>
      </div>

      {/* Tabs */}
      <div className="mx-4 mb-4">
        <div className="flex gap-2">
          {[
            { id: 'all', label: `All (${notifications.length})` },
            { id: 'delays', label: `Delays & Status (${delayNotifs.length})` },
            { id: 'updates', label: `Journey Updates (${updateNotifs.length})` },
          ].map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold border flex-shrink-0 whitespace-nowrap
                ${activeTab === tab.id ? 'bg-blue-900 text-white border-blue-900' : 'bg-white text-slate-500 border-slate-200'}`}>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Notification list */}
      <div className="px-4">
        {displayed.map(notification => (
          <NotificationCard key={notification.id} notification={notification} onDismiss={dismiss} />
        ))}
        {displayed.length === 0 && (
          <div className="text-center py-12 text-slate-400">
            <p className="text-3xl mb-2">🔔</p>
            <p className="text-sm">No notifications</p>
          </div>
        )}
      </div>

      {/* Alert preferences */}
      <div className="mx-4 mt-2 mb-4">
        <button className="w-full bg-white rounded-2xl shadow-sm border border-slate-100 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-lg">⚙</span>
            <div className="text-left">
              <p className="text-sm font-bold text-slate-800">Alert Preferences</p>
              <p className="text-xs text-slate-400">Manage sound, line alarms & quiet hours</p>
            </div>
          </div>
          <span className="text-slate-400">›</span>
        </button>
      </div>

      <div className="mx-4 mb-2">
        <p className="text-[10px] text-slate-400 text-center">
          ⓘ Simulated passenger demo alerts. Updated via Southern Railway feeds.
        </p>
      </div>
    </div>
  );
}
