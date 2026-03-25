import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-slate-950 -mt-16 pt-28 pb-24 md:pt-40 md:pb-56">
      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/hero-bg.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-slate-950/40" />
        <div className="absolute -top-32 -left-32 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute -bottom-32 -right-32 h-[600px] w-[600px] rounded-full bg-indigo-600/10 blur-[140px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
      </div>

      {/* ── Hero Content ── */}
      <div className="relative z-20 mx-auto max-w-4xl px-5 text-center">
        <h1
          className="hero-animate text-3xl font-bold tracking-tight sm:text-4xl md:text-7xl lg:text-[5rem] leading-[1.08] text-white"
          style={{ animation: 'fade-in-up 0.7s ease forwards', opacity: 0 }}
        >
          {t('hero.title')}
        </h1>
        <div
          className="hero-animate mt-8 flex items-center justify-center gap-3 flex-wrap md:mt-12 md:gap-4"
          style={{ animation: 'fade-in-up 0.7s ease 0.15s forwards', opacity: 0 }}
        >
          <a href="#products" className="inline-flex items-center justify-center rounded-full bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-white/15 hover:border-white/30 active:scale-[0.98] transition-all duration-300 hover:scale-[1.02] h-10 px-6 text-sm font-semibold md:h-11 md:px-7">
            {t('hero.cta')}
          </a>
          <Link to="/contact" className="inline-flex items-center justify-center rounded-full border border-white/15 text-slate-400 hover:border-white/25 hover:text-slate-300 active:scale-[0.98] transition-all duration-300 hover:scale-[1.02] h-10 px-6 text-sm font-semibold md:h-11 md:px-7">
            {t('hero.cta2')}
          </Link>
        </div>
      </div>
    </section>
  );
}
