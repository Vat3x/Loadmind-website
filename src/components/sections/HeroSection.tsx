import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-slate-950 pt-32 pb-40 md:pt-40 md:pb-56">
      {/* ── Background Image ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/hero-bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="absolute -top-32 -left-32 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute -bottom-32 -right-32 h-[600px] w-[600px] rounded-full bg-indigo-600/10 blur-[140px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
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
          <Link to="/contact" className="inline-flex items-center justify-center rounded-full border-2 border-white/30 text-white hover:border-white/60 hover:bg-white/5 active:scale-[0.98] transition-all duration-300 hover:scale-[1.02] h-16 px-10 text-lg font-bold">
            {t('hero.cta2')}
          </Link>
        </div>
      </div>
    </section>
  );
}
