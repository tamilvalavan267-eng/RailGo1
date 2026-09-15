type TrainType = 'FAST EMU' | 'SLOW LOCAL' | 'ARAKKONAM LOCAL' | 'EXPRESS EMU';

interface Props {
  type: TrainType;
  className?: string;
}

export function TrainTypeBadge({ type, className = '' }: Props) {
  const configs: Record<TrainType, { bg: string; text: string }> = {
    'FAST EMU': { bg: 'bg-blue-900', text: 'text-white' },
    'SLOW LOCAL': { bg: 'bg-slate-600', text: 'text-white' },
    'ARAKKONAM LOCAL': { bg: 'bg-indigo-700', text: 'text-white' },
    'EXPRESS EMU': { bg: 'bg-blue-700', text: 'text-white' },
  };
  const c = configs[type] || configs['FAST EMU'];
  return (
    <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold tracking-wide ${c.bg} ${c.text} ${className}`}
      style={{ fontFamily: 'Manrope, sans-serif' }}>
      {type}
    </span>
  );
}
