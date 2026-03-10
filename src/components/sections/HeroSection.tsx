import { useLanguage } from '@/hooks/useLanguage';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-slate-950 pt-32 pb-40 md:pt-40 md:pb-56">
      {/* ── Creative Background: Pure CSS geometric shapes ── */}
      <div className="absolute inset-0 pointer-events-none z-0">

        {/* Large ambient glows */}
        <div className="absolute -top-32 -left-32 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute -bottom-32 -right-32 h-[600px] w-[600px] rounded-full bg-indigo-600/10 blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-sky-500/5 blur-[120px]" />

        {/* SVG Geometric decoration */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: 0.12 }}
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="1" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Grid of subtle lines */}
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={`v-${i}`}
              x1={`${(i + 1) * 8.3}%`} y1="0%"
              x2={`${(i + 1) * 8.3}%`} y2="100%"
              stroke="url(#line-grad)" strokeWidth="0.5"
            />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <line
              key={`h-${i}`}
              x1="0%" y1={`${(i + 1) * 12.5}%`}
              x2="100%" y2={`${(i + 1) * 12.5}%`}
              stroke="url(#line-grad)" strokeWidth="0.5"
            />
          ))}

          {/* Decorative rotating squares */}
          <rect x="78%" y="8%" width="80" height="80" rx="8"
            stroke="#3b82f6" strokeWidth="1" fill="none"
            transform="rotate(22, 1100, 100)" />
          <rect x="80%" y="12%" width="40" height="40" rx="4"
            stroke="#6366f1" strokeWidth="1" fill="none"
            transform="rotate(-10, 1200, 150)" />
          <rect x="5%" y="70%" width="60" height="60" rx="8"
            stroke="#3b82f6" strokeWidth="1" fill="none"
            transform="rotate(15, 80, 600)" />

          {/* Decorative circles */}
          <circle cx="90%" cy="50%" r="120" stroke="#3b82f6" strokeWidth="0.8" fill="none" />
          <circle cx="90%" cy="50%" r="80" stroke="#6366f1" strokeWidth="0.5" fill="none" />
          <circle cx="10%" cy="20%" r="70" stroke="#38bdf8" strokeWidth="0.8" fill="none" />

          {/* Diagonal accent lines */}
          <line x1="60%" y1="0%" x2="100%" y2="60%"
            stroke="#3b82f6" strokeWidth="0.8" strokeDasharray="6 12" />
          <line x1="0%" y1="40%" x2="40%" y2="100%"
            stroke="#6366f1" strokeWidth="0.8" strokeDasharray="6 12" />
        </svg>

        {/* Subtle gradient vignette overlay to center attention on text */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(2,6,23,0.85)_100%)]" />
      </div>

      {/* ── Hero Content ── */}
      <div className="relative z-20 mx-auto max-w-4xl px-4 text-center">
        <h1
          className="hero-animate text-5xl font-extrabold tracking-tight md:text-7xl lg:text-[5rem] leading-[1.08] text-white"
          style={{ animation: 'fade-in-up 0.7s ease forwards', opacity: 0 }}
        >
          {t('hero.title')}
        </h1>
        <p
          className="hero-animate mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-slate-400"
          style={{ animation: 'fade-in-up 0.7s ease 0.15s forwards', opacity: 0 }}
        >
          {t('hero.subtitle')}
        </p>
        <div
          className="hero-animate mt-12 flex items-center justify-center gap-4 flex-wrap"
          style={{ animation: 'fade-in-up 0.7s ease 0.3s forwards', opacity: 0 }}
        >
          <a href="#products" className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 hover:bg-slate-100 hover:shadow-lg hover:shadow-white/10 active:scale-[0.98] transition-all duration-300 hover:scale-[1.02] h-16 px-10 text-lg font-bold">
            {t('hero.cta')}
          </a>
        </div>
      </div>
    </section>
  );
}
