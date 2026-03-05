import { Plug, Code2, Webhook, MonitorSmartphone } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { PageHero } from '@/components/ui/PageHero';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export default function ApiIntegrations() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero title={t('api.hero.title')} subtitle={t('api.hero.subtitle')} />

      <section className="pb-20">
        <div className="mx-auto max-w-4xl space-y-8 px-4">
          {/* TMS Integration */}
          <GlassCard>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg icon-gradient">
                <Plug className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{t('api.tms.title')}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-fg">{t('api.tms.desc')}</p>
                <p className="mt-2 text-xs text-primary">{t('api.tms.supported')}</p>
              </div>
            </div>
          </GlassCard>

          {/* Embed Widget */}
          <GlassCard>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg icon-gradient">
                <MonitorSmartphone className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{t('api.embed.title')}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-fg">{t('api.embed.desc')}</p>
                <code className="mt-3 block rounded-lg bg-muted p-3 text-xs font-mono text-muted-fg">
                  {`<iframe src="https://loadmind.app/embed?loadId=..." width="800" height="600"></iframe>`}
                </code>
              </div>
            </div>
          </GlassCard>

          {/* REST API */}
          <GlassCard>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg icon-gradient">
                <Code2 className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-foreground">{t('api.rest.title')}</h3>
                  <Badge variant="coming-soon">{t('common.comingSoon')}</Badge>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-fg">{t('api.rest.desc')}</p>
                <div className="mt-4">
                  <Button variant="secondary" href="/contact" size="sm">{t('api.rest.cta')}</Button>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Webhooks */}
          <GlassCard>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg icon-gradient">
                <Webhook className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-foreground">{t('api.webhooks.title')}</h3>
                  <Badge variant="coming-soon">{t('common.comingSoon')}</Badge>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-fg">{t('api.webhooks.desc')}</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
