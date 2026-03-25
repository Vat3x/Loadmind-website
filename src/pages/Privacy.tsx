import { SEO } from '@/components/SEO';
import { useLanguage } from '@/hooks/useLanguage';
import { PageHero } from '@/components/ui/PageHero';
import { Card } from '@/components/ui/Card';

export default function Privacy() {
  const { t } = useLanguage();

  const sections = Array.from({ length: 11 }, (_, i) => ({
    title: t(`privacy.p${i + 1}.title`),
    desc: t(`privacy.p${i + 1}.desc`),
  }));

  return (
    <>
      <SEO
        title="Privacy Policy"
        description="LoadMind privacy policy."
        canonical="/privacy"
      />
      <PageHero title={t('privacy.hero.title')} />

      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-4">
          <Card>
            <div className="space-y-6">
              {sections.map((s) => (
                <div key={s.title}>
                  <h3 className="text-base font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-fg">{s.desc}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
