interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  fullWidth?: boolean;
}

export function PrimaryButton({ children, onClick, variant = 'primary', className = '', fullWidth = false }: Props) {
  const variants = {
    primary: 'bg-blue-900 text-white active:bg-blue-950',
    secondary: 'bg-emerald-500 text-white active:bg-emerald-600',
    outline: 'bg-white text-blue-900 border-2 border-blue-900 active:bg-blue-50',
  };
  return (
    <button
      onClick={onClick}
      className={`${variants[variant]} ${fullWidth ? 'w-full' : ''} py-3.5 px-6 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${className}`}
      style={{ fontFamily: 'Manrope, sans-serif' }}
    >
      {children}
    </button>
  );
}
