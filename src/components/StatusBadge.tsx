interface Props {
  status: 'on-time' | 'delayed' | 'cancelled' | 'regulated';
  delay?: number;
  className?: string;
}

export function StatusBadge({ status, delay, className = '' }: Props) {
  const configs = {
    'on-time': { label: 'On Time', bg: 'bg-emerald-100', text: 'text-emerald-700', dot: 'bg-emerald-500' },
    delayed: { label: delay ? `+${delay}m Delay` : 'Delayed', bg: 'bg-red-100', text: 'text-red-600', dot: 'bg-red-500' },
    cancelled: { label: 'Cancelled', bg: 'bg-red-100', text: 'text-red-700', dot: 'bg-red-600' },
    regulated: { label: 'Regulated', bg: 'bg-amber-100', text: 'text-amber-700', dot: 'bg-amber-500' },
  };
  const c = configs[status];
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${c.bg} ${c.text} ${className}`}
      style={{ fontFamily: 'Manrope, sans-serif' }}>
      <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
      {c.label}
    </span>
  );
}
