interface PricingToggleProps {
  labels: string[];
  activeIndex: number;
  onChange: (index: number) => void;
  size?: 'sm' | 'md';
  badge?: { index: number; text: string };
}

export function PricingToggle({
  labels,
  activeIndex,
  onChange,
  size = 'md',
  badge,
}: PricingToggleProps) {
  const count = labels.length;
  const pad = size === 'sm' ? 4 : 6;

  return (
    <div
      className={`relative inline-grid rounded-full bg-slate-800 border border-slate-600 ${
        size === 'sm' ? 'p-1' : 'p-1.5'
      }`}
      style={{ gridTemplateColumns: `repeat(${count}, 1fr)` }}
    >
      <div
        className="absolute top-1/2 -translate-y-1/2 rounded-full bg-primary transition-all duration-300 ease-out"
        style={{
          width: `calc(${100 / count}% - ${pad}px)`,
          height: 'calc(100% - 8px)',
          left: `calc(${activeIndex * (100 / count)}% + ${pad / 2}px)`,
        }}
      />
      {labels.map((label, i) => (
        <button
          key={i}
          onClick={() => onChange(i)}
          className={`relative z-10 flex items-center justify-center gap-1.5 rounded-full font-medium transition-colors duration-200 whitespace-nowrap ${
            size === 'sm'
              ? 'px-5 py-1.5 text-xs'
              : 'px-6 py-2 text-sm'
          } ${
            activeIndex === i
              ? 'text-white font-bold'
              : 'text-slate-300 hover:text-white'
          }`}
        >
          {label}
          {badge && badge.index === i && (
            <span className={`inline-flex items-center rounded-full bg-emerald-500/20 px-1.5 py-0.5 text-[10px] font-semibold ${
              activeIndex === i ? 'text-emerald-200' : 'text-emerald-400'
            }`}>
              {badge.text}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}
