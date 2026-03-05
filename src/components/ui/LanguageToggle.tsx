import { useLanguage } from '@/hooks/useLanguage';

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-lg bg-muted p-1">
      <button
        onClick={() => setLang('en')}
        className={`rounded-md px-3 py-1 text-xs font-medium transition-all ${
          lang === 'en'
            ? 'bg-primary text-background'
            : 'text-muted-fg hover:text-foreground'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLang('ge')}
        className={`rounded-md px-3 py-1 text-xs font-medium transition-all ${
          lang === 'ge'
            ? 'bg-primary text-background'
            : 'text-muted-fg hover:text-foreground'
        }`}
      >
        GE
      </button>
    </div>
  );
}
