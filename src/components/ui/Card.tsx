import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`card p-6 ${hover ? 'card-hover' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
