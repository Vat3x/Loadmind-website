import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <section className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold gradient-text">404</h1>
        <p className="mt-4 text-xl text-muted-fg">{t('notFound.title')}</p>
        <p className="mt-2 text-sm text-muted-fg">{t('notFound.desc')}</p>
        <div className="mt-8">
          <Button href="/">{t('notFound.cta')}</Button>
        </div>
      </div>
    </section>
  );
}
