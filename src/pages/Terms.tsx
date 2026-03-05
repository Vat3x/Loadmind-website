import { useLanguage } from '@/hooks/useLanguage';
import { PageHero } from '@/components/ui/PageHero';
import { GlassCard } from '@/components/ui/GlassCard';

export default function Terms() {
  const { t } = useLanguage();

  const sections = Array.from({ length: 10 }, (_, i) => ({
    title: t(`terms.t${i + 1}.title`),
    desc: t(`terms.t${i + 1}.desc`),
  }));

  return (
    <>
      <PageHero title={t('terms.hero.title')} />

      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-4">
          <GlassCard>
            <div className="space-y-6">
              {sections.map((s) => (
                <div key={s.title}>
                  <h3 className="text-base font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-fg">{s.desc}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
