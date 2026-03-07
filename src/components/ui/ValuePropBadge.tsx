interface ValuePropBadgeProps {
  metric: string;
  label: string;
  description: string;
}

export function ValuePropBadge({ metric, label, description }: ValuePropBadgeProps) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-warm">{metric}</div>
      <div className="mt-2 text-lg font-semibold text-foreground">{label}</div>
      <p className="mt-1 text-sm text-muted-fg">{description}</p>
    </div>
  );
}
