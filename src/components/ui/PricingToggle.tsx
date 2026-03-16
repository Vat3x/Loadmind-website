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
  const pillWidth = `calc((100% - ${(count + 1) * 4}px) / ${count})`;
  const pillOffset = `calc(${activeIndex} * (100% / ${count}) + 4px)`;

  return (
    <div
      className={`relative inline-flex items-center rounded-full bg-elevated border border-border ${
        size === 'sm' ? 'p-1 gap-0.5' : 'p-1.5 gap-1'
      }`}
    >
      <div
        className="absolute top-1/2 -translate-y-1/2 rounded-full bg-primary transition-all duration-300 ease-out"
        style={{
          width: pillWidth,
          height: 'calc(100% - 8px)',
          left: pillOffset,
        }}
      />
      {labels.map((label, i) => (
        <button
          key={i}
          onClick={() => onChange(i)}
          className={`relative z-10 rounded-full font-medium transition-colors duration-200 whitespace-nowrap ${
            size === 'sm'
              ? 'px-4 py-1.5 text-xs'
              : 'px-5 py-2 text-sm'
          } ${
            activeIndex === i
              ? 'text-background'
              : 'text-muted-fg hover:text-foreground'
          }`}
        >
          {label}
          {badge && badge.index === i && activeIndex !== i && (
            <span className="ml-1.5 inline-flex items-center rounded-full bg-emerald-500/20 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-400">
              {badge.text}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}
