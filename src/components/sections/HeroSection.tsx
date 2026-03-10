import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/Button';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-slate-950 pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background Layer Stack */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Concept Imagery: Global Tech Network */}
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2600&auto=format&fit=crop')] bg-cover bg-center"
          style={{ opacity: 0.25 }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/60 to-slate-950"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-slate-950/60"></div>
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-blue-500/20 blur-[128px]"></div>
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-indigo-500/20 blur-[128px]"></div>
      </div>

      <div className="relative z-20 mx-auto max-w-5xl px-4 text-center">
        <h1
          className="hero-animate text-5xl font-extrabold tracking-tight md:text-7xl lg:text-[5rem] leading-[1.1] text-white"
          style={{ animation: 'fade-in-up 0.7s ease forwards', opacity: 0 }}
        >
          {t('hero.title')}
        </h1>
        <p
          className="hero-animate mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-slate-400"
          style={{ animation: 'fade-in-up 0.7s ease 0.15s forwards', opacity: 0 }}
        >
          {t('hero.subtitle')}
        </p>
        <div
          className="hero-animate mt-10"
          style={{ animation: 'fade-in-up 0.7s ease 0.3s forwards', opacity: 0 }}
        >
          <Button theme="dark" variant="primary" href="/app" size="lg">
            {t('hero.cta')}
          </Button>
        </div>
      </div>

      {/* Product Preview */}
      <div
        className="hero-animate relative z-20 mx-auto mt-16 max-w-5xl px-4 md:mt-24"
        style={{ animation: 'fade-in-up 0.8s ease 0.45s forwards', opacity: 0 }}
      >
        <div className="hero-preview-wrapper group relative transition-transform duration-500 hover:scale-[1.02]">
          {/* Gradient border glow */}
          <div className="absolute -inset-px rounded-xl bg-gradient-to-b from-blue-500/30 via-indigo-500/20 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-800/50 bg-slate-900/50 backdrop-blur-sm shadow-2xl">
            <img
              src="/hero-dashboard-mock.png"
              alt="LoadMind 3D Spatial Planning Concept"
              className="w-full h-auto object-cover max-h-[600px] transition-transform duration-700 group-hover:scale-[1.03]"
              loading="eager"
            />
            {/* Bottom fade to blend into background */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950 to-transparent" />
          </div>
          {/* Reflection glow beneath */}
          <div className="mx-auto -mt-6 h-8 w-3/4 rounded-b-full bg-blue-500/10 blur-xl" />
        </div>
      </div>
    </section>
  );
}
