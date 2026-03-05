import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`card p-6 ${hover ? 'transition-all duration-300 hover:border-border-accent' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
