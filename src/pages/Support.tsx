import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { MessageCircleQuestion, Mail, BookOpen } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useRevealChildren } from '@/hooks/useRevealChildren';
import { PageHero } from '@/components/ui/PageHero';
import { Card } from '@/components/ui/Card';

export default function Support() {
  const { t } = useLanguage();
  const ref = useRevealChildren<HTMLElement>();

  const channels = [
    {
      icon: MessageCircleQuestion,
      titleKey: 'support.faq.title',
      descKey: 'support.faq.desc',
      to: '/faq',
      ctaKey: 'support.faq.cta',
    },
    {
      icon: Mail,
      titleKey: 'support.email.title',
      descKey: 'support.email.desc',
      href: 'mailto:team@load-mind.com',
      ctaKey: 'support.email.cta',
    },
    {
      icon: BookOpen,
      titleKey: 'support.contact.title',
      descKey: 'support.contact.desc',
      to: '/contact',
      ctaKey: 'support.contact.cta',
    },
  ];

  return (
    <>
      <SEO
        title="Support"
        description="Get help with LoadMind. Browse our FAQ, contact support, or check our documentation."
        canonical="/support"
      />
      <PageHero title={t('support.hero.title')} subtitle={t('support.hero.subtitle')} />

      <section ref={ref} className="pb-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {channels.map((ch, i) => (
              <div key={ch.titleKey} className={`reveal reveal-delay-${i + 1}`}>
                <Card className="flex h-full flex-col items-center text-center">
                  <ch.icon className="mb-4 h-10 w-10 text-primary" />
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{t(ch.titleKey)}</h3>
                  <p className="mb-6 flex-1 text-sm text-muted-fg">{t(ch.descKey)}</p>
                  {ch.to ? (
                    <Link
                      to={ch.to}
                      className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 active:scale-[0.98]"
                    >
                      {t(ch.ctaKey)}
                    </Link>
                  ) : (
                    <a
                      href={ch.href}
                      className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 active:scale-[0.98]"
                    >
                      {t(ch.ctaKey)}
                    </a>
                  )}
                </Card>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-border bg-surface p-6 text-center">
            <p className="text-sm text-muted-fg">
              {t('support.disclaimer')}
            </p>
            <a
              href="mailto:team@load-mind.com"
              className="mt-2 inline-block text-sm font-medium text-primary hover:underline"
            >
              team@load-mind.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
