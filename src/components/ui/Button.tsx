import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'disabled';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

const variantClasses = {
  primary: 'bg-primary text-background font-semibold hover:bg-primary-hover',
  secondary: 'bg-surface border border-border text-primary font-semibold hover:border-border-accent',
  ghost: 'text-muted-fg hover:text-foreground',
  disabled: 'bg-surface text-muted cursor-not-allowed opacity-60',
};

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  external,
  onClick,
  children,
  className = '',
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-xl transition-all duration-300 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href && variant !== 'disabled') {
    if (external || href.startsWith('http')) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
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
