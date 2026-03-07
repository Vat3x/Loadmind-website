import type { ReactNode } from 'react';

interface BadgeProps {
  variant?: 'default' | 'coming-soon' | 'free';
  children: ReactNode;
}

const variantClasses = {
  default: 'bg-primary/10 text-primary border-primary/20',
  'coming-soon': 'bg-accent/10 text-accent border-accent/20',
  free: 'bg-warm/10 text-warm border-warm/20',
};

export function Badge({ variant = 'default', children }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${variantClasses[variant]}`}
    >
      {children}
    </span>
  );
}
