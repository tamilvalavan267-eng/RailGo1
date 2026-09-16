import { useEffect, useState } from 'react';
import { AppHeader } from '../components/AppHeader';
import { TrainCard } from '../components/TrainCard';
import { Train } from '../data/trains';
import { getTrains } from '../services/trainService';

interface Props {
  onBack: () => void;
  onSelectTrain: (train: Train) => void;
  onTrackLive: (train: Train) => void;
}

export function SearchScreen({
  onBack,
  onSelectTrain,
  onTrackLive,
}: Props) {
  const [trains, setTrains] = useState<Train[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadTrains() {
      try {
        setLoading(true);
        setError('');

        const data = await getTrains();

        setTrains(data);
      } catch (err) {
        console.error('Failed to load trains:', err);
        setError('Unable to load train data.');
      } finally {
        setLoading(false);
      }
    }

    loadTrains();
  }, []);

  return (
    <div className="flex flex-col h-full overflow-y-auto bg-slate-50 pb-24">
      {/* Header */}
      <AppHeader onBack={onBack} title="Search" />

      {/* Page Title */}
      <div className="px-4 pt-4 pb-2">
        <h1
          className="text-2xl font-extrabold text-slate-900"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          Search
        </h1>
      </div>

      {/* Route Information */}
      <div className="mx-4 mb-4 flex items-center justify-between rounded-2xl bg-blue-900 px-4 py-3">
        <div>
          <p className="text-[10px] font-semibold text-blue-300">
            Today, Morning Commute
          </p>

          <p className="text-sm font-bold text-white">
            {loading
              ? 'Loading Trains...'
              : `${trains.length} Trains Available`}
          </p>
        </div>

        <div className="text-right">
          <p className="text-xs text-blue-200">
            Chennai Central → Tiruvallur
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="mx-4 mb-4 grid grid-cols-3 gap-2">
        {[
          {
            icon: '📍',
            label: '42 km Track',
          },
          {
            icon: '⏱',
            label: 'Avg 50-60 min',
          },
          {
            icon: '🏷',
            label: 'Platform Synced',
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className="flex items-center gap-1.5 rounded-xl border border-slate-100 bg-white px-3 py-2 shadow-sm"
          >
            <span className="text-sm">{stat.icon}</span>

            <span className="text-[10px] font-semibold text-slate-600">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Filter Chips */}
      <div className="mb-4 flex gap-2 overflow-x-auto px-4">
        {[
          `All Trains (${trains.length})`,
          '⚡ Fast EMU',
          '🏷 Platform Conf.',
        ].map((filter, index) => (
          <span
            key={filter}
            className={`flex-shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold ${
              index === 0
                ? 'border-blue-900 bg-blue-900 text-white'
                : 'border-slate-200 bg-white text-slate-600'
            }`}
          >
            {filter}
          </span>
        ))}
      </div>

      {/* Train List */}
      {/* Train List */}
<div className="px-4">
  {loading ? (
    <div className="rounded-2xl bg-white p-5 text-center text-sm text-slate-500">
      Loading train information...
    </div>
  ) : error ? (
    <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-center text-sm text-red-600">
      {error}
    </div>
  ) : trains.length === 0 ? (
    <div className="rounded-2xl bg-white p-5 text-center text-sm text-slate-500">
      No trains found.
    </div>
  ) : (
    trains.map((train) => (
      <TrainCard
        key={train.number}
        train={train}
        onSelect={onSelectTrain}
        onTrackLive={onTrackLive}
      />
    ))
  )}
</div>
      {/* Information Note */}
      <div className="mx-4 mt-2 rounded-xl border border-blue-100 bg-blue-50 p-3">
        <p className="text-[10px] leading-relaxed text-blue-700">
          ⓘ Train information is provided by RailGo. Follow official railway
          announcements for sudden operational changes.
        </p>
      </div>
    </div>
  );
}