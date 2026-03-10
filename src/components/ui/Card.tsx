import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  theme?: 'dark' | 'light';
}

export function Card({ children, className = '', hover = false, theme = 'dark' }: CardProps) {
  const baseClasses = 'p-10 rounded-[2.5rem] backdrop-blur-sm transition-all duration-300 h-full';

  const themeClasses = {
    dark: 'bg-slate-900/70 border border-slate-800/50',
    light: 'bg-white/50 border border-slate-200/50',
  };

  const hoverClasses = {
    dark: 'hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20',
    light: 'hover:-translate-y-1 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/10',
  };

  return (
    <div
      className={`${baseClasses} ${themeClasses[theme]} ${hover ? hoverClasses[theme] : ''} ${className}`}
    >
      {children}
    </div>
  );
}
