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
    const loadTrains = async () => {
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
    };

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
      <div className="mx-4 bg-blue-900 rounded-2xl px-4 py-3 mb-4 flex items-center justify-between">
        <div>
          <p className="text-[10px] text-blue-300 font-semibold">
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
            className="bg-white rounded-xl px-3 py-2 flex items-center gap-1.5 shadow-sm border border-slate-100"
          >
            <span className="text-sm">
              {stat.icon}
            </span>

            <span className="text-[10px] text-slate-600 font-semibold">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Filter Chips */}
      <div className="px-4 mb-4 flex gap-2 overflow-x-auto">
        {[
          `All Trains (${trains.length})`,
          '⚡ Fast EMU',
          '🏷 Platform Conf.',
        ].map((filter, index) => (
          <span
            key={filter}
            className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold border ${
              index === 0
                ? 'bg-blue-900 text-white border-blue-900'
                : 'bg-white text-slate-600 border-slate-200'
            }`}
          >
            {filter}
          </span>
        ))}
      </div>

      {/* Train List */}
      <div className="px-4">

        {/* Loading */}
        {loading && (
          <div className="bg-white rounded-2xl p-5 text-center text-sm text-slate-500">
            Loading train information...
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-4 text-center text-sm text-red-600">
            {error}
          </div>
        )}

        {/* No Trains */}
        {!loading && !error && trains.length === 0 && (
          <div className="bg-white rounded-2xl p-5 text-center text-sm text-slate-500">
            No trains found.
          </div>
        )}

        {/* Train Cards */}
        {!loading &&
          !error &&
          trains.map((train) => (
            <TrainCard
              key={train.number}
              train={train}
              onSelect={onSelectTrain}
              onTrackLive={onTrackLive}
            />
          ))}
      </div>

      {/* Information Note */}
      <div className="mx-4 mt-2 bg-blue-50 rounded-xl p-3 border border-blue-100">
        <p className="text-[10px] text-blue-700 leading-relaxed">
          ⓘ Train information is provided by RailGo.
          Follow official railway announcements for sudden operational changes.
        </p>
      </div>
    </div>
  );
}