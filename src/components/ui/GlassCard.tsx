import type { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className = '', hover = false }: GlassCardProps) {
  return (
    <div
      className={`glass-card p-6 ${hover ? 'transition-all duration-300 hover:border-primary/30 hover:glow-primary' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
