import { useLanguage } from '@/hooks/useLanguage';

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => setLang('en')}
        className={`rounded-md p-1 transition-all duration-200 ${
          lang === 'en'
            ? 'opacity-100 ring-1 ring-primary'
            : 'opacity-50 hover:opacity-80'
        }`}
        title="English"
      >
        <span className="text-base leading-none">🇺🇸</span>
      </button>
      <button
        onClick={() => setLang('ge')}
        className={`rounded-md p-1 transition-all duration-200 ${
          lang === 'ge'
            ? 'opacity-100 ring-1 ring-primary'
            : 'opacity-50 hover:opacity-80'
        }`}
        title="ქართული"
      >
        <span className="text-base leading-none">🇬🇪</span>
      </button>
    </div>
  );
}
