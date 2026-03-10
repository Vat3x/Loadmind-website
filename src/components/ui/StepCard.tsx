import type { LucideIcon } from 'lucide-react';
import { Card } from './Card';

interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  icon: LucideIcon;
  theme?: 'dark' | 'light';
}

export function StepCard({ stepNumber, title, description, icon: Icon, theme = 'dark' }: StepCardProps) {
  const isDark = theme === 'dark';

  return (
    <Card theme={theme} hover={true} className="text-center">
      <div className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${isDark ? 'bg-slate-800' : 'bg-blue-100'}`}>
        <Icon className={`h-8 w-8 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
      </div>
      <div className={`mb-3 text-sm font-bold uppercase tracking-widest ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
        Step {stepNumber}
      </div>
      <h3 className={`mb-4 text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
      <p className={`text-lg leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{description}</p>
    </Card>
  );
}
