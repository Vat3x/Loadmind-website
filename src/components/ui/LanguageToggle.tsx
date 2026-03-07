import { useLanguage } from '@/hooks/useLanguage';

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="relative flex items-center gap-1 rounded-lg bg-elevated p-1">
      <div
        className="absolute top-1 h-[calc(100%-8px)] w-[calc(50%-4px)] rounded-md bg-primary transition-transform duration-200 ease-out"
        style={{ transform: lang === 'en' ? 'translateX(2px)' : 'translateX(calc(100% + 6px))' }}
      />
      <button
        onClick={() => setLang('en')}
        className={`relative z-10 rounded-md px-3 py-1 text-xs font-medium transition-colors duration-200 ${
          lang === 'en'
            ? 'text-background'
            : 'text-muted-fg hover:text-foreground'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLang('ge')}
        className={`relative z-10 rounded-md px-3 py-1 text-xs font-medium transition-colors duration-200 ${
          lang === 'ge'
            ? 'text-background'
            : 'text-muted-fg hover:text-foreground'
        }`}
      >
        GE
      </button>
    </div>
  );
}
