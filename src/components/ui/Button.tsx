import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'disabled';
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

const sizeClasses = {
  sm: 'h-10 px-6 text-sm',
  md: 'h-14 px-8 text-base font-semibold',
  lg: 'h-16 px-10 text-lg font-bold',
};

const variantClasses = {
  dark: {
    primary: 'bg-white text-slate-900 hover:bg-slate-100 hover:shadow-lg hover:shadow-white/10 active:scale-[0.98]',
    secondary: 'border border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white active:scale-[0.98]',
    ghost: 'text-slate-400 hover:text-white',
  },
  light: {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 active:scale-[0.98]',
    secondary: 'border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 active:scale-[0.98]',
    ghost: 'text-slate-500 hover:text-slate-900',
  },
  disabled: 'bg-slate-800 text-slate-500 cursor-not-allowed opacity-60',
};

export function Button({
  variant = 'primary',
  theme = 'dark',
  size = 'md',
  href,
  external,
  onClick,
  children,
  className = '',
}: ButtonProps) {
  const isVariantDisabled = variant === 'disabled';
  const themeStyles = isVariantDisabled ? variantClasses.disabled : variantClasses[theme][variant];
  const classes = `inline-flex items-center justify-center rounded-full transition-all duration-300 hover:scale-[1.02] ${sizeClasses[size]} ${themeStyles} ${className}`;

  if (href && variant !== 'disabled') {
    if (external || href.startsWith('http')) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    if (href === '/3d' || href.startsWith('/3d/') || href === '/tracking' || href.startsWith('/tracking/')) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={variant === 'disabled'}
      className={classes}
    >
      {children}
    </button>
  );
}
