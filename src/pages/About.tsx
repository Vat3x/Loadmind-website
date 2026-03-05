import { Rocket, Users, Award } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { PageHero } from '@/components/ui/PageHero';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function About() {
  const { t } = useLanguage();

  const milestones = [
    { key: 'about.milestone1', icon: Award },
    { key: 'about.milestone2', icon: Rocket },
    { key: 'about.milestone3', icon: Rocket },
  ];

  return (
    <>
      <PageHero title={t('about.hero.title')} />

      <section className="pb-20">
        <div className="mx-auto max-w-3xl space-y-12 px-4">
          {/* Mission */}
          <Card>
            <h2 className="mb-4 text-xl font-bold gradient-text">{t('about.mission.title')}</h2>
            <p className="text-sm leading-relaxed text-muted-fg">{t('about.mission.desc')}</p>
          </Card>

          {/* Team */}
          <Card>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg icon-gradient">
                <Users className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold gradient-text">{t('about.team.title')}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-fg">{t('about.team.desc')}</p>
              </div>
            </div>
          </Card>

          {/* Milestones */}
          <div>
            <h2 className="mb-6 text-xl font-bold gradient-text">{t('about.milestones.title')}</h2>
            <div className="space-y-4">
              {milestones.map((m) => (
                <Card key={m.key}>
                  <div className="flex items-center gap-3">
                    <m.icon className="h-5 w-5 shrink-0 text-primary" />
                    <p className="text-sm text-foreground">{t(m.key)}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/app">{t('about.cta.try')}</Button>
            <Button variant="secondary" href="/contact">{t('about.cta.contact')}</Button>
          </div>
        </div>
      </section>
    </>
  );
}
