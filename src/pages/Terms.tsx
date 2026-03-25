import { SEO } from '@/components/SEO';
import { useLanguage } from '@/hooks/useLanguage';
import { PageHero } from '@/components/ui/PageHero';
import { Card } from '@/components/ui/Card';

export default function Terms() {
  const { t } = useLanguage();

  const sections = Array.from({ length: 10 }, (_, i) => ({
    title: t(`terms.t${i + 1}.title`),
    desc: t(`terms.t${i + 1}.desc`),
  }));

  return (
    <>
      <SEO
        title="Terms of Service"
        description="LoadMind terms of service."
        canonical="/terms"
      />
      <PageHero title={t('terms.hero.title')} />

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
